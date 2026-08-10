import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { chatFunction } from './functions/chat/resource';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';

const backend = defineBackend({
  auth,
  data,
  chatFunction,
});

// Give the Lambda function permission to call Bedrock
backend.chatFunction.resources.lambda.addToRolePolicy(
  new PolicyStatement({
    actions: ['bedrock:InvokeModel', 'bedrock:Converse'],
    resources: [
  'arn:aws:bedrock:*::foundation-model/amazon.nova-micro-v1:0',
  'arn:aws:bedrock:*:*:inference-profile/us.amazon.nova-micro-v1:0'
],


  })
);
