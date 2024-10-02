import React from "react";
import { Message } from "../types";
import MessageItem from "./MessageItem";

interface Props {
  messages: Message[];
}

const MessageList: React.FC<Props> = ({ messages }: Props) => (
  <ul className="space-y-4">
    {messages.map((message: Message) => (
      <MessageItem key={message.id} message={message} />
    ))}
  </ul>
);

export default MessageList;
