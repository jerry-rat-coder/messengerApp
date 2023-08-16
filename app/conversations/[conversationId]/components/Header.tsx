'use client';
import { useEffect, useMemo, useState } from "react";
import useOtherUser from "@/app/hooks/useOtherUsers";
import { Conversation, User } from "@prisma/client";
import Link from 'next/link'
import {HiChevronLeft} from 'react-icons/hi'
import {HiEllipsisHorizontal} from 'react-icons/hi2'
import Avatar from "@/app/components/Avatar";
import DrawerProfile from "./DrawerProfile";
import useActiveList from "@/app/hooks/useActive";
type HeaderProps = {
    conversation: Conversation & {
        users: User[]
    }
}

const Header = ({conversation}:HeaderProps) => {
    const { members } = useActiveList();
    // console.log('在线',members, otherUser.email);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const otherUser = useOtherUser(conversation);
    // console.log('在线',members, otherUser.email);
    const isActive = members.some((memberEmail) => {
            return memberEmail === otherUser.email
        });

    const statusText = useMemo(() => {
        if(conversation?.isGroup){
            const activeNums = conversation?.users.filter((user) => {
                return members.some((memberEmail) => {
                    return memberEmail === user.email
                })
            }).length;
            return `${conversation?.users.length} members ${activeNums} Online` ;
        }

        return isActive ? 'Active' : 'Offline' ;
    },[conversation, isActive]);

    return ( 
        <>
        <DrawerProfile
        isOpen={drawerOpen}
        onClose={() => { setDrawerOpen(false) }}
        data={conversation}
        />
        <div className="bg-white w-full flex justify-between items-center  boder-b-[1px] px-4 py-3 lg:px-6 shadow-sm">
            <div className="flex gap-3 items-center">
                <Link
                href="/conversations"
                className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer"
                >
                    <HiChevronLeft size={32} />
                </Link>
                <Avatar user={otherUser} />
                <div className="flex flex-col">
                   <div>{conversation?.name || otherUser.name}</div>
                   <div className="text-sm font-light text-neutral-500">{statusText}</div>
                </div>
            </div>
            <HiEllipsisHorizontal 
            size={32}
            onClick={() => {setDrawerOpen(true)}}
            className="text-sky-500 hover:text-sky-600 transition cursor-pointer"            
            />
        </div>
        </>
        
     );
}
 
export default Header;