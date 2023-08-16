'use client'

import { signOut } from "next-auth/react";

const EmptyState = () => {
    return ( 
        <div className="
        px-4
        py-10
        sm:px-6
        lg:px-8
        flex
        justify-center
        items-center
        bg-gray-100
        h-full
        ">
            <div className=" flex items-center text-center flex-col">
                <h3 className="text-2xl
                font-semibold
                text-gray-900
                mt-2">
                    Select a chat or start a new conversation
                </h3>
                <button onClick={() => {signOut()}}>Log Out</button>
            </div>
        </div>
     );
}
 
export default EmptyState;