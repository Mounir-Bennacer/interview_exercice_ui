# Chat Application Frontend

This is the frontend application for Part 4 of the chat application exercise. It provides a simple interface for viewing and searching messages within a conversation.

## Setup

1. Clone this repository to your local machine.

2. Install the necessary dependencies:

   ```
   npm install
   ```

3. Rename the `.env.example` file to `.env`:

   ```
   mv .env.example .env
   ```

4. Open the `.env` file and ensure the `REACT_APP_API_URL` is set to the correct backend GraphQL endpoint.

## Running the Application

To start the application, run the following command:

```
npm run start
```

This will start the development server, typically on `http://localhost:3000`. Open this URL in your web browser to view the application.

## Usage

1. Enter a valid Conversation ID in the input field.
2. Use the search bar to search for messages by tags.
3. View the list of messages for the specified conversation.

Note: Make sure the backend server is running and accessible at the URL specified in your `.env` file.
