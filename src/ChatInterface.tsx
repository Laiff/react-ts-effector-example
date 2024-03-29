import * as React from "react";
import { useState } from "react";
import { sendMessage } from "./effector/chat/events.";
import { useStore } from "effector-react";
import { SystemStore } from "./effector/system/store";
import { ChatDomain } from "./effector/chat/domain";
import { forward } from "effector";
import { oid } from "./utils/oid";
import { Message } from "./effector/chat/types";
import { clearSession, updateSession } from "./effector/system/events";

const onSend = ChatDomain.event<string>();

forward({
  from: onSend.map<Message>(message => ({
    id: oid(),
    user: SystemStore.getState().userName,
    timestamp: new Date().getTime(),
    message,
  })),
  to: sendMessage
});

export const ChatInterface: React.FC = () => {
  const { userName } = useStore(SystemStore);
  const pending = useStore(sendMessage.pending);

  const [message, updateMessage] = useState("");

  const keyPress = (e: React.KeyboardEvent<any>) => {
    if (e.key === "Enter") {
      send();
    }
  };

  const send = () => onSend(message);
  const login = () => updateSession({
    userName: "LoggedInUser",
    loggedIn: true,
    session: "qwe"
  });

  const logout = () => clearSession();

  return (
    <div className="chat-interface">
      <h3>User: {userName} </h3>
      <input
        value={message}
        onChange={e => updateMessage(e.target.value)}
        onKeyPress={keyPress}
        className="chat-input"
        placeholder="Type a message..."
      />
      <button onClick={send} disabled={pending}>{ pending ? "Loading" : "Send"}</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
