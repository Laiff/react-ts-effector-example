import * as React from "react";
import { useStore } from "effector-react";
import { MessageList } from "./effector/chat/store";
import { deleteMessage } from "./effector/chat/events.";

export const ChatHistory: React.FC = () => {
  const messages = useStore(MessageList);
  const pending = useStore(deleteMessage.pending);

  return (
    <div className="chat-history">
      {messages.map(message => (
        <div className="message-item" key={message.timestamp}>
          <h3>From: {message.user}</h3>
          <p>{message.message}</p>
          <button
            onClick={() => deleteMessage(message)}
            disabled={pending}>
            { pending ? "Deleting" : "Delete"}
          </button>
        </div>
      ))}
    </div>
  );
};