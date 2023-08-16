'use client';

import Avatar from "@/app/components/Avatar";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import LoadingModal from "@/app/components/modals/LoadingModal";
import Modal from "@/app/components/modals/Modal";
type UserBoxProps = {
    data: User;
}


const UserBox = ({
    data
}:UserBoxProps) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = useCallback(() => {
        // console.log('数据id', data?.id);
        setIsLoading(true);
        

        axios.post('/api/conversation', { 
            userId: data?.id
         }).then((res) => {
            router.push(`/conversations/${res.data.id}`)
         }).finally(() => {
            setIsLoading(false);
         })
    },[data, router]);
    return ( 
       <>
       {
        isLoading && <LoadingModal />
       }
        <div 
        onClick={handleClick}
        className=" flex items-center w-full rounded-lg p-3 space-x-3 bg-white relative cursor-pointer transition hover:bg-neutral-100">
            <Avatar user={data} />
            <div className="min-w-0 flex-1">
                <div className="focus:outline-none">
                    <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-mediumt text-gray-99 ">
                            {data?.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
       </>
     );
}
 
export default UserBox;