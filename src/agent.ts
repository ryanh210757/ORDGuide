import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource';

const client = generateClient<Schema>();

export async function askOfficeAgent(
  message: string,
  conversationHistory: { role: string; content: string }[] = []
) {
  const response = await client.queries.chat({
    message,
    conversationHistory: JSON.stringify(conversationHistory),
  });
  return response.data;
}
