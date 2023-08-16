'use client'

import Link from "next/link";
import clsx from "clsx";

type DesktopItemProps = {
    label: string,
    icon: any,
    active?: boolean,
    onClick?: () => void,
    href: string
}

const DesktopItem = ({
    label,
    icon:Icon,
    active,
    onClick,
    href
}: DesktopItemProps) => {
    const handleClick = () => {
        if(onClick){
            return onClick();
        }
    }
    return ( 
        <li onClick={handleClick}>
            <Link 
            href={href}
            className={clsx(`
            group
            flex
            justify-center
            items-center
            rounded-md
            p-3
            text-sm
            font-semibold
            leading-6
            text-gray-500
            hover:text-sky-500
            hover:bg-gray-100
            `,
            active && 'text-sky-500 bg-gray-100' 
            )}>
                <Icon className=" w-6 h-6 shrink-0" />
                <span className=" sr-only">{label}</span>
            </Link>
        </li>
     );
}
 
export default DesktopItem;