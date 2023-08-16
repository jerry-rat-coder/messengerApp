import { User } from "@prisma/client";
import UserBox from "./UserBox";

type UserListProps = {
    items: User[]
}

const UserList = ({
    items
}: UserListProps) => {
    return ( 
        <aside 
        className="fixed inset-y-0 pb-20 overflow-y-auto lg:block lg:left-20 lg:pb-0 lg:w-80 block w-full left-0 border-r border-gray-200"
        >
            <div className="px-5">
                <div className="flex flex-co">
                    <div className="text-neutral-800 font-bold py-4 text-2xl">
                        People
                    </div>
                </div>
                {
                    items.map(item => (
                        <UserBox 
                        key={item.id}
                        data={item} />
                    ))
                }
            </div>
        </aside>
     );
}
 
export default UserList;