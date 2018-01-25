'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var builder = require('xmlbuilder');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * <Response> TwiML for Faxes
 */
/* jshint ignore:end */
function FaxResponse() {
  this.response = builder.create('Response').dec('1.0', 'UTF-8');
}

/* jshint ignore:start */
/**
 * <Receive> TwiML Verb
 *
 * @param {object} attributes - ...
 * @param {string} [attributes.action] Receive action URL
 * @param {string} [attributes.method] Receive action URL method
 */
/* jshint ignore:end */
FaxResponse.prototype.receive = function receive(attributes) {
  this.response.ele('Receive', attributes);
};

/* jshint ignore:start */
/**
 * Convert to TwiML
 *
 * @returns TwiML XML
 */
/* jshint ignore:end */
FaxResponse.prototype.toString = function toString() {
  return this.response.end();
};

export = FaxResponse;
