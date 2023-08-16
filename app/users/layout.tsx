import SideBar from "../components/sidebar/SideBar";
import getUsers from "../actions/getUsers";
import UserList from "./components/UserList";


const UsersLayout = async ({
    children
}:{
    children:React.ReactNode
}) => {
    const users = await getUsers();



    return ( 
        // @ts-expect-error Server Component
        <SideBar>
            <div className="h-full">
                <UserList items={users as any} />
                {children}
            </div>  
        </SideBar>
     );
}
 
export default UsersLayout;