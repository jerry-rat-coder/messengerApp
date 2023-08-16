import { useMemo } from "react";
import { useSession } from "next-auth/react";
import { FullConversationType } from "../types";
import { User } from "@prisma/client";
const useOtherUsers = (conversation:FullConversationType | { users: User[] }) => {
    // console.log('Conversation', conversation);
    const session = useSession(); 
    
    const otherUser = useMemo(() => {
        const sessionEmail = session?.data?.user?.email;

        const otherUsers = conversation?.users.filter(user => {
            return user.email !== sessionEmail;
        })
        return otherUsers[0];
    }, [session?.data?.user?.email, conversation.users]);
    
    return otherUser;
}

export default useOtherUsers;