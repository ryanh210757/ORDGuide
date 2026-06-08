import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  // Feedback from office visitors/employees
  Feedback: a
    .model({
      name: a.string().required(),
      email: a.email(),
      message: a.string().required(),
      location: a.string(), // Which office area/floor they're giving feedback about
      category: a.string(), // "suggestion", "issue", "compliment", "facility"
      rating: a.integer(), // 1-5 star rating
      createdAt: a.datetime(),
    })
    .authorization((allow) => [allow.guest()]), // Anyone can submit feedback
    
  // Office information for different locations/QR codes
  OfficeInfo: a
    .model({
      title: a.string().required(),
      description: a.string(),
      category: a.string(), // "emergency", "directory", "amenities", "navigation"
      floor: a.string(),
      room: a.string(),
      qrCodeId: a.string(), // Unique ID for each QR code location
      isActive: a.boolean(),
    })
    .authorization((allow) => [allow.guest()]), // Anyone can read office info
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});
