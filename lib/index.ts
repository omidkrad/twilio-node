'use strict';

import Twilio = require('./rest/Twilio');
import webhooks = require('./webhooks/webhooks');
import obsolete = require('./base/obsolete');

// Shorthand to automatically create a RestClient
const initializer: any = function(accountSid: string, authToken: string, opts: any) {
  return new Twilio(accountSid, authToken, opts);
};

// Main functional components of the Twilio module
initializer.Twilio = Twilio;
initializer.jwt = {
  AccessToken: require('./jwt/AccessToken'),
  ClientCapability: require('./jwt/ClientCapability'),
  taskrouter: {
    TaskRouterCapability: require('./jwt/taskrouter/TaskRouterCapability'),
    util: require('./jwt/taskrouter/util')
  }
};
initializer.twiml = {
  VoiceResponse: require('./twiml/VoiceResponse'),
  MessagingResponse: require('./twiml/MessagingResponse'),
  FaxResponse: require('./twiml/FaxResponse')
};

// Add obsolete clients
initializer.RestClient = obsolete.RestClient;
initializer.PricingClient = obsolete.PricingClient;
initializer.MonitorClient = obsolete.MonitorClient;
initializer.TaskRouterClient = obsolete.TaskRouterClient;
initializer.IpMessagingClient = obsolete.IpMessagingClient;
initializer.LookupsClient = obsolete.LookupsClient;
initializer.TrunkingClient = obsolete.TrunkingClient;

// Setup webhook helper functionality
initializer.validateRequest = webhooks.validateRequest;
initializer.validateExpressRequest = webhooks.validateExpressRequest;
initializer.webhook = webhooks.webhook;

// Public module interface is a function, which passes through to RestClient constructor
export = initializer;
