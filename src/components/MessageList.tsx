import React from "react";
import { Message } from "../types";
import MessageItem from "./MessageItem";

interface Props {
  messages: Message[];
  onAddTag: (messageId: string) => void;
}

const MessageList: React.FC<Props> = ({ messages, onAddTag }) => (
  <ul className="space-y-4">
    {messages.map((message) => (
      <MessageItem key={message.id} message={message} onAddTag={onAddTag} />
    ))}
  </ul>
);

export default MessageList;
