'use client'

import useRoutes from "@/app/hooks/useRoutes";
import DesktopItem from "./DesktopItem";
import Avatar from "../Avatar";
import {useState} from 'react'
import { User } from "@prisma/client";
import SettingsModal from "./SettingsModal";

type DesktopSideBarProps = {
    currentUser: User
}

const DesktopSideBar = ({
    currentUser
}: DesktopSideBarProps) => {
    const routes = useRoutes();
    const [ isSettingsOpen, setIsSettingsOpen ] = useState(false);
    // console.log(currentUser);
    return ( 
        <>
        <SettingsModal 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        currentUser={currentUser}
        />
        <div
        className=" 
        hidden 
        lg:fixed 
        lg:inset-y-0 
        lg:left-0 
        lg:w-20 
        lg:pb-4 
        lg:border-r-[1px] 
        lg:overflow-y-auto
        xl:px-6 
        lg:z-40 
        lg:bg-white 
        lg:flex 
        lg:flex-col 
        justify-between"
        >
            <nav 
            className="
            flex 
            flex-col 
            mt-4 
            justify-between">
                <ul 
                role="list" 
                className="
                flex 
                flex-col 
                items-center 
                space-y-1">
                    {
                        routes.map(item => {
                            return (
                                <DesktopItem
                                key={item?.label} 
                                label={item?.label}
                                icon={item?.icon}
                                active={item?.active}
                                onClick={item?.onClick}
                                href={item?.href}
                                />
                            )
                        })
                    }
                </ul>
            </nav>
            <nav
            className="
            flex
            justify-center
            items-center
            mt-4
            "
            >
                <div 
                onClick={() => {setIsSettingsOpen(true)}}
                className="
                cursor-pointer
                hover:opacity-75
                transition
                ">
                    <Avatar user={currentUser} />
                </div>
            </nav>
        </div>
        </>
     );
}
 
export default DesktopSideBar;