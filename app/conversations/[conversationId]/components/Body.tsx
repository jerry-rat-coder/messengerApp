'use client';

import useConversation from "@/app/hooks/useConversation";
import { FullMessagesType } from "@/app/types";
import { useEffect, useRef, useState } from "react";
import MessageBox from "./MessageBox";
import axios from "axios";

import { pusherClient } from "@/app/libs/pusher";
import { find } from "lodash";
interface BodyProps {
    initialMessages: FullMessagesType[]
}

const Body = ({initialMessages}:BodyProps) => {
    const [messages, setMessages] = useState(initialMessages);
    const bottomRef = useRef<HTMLDivElement>(null);

    const { conversationId } = useConversation();

    useEffect(() => {
        axios.post(`/api/conversation/${conversationId}/seen`);
    }, [conversationId]);


    useEffect(() => {
        pusherClient.subscribe(conversationId);
        bottomRef.current?.scrollIntoView();

        const newMessageHandler = (newMessage: FullMessagesType) => {
            axios.post(`/api/conversation/${conversationId}/seen`);

            setMessages((messages) => {
                if(find(messages, { id: newMessage.id })){
                    return messages;
                }

                return [...messages, newMessage];
            })

            bottomRef.current?.scrollIntoView();
        }

        const updateMessageHandler = (newMessage: FullMessagesType) => {
            setMessages((current) => current.map((currentMessage) => {
              if (currentMessage.id === newMessage.id) {
                return newMessage;
              }
        
              return currentMessage;
            }))
          };
        

        pusherClient.bind('message:new', newMessageHandler);
        pusherClient.bind('message:update', updateMessageHandler);

        return () => {
            pusherClient.unsubscribe(conversationId);
            pusherClient.unbind('message:new');
            pusherClient.unbind('message:update');
        }
    }, [conversationId]);
    
    return ( 
        <>
        <div className="flex-1 overflow-y-auto">
            {
                messages.map((message, i) => (
                    <MessageBox 
                    key={message.id}
                    isLasted={i === messages.length - 1}
                    data={message}
                    />
                ))
            }
            <div ref={bottomRef} className="pt-24" />
        </div>
        </>
        
     );
}
 
export default Body;