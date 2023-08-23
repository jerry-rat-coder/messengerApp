'use client';

import { User } from "@prisma/client";
import Image from "next/image";
interface AvatarGroupProps {
     users?: User[]
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({
    users = []
}) => {
    const slicedUsers = users.slice(0, 3);
    const postionMap = [
        'bottom-0 left-0',
        'bottom-0 right-0',
        'top-0 left-[12px]'
    ]
    return ( 
        <div className="relative w-11 h-11">
            {
                slicedUsers.map((user, index) => (
                    <div 
                    key={user.id}
                    className={`absolute inline-block w-[21px] h-[21px] rounded-full overflow-hidden ${postionMap[index]}`}>
                        <Image 
                        alt='Avatar'
                        src={user.image ?? '/images/placeholder.jpg'}
                        fill
                        />
                    </div>
                ))
            }
        </div>
     );
}

export default AvatarGroup;