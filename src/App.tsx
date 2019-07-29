import * as React from "react";
import { ChatHistory } from "./ChatHistory";
import { ChatInterface } from "./ChatInterface";

export const App: React.FC = () => {


  return (
    <div className="parent">
      <ChatHistory />
      <ChatInterface />
    </div>
  );
};