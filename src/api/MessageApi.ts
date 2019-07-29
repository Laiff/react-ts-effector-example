import { Message } from "../effector/chat/types";

export class MessageApi {
  public static sendMessage = (message: Message) =>
    new Promise<Message>(resolve => setTimeout(
      () => resolve(message),
      2000
    ));

  public static deleteMessage = (message: Message) =>
    new Promise<Message>(resolve => setTimeout(
      () => resolve(message),
      2000
    ));
}