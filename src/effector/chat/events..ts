import { ChatDomain } from "./domain";
import { Message } from "./types";

export const sendMessage = ChatDomain.effect<Message, Message, Error>();

export const deleteMessage = ChatDomain.effect<Message, Message, Error>();
