'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

import builder = require('xmlbuilder');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * <Response> TwiML for Messages
 */
/* jshint ignore:end */
class MessagingResponse {
  constructor() {
  this.response = builder.create('Response').dec('1.0', 'UTF-8');
}

/* jshint ignore:start */
/**
 * <Message> TwiML Verb
 *
 * @param {object} attributes - ...
 * @param {string} [attributes.to] Phone Number to send Message to
 * @param {string} [attributes.from] Phone Number to send Message from
 * @param {string} [attributes.action] Action URL
 * @param {string} [attributes.method] Action URL Method
 * @param {string} [attributes.statusCallback] Status callback URL. Deprecated in favor of action.
 * @param {string} [body] Message Body
 *
 * @returns Message
 */
/* jshint ignore:end */
message(attributes, body) {
  return new Message(this.response.ele('Message', attributes, body));
};

/* jshint ignore:start */
/**
 * <Redirect> TwiML Verb
 *
 * @param {object} attributes - ...
 * @param {string} [attributes.method] Redirect URL method
 * @param {url} url Redirect URL
 */
/* jshint ignore:end */
redirect(attributes, url) {
  this.response.ele('Redirect', attributes, url);
};

/* jshint ignore:start */
/**
 * Convert to TwiML
 *
 * @returns TwiML XML
 */
/* jshint ignore:end */
toString() {
  return this.response.end();
};


/* jshint ignore:start */
/**
 * <Message> TwiML Verb
 *
 * @param {object} message message <Message> TwiML Verb
 */
/* jshint ignore:end */
class Message {
  constructor(public message) {
  this.message = message;
}

/* jshint ignore:start */
/**
 * <Body> TwiML Noun
 *
 * @param {object} attributes - TwiML attributes
 * @param {string} message Message Body
 */
/* jshint ignore:end */
body(attributes, message) {
  this.message.ele('Body', attributes, message);
};

/* jshint ignore:start */
/**
 * <Media> TwiML Noun
 *
 * @param {object} attributes - TwiML attributes
 * @param {url} url Media URL
 */
/* jshint ignore:end */
media(attributes, url) {
  this.message.ele('Media', attributes, url);
};

}

export = MessagingResponse;
