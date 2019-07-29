import { ChatDomain } from "./domain";
import { Message } from "./types";
import { deleteMessage, sendMessage } from "./events.";

export const MessageList = ChatDomain.store<Message[]>([])
  .on(sendMessage.done, (state, { result }) => [...state, result])
  .on(deleteMessage.done, (state, { result }) =>
    state.filter(message => message.id !== result.id)
  );