import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Message } from "../types";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL || "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

const GET_MESSAGES = gql`
  query GetMessages($getMessageDto: GetMessageDto!) {
    getChatConversationMessages(getMessageDto: $getMessageDto) {
      messages {
        id
        text
        sender {
          id
        }
        tags
      }
    }
  }
`;

export const fetchMessages = async (
  conversationId: string,
): Promise<Message[]> => {
  const { data } = await client.query({
    query: GET_MESSAGES,
    variables: {
      getMessageDto: {
        conversationId,
        limit: 50, // Adjust as needed
      },
    },
  });
  return data.getChatConversationMessages.messages;
};

export const searchMessages = async (
  conversationId: string,
  tags: string,
): Promise<Message[]> => {
  const { data } = await client.query({
    query: GET_MESSAGES,
    variables: {
      getMessageDto: {
        conversationId,
        limit: 50, // Adjust as needed
      },
    },
  });

  // Filter messages by tags on the client side
  const tagArray = tags.split(",").map((tag) => tag.trim().toLowerCase());
  return data.getChatConversationMessages.messages.filter((message: any) =>
    message.tags.some((tag: any) => tagArray.includes(tag.toLowerCase())),
  );
};
