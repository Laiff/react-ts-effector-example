import { ChatDomain } from "./domain";
import { Message } from "./types";
import { deleteMessage, sendMessage } from "./events.";
import { oid } from "../../utils/oid";

const initialState: Message[] = [
  {
    id: oid(),
    user: "system",
    message: "this message from initial state",
    timestamp: new Date().getTime()
  }
];

export const MessageList = ChatDomain.store<Message[]>(initialState)
  .on(sendMessage.done, (state, { result }) => [...state, result])
  .on(deleteMessage.done, (state, { result }) =>
    state.filter(message => message.id !== result.id)
  );