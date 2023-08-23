'use client';
import Image from "next/image";
import {User} from '@prisma/client'
import { useMemo } from "react";
import useActiveList from "../hooks/useActive";
type AvatarProps = {
    user: User
}

const Avatar = ({
    user
}:AvatarProps) => {
    const {members} = useActiveList();
    const isActive = members.some((memberEmail) => {
        return memberEmail === user.email;
    })
    return ( 
        <div className="relative">
            <div className=" relative  rounded-full inline-block overflow-hidden h-9 w-9 md:w-11 md:h-11">
                <Image
                src={user?.image || '/images/placeholder.jpg'}
                alt='Avatar'
                fill
                />
            </div>
                {
                    isActive && (
                        <span className=" inline-block absolute top-0 right-0 bg-green-500 rounded-full w-2 h-2 md:w-3 md:h-3 ring-2 ring-white">
                        </span>
                    )
                }
        </div>
     );
}
 
export default Avatar;