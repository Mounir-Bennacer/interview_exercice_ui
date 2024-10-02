import React, { useState, useEffect } from "react";
import { Message } from "./types";
import { fetchMessages, searchMessages } from "./services/api";
import MessageList from "./components/MessageList";
import SearchBar from "./components/SearchBar";
import { ApolloProvider } from "@apollo/client";
import { client } from "./services/api";

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversationId, setConversationId] = useState<string>("");

  useEffect((): void => {
    // You might want to adjust this to fetch messages for a specific conversation
    if (conversationId) {
      fetchMessages(conversationId).then(setMessages).catch(console.error);
    }
  }, [conversationId]);

  const handleSearch = async (tags: string): Promise<void> => {
    if (!conversationId) {
      console.error("Conversation ID is required");
      return;
    }
    try {
      const searchedMessages = await searchMessages(conversationId, tags);
      setMessages(searchedMessages);
    } catch (error) {
      console.error("Error searching messages:", error);
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
          <input
            type="text"
            value={conversationId}
            onChange={(e) => setConversationId(e.target.value)}
            placeholder="Enter Conversation ID"
            className="w-full px-3 py-2 mb-4 border rounded-md"
          />
          <SearchBar onSearch={handleSearch} />
          <MessageList messages={messages} />
        </div>
      </div>
    </div>
  );
};

const AppWithApollo: React.FC = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default AppWithApollo;
