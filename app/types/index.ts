import { Message, Conversation, User } from "@prisma/client"


export type FullMessagesType = Message & {
    sender: User,
    seen: User[]
}

export type FullConversationType = Conversation & {
    users: User[];
    messages: FullMessagesType[];
}
