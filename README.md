# Next.js Chatbot with Exa and the AI SDK

This Next.js application allows you to chat with an AI assistant that can search the web for information in real-time.

## Setup

1. Clone this repository
2. Copy `.env.example` to `.env` and add your API keys:
   ```
   OPENAI_API_KEY="your-openai-api-key"
   EXA_API_KEY="your-exa-api-key"
   ```

3. Install dependencies and start the development server:
   ```bash
   npm install
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to use the chat application.

## How It Works

The app uses the AI SDK to connect to OpenAI's models and provides a custom web search tool that fetches real-time information from the web using Exa API.
