import * as React from "react";
import { render } from "react-dom";

import "./styles.css";
import { deleteMessage, sendMessage } from "./effector/chat/events.";
import { MessageApi } from "./api/MessageApi";
import { App } from "./App";

sendMessage.use(MessageApi.sendMessage);
deleteMessage.use(MessageApi.deleteMessage);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
