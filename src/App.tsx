import React, { useState, useEffect } from "react";
import { Message } from "./types";
import { fetchMessages, searchMessages, addTag } from "./services/api";
import MessageList from "./components/MessageList";
import TagInput from "./components/TagInput";
import SearchBar from "./components/SearchBar";

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(
    null,
  );

  useEffect((): void => {
    fetchMessages().then(setMessages).catch(console.error);
  }, []);

  const handleSearch = async (tags: string): Promise<void> => {
    try {
      const searchedMessages = await searchMessages(tags);
      setMessages(searchedMessages);
    } catch (error) {
      console.error("Error searching messages:", error);
    }
  };

  const handleAddTag = async (tag: string): Promise<void> => {
    if (!selectedMessageId) return;

    try {
      const updatedMessage = await addTag(selectedMessageId, tag);
      setMessages(
        messages.map(
          (msg: Message): Message =>
            msg.id === updatedMessage.id ? updatedMessage : msg,
        ),
      );
      setSelectedMessageId(null);
    } catch (error) {
      console.error("Error adding tag:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold mb-5 text-center text-gray-800">
            Chat Application
          </h1>
          <SearchBar onSearch={handleSearch} />
          <MessageList messages={messages} onAddTag={setSelectedMessageId} />
          {selectedMessageId && <TagInput onAddTag={handleAddTag} />}
        </div>
      </div>
    </div>
  );
};

export default App;
