'use client'

import useRouteses from "@/app/hooks/useRoutes";
import useConversation from "@/app/hooks/useConversation";
import MobileFooterItem from "./MobileFooterItem";
const MobileFooter = () => {
    const { isOpen } = useConversation();
    const routes = useRouteses();
    if(isOpen){
        return null;
    }
    return ( 
        <div className="
        fixed
        bottom-0
        bg-white
        w-full
        flex
        justify-between
        items-center
        z-40
        border-t-[1px]
        lg:hidden
        ">
            {
                routes.map(item => {
                    return (
                        <MobileFooterItem 
                        key={item?.label}
                        label={item?.label}
                        icon={item?.icon}
                        href={item?.href}
                        active={item?.active}
                        onClick={item?.onClick}
                        />
                    )
                })
            }
        </div>
     );
}
 
export default MobileFooter;