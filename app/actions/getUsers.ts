
import getSession from "./getSession";
import prisma from '@/app/libs/prismadb'
async function getUsers() {
    try {
        const session = await getSession();

        if(!session?.user?.email){
            return null;
        }
        
        const users = await prisma.user.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            where: {
                NOT: {
                    email: session?.user?.email
                }
            }
        })

        return users;
    } catch (error) {
        return [];
    }
}

export default getUsers;