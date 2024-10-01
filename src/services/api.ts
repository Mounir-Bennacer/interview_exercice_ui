import { Message } from "../types";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchMessages = async (): Promise<Message[]> => {
  const response = await fetch(`${API_URL}/messages`);
  if (!response.ok) {
    throw new Error("Failed to fetch messages");
  }
  return response.json();
};

export const searchMessages = async (tags: string): Promise<Message[]> => {
  const response = await fetch(`${API_URL}/messages?tags=${tags}`);
  if (!response.ok) {
    throw new Error("Failed to search messages");
  }
  return response.json();
};

export const addTag = async (
  messageId: string,
  tag: string,
): Promise<Message> => {
  const response = await fetch(`${API_URL}/messages/${messageId}/tags`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tags: [tag] }),
  });
  if (!response.ok) {
    throw new Error("Failed to add tag");
  }
  return response.json();
};
