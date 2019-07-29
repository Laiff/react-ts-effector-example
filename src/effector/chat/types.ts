export interface Message {
  id: string;
  user: string;
  message: string;
  timestamp: number;
}

export interface ChatState {
  messages: Message[];
}
