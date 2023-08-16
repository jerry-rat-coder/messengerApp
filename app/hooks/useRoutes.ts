import { usePathname } from "next/navigation";
import useConversation from "./useConversation";
import {useMemo} from 'react'
import { HiChat } from 'react-icons/hi'
import { HiUsers, HiArrowLeftOnRectangle } from 'react-icons/hi2'
import { signOut } from "next-auth/react";

const useRouteses = () => {
    const pathname = usePathname();
    const { conversationId } = useConversation();

    const routes = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: HiChat,
            active: pathname === '/conversations' || !!conversationId
        },
        {
            label: 'Users',
            href: '/users',
            icon: HiUsers,
            active: pathname === '/users'
        },
        {
            label: 'Logout',
            href: '#',
            onClick: () => { signOut() },
            icon: HiArrowLeftOnRectangle
        }
    ], [conversationId, pathname]);

    return routes;
}
export default useRouteses;