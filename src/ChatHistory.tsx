import * as React from "react";
import { useStore } from "effector-react";
import { MessageList } from "./effector/chat/store";
import { deleteMessage } from "./effector/chat/events.";

export const ChatHistory: React.FC = () => {
  const messages = useStore(MessageList);

  return (
    <div className="chat-history">
      {messages.map(message => (
        <div className="message-item" key={message.timestamp}>
          <h3>From: {message.user}</h3>
          <p>{message.message}</p>
          <button onClick={() => deleteMessage(message)}>delete</button>
        </div>
      ))}
    </div>
  );
};