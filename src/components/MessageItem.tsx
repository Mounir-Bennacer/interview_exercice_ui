import React from "react";
import { Message } from "../types";

interface Props {
  message: Message;
}

const MessageItem: React.FC<Props> = ({ message }: Props) => (
  <li className="bg-white shadow rounded-lg p-4">
    <div className="flex justify-between items-start">
      <div>
        <p className="font-semibold text-gray-800">{message.sender.id}</p>
        <p className="text-gray-600 mt-1">{message.text}</p>
      </div>
      <button className="px-3 py-1 bg-cyan-500 text-white text-sm rounded hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400">
        Add Tag
      </button>
    </div>
    {message.tags.length > 0 && (
      <div className="mt-2">
        <p className="text-sm text-gray-500">Tags:</p>
        <div className="flex flex-wrap gap-1 mt-1">
          {message.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    )}
  </li>
);

export default MessageItem;
