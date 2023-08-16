import getConversationById from "@/app/actions/getConversationById";
import getMessages from '@/app/actions/getMessages'
import EmptyState from "@/app/components/EmptyState";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";
// import { Conversation } from "@prisma/client";
interface IParams {
    conversationId: string;
}

export default async function ChatId({ params }: { params: IParams }) {
      const {conversationId} = params;

      const conversation = await getConversationById(params.conversationId);
      // console.log('Server Conversation',conversationId);

      const messages = await getMessages(params.conversationId);
      return (
        <div className="lg:pl-80  h-full">
          <div className="flex flex-col h-full">
            {
              !conversation ? (
                <EmptyState />
              ): (
                <>
                <Header conversation={conversation as any} />
                <Body initialMessages={messages} />
                <Form />
                </>
              )
            }
          </div>
        </div>
      )
}