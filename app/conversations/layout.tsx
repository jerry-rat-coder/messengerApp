import SideBar from "@/app/components/sidebar/SideBar";
import ConversationList from "@/app/conversations/components/ConversationList";
import getConversations from "@/app/actions/getConversations";
import getUsers from "@/app/actions/getUsers";
const ConversationsLayout = async ({
    children
}:{
    children:React.ReactNode
}) => {
    const conversations = await getConversations();
    const users = await getUsers();
    return ( 
        // @ts-expect-error Server Component
        <SideBar>
            <div className="h-full">
                <ConversationList users={users!}  initialItems={conversations} />
                {children}
            </div>  
        </SideBar>
     );
}
 
export default ConversationsLayout;