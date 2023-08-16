'use client'

import Link from "next/link";
import clsx from "clsx";

type MobileFooterItemProps = {
    label?: string,
    icon?: any,
    active?: boolean,
    onClick?: () => void,
    href?: string
}

const MobileFooterItem = ({
    label,
    icon: Icon,
    active,
    onClick,
    href
}: MobileFooterItemProps) => {
    const handleClick = () => {
        if(onClick){
            return onClick();
        }
    }
    return ( 
        <Link 
        key={label}
        onClick={handleClick}
        href={href as string}
        className={clsx(`
        flex
        justify-center
        items-center
        w-full
        p-4
        rounded-md
        text-sm
        leading-6
        font-semibold
        text-gray-500
        hover:text-sky-500
        hover:bg-gray-100
        `,
        active && 'text-sky-500 bg-gray-100'
        )}
        >
            <Icon className="w-6 h-6" />
        </Link>
     );
}
 
export default MobileFooterItem;