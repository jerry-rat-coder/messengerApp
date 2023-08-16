import prisma from '@/app/libs/prismadb'
import getCurrentUser from '@/app/actions/getCurrentUser'
import { NextResponse } from 'next/server'
import { pusherServer } from '@/app/libs/pusher';

export async function POST(req: Request){
    try {
        const currentUser = await getCurrentUser();

        if(!currentUser?.email || !currentUser?.id){
            return new NextResponse('Unauthorized', { status: 401 });
        }
        // console.log('登录用户id', currentUser.id);
        const body = await req.json();
        const { userId, isGroup, members, name } = body;

        if(isGroup && ( !members || members.length < 2 || !name )){
            return new NextResponse('Invalid data', { status: 400 });
        }

        if(isGroup){
            
            const newConversation = await prisma.conversation.create({
                data: {
                    name,
                    isGroup,
                    users: {
                        connect: [
                            ...members.map((member: { value:string }) => ({
                                id: member.value
                            })),
                            {
                                id: currentUser.id
                            }
                        ]
                    }
                },
                include: {
                    users: true
                }
            })

            return NextResponse.json(newConversation);
        }
        const existingConversations = await prisma.conversation.findMany({
            where: {
                OR: [
                    {
                        userIds: {
                            equals: [userId, currentUser.id]
                        }
                    },
                    {
                        userIds: {
                            equals: [currentUser.id, userId]
                        }
                    }
                ]
            }
        })

            const singleConversation = existingConversations[0];
            //必须特判！！！
            if(singleConversation)return NextResponse.json(singleConversation); 

        const newConversation = await prisma.conversation.create({
            data: {
                users: {
                    connect: [
                        {
                            id: currentUser.id
                        },
                        {
                            id: userId
                        }
                    ]
                }
            },
            include: {
                users: true
            }
        })

         // Update all connections with new conversation
        newConversation.users.map((user) => {
        if (user.email) {
          pusherServer.trigger(user.email, 'conversation:new', newConversation);
        }
      });


        return NextResponse.json(newConversation);
    } catch (error) {
        console.log(error);
        return new NextResponse('Invalid Error', { status: 500 });
    }
}