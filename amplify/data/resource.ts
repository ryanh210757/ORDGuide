import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { chatFunction } from '../functions/chat/resource';

const schema = a.schema({
  // Feedback from office visitors/employees
  Feedback: a
    .model({
      name: a.string().required(),
      email: a.email(),
      message: a.string().required(),
      location: a.string(),
      category: a.string(),
      rating: a.integer(),
      createdAt: a.datetime(),
    })
    .authorization((allow) => [
      allow.guest(),
      allow.publicApiKey()
    ]),

  // Office information for different locations/QR codes
  OfficeInfo: a
    .model({
      title: a.string().required(),
      description: a.string(),
      category: a.string(),
      floor: a.string(),
      room: a.string(),
      qrCodeId: a.string(),
      isActive: a.boolean(),
    })
    .authorization((allow) => [
      allow.guest(),
      allow.publicApiKey()
    ]),

  // Chat query for Bedrock agent
  chat: a
    .query()
    .arguments({
      message: a.string().required(),
      conversationHistory: a.string(),
    })
    .returns(a.string())
    .authorization((allow) => [allow.guest(), allow.publicApiKey()])
    .handler(a.handler.function(chatFunction)),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
