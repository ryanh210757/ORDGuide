import { BedrockRuntimeClient, ConverseCommand } from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({ region: process.env.AWS_REGION });

export const handler = async (event: any) => {
  const { message, conversationHistory } = event.arguments;

  const history = conversationHistory ? JSON.parse(conversationHistory) : [];

  const messages = [
    ...history.map((msg: any) => ({
      role: msg.role,
      content: [{ text: msg.content }],
    })),
    {
      role: "user",
      content: [{ text: message }],
    },
  ];

  const command = new ConverseCommand({
    modelId: "us.amazon.nova-micro-v1:0",
    system: [
      {
        text: `You are a helpful assistant for our office building.
        
OFFICE HOURS: Monday–Friday, 8am–5pm

FLOOR MAP:
- Floor 1: Reception, Waiting Area, Room 101 (Conference)
- Floor 2: HR, Finance, Room 201 (Break Room)

FAQ:
Q: Where do I park? A: Visitor parking is in Lot B on the north side.
Q: Where is the bathroom? A: Down the hall to the left on each floor.
Q: How do I submit feedback? A: Use the Feedback form on this app.

Only answer questions related to the office. Be friendly and concise.`,
      },
    ],
    messages,
  });

  const response = await client.send(command);
  return response.output?.message?.content?.[0]?.text ?? "Sorry, I couldn't get a response.";
};
