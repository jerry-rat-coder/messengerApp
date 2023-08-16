import { NextResponse } from 'next/server'
import prisma from '@/app/libs/prismadb'
import bcrypt from 'bcrypt'
export async function POST(req:Request) {
    try {
        const body = await req.json();

        const { name, password, email } = body;

        // 空

        const exisitingUser = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(exisitingUser) {
            return new NextResponse('Email already exists', { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const currentUser = await prisma.user.create({
            data: {
                name,
                email,
                hashedPassword
            }
        })
        
        return NextResponse.json(currentUser);
        
    } catch (error) {
        return new NextResponse('Internal Error', { status: 500 });
    }
}