'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var AuthorizationDocumentList = require(
    './hosted_numbers/authorizationDocument').AuthorizationDocumentList;
var HostedNumberOrderList = require(
    './hosted_numbers/hostedNumberOrder').HostedNumberOrderList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the HostedNumbers version of Preview
 *
 * @constructor Twilio.Preview.HostedNumbers
 *
 * @property {Twilio.Preview.HostedNumbers.AuthorizationDocumentList} authorizationDocuments -
 *          authorizationDocuments resource
 * @property {Twilio.Preview.HostedNumbers.HostedNumberOrderList} hostedNumberOrders -
 *          hostedNumberOrders resource
 *
 * @param {Twilio.Preview} domain - The twilio domain
 */
/* jshint ignore:end */
function HostedNumbers(domain) {
  Version.prototype.constructor.call(this, domain, 'HostedNumbers');

  // Resources
  this._authorizationDocuments = undefined;
  this._hostedNumberOrders = undefined;
}

_.extend(HostedNumbers.prototype, Version.prototype);
HostedNumbers.prototype.constructor = HostedNumbers;

Object.defineProperty(HostedNumbers.prototype,
  'authorizationDocuments', {
  get: function() {
    this._authorizationDocuments = this._authorizationDocuments || new AuthorizationDocumentList(this);
    return this._authorizationDocuments;
  }
});

Object.defineProperty(HostedNumbers.prototype,
  'hostedNumberOrders', {
  get: function() {
    this._hostedNumberOrders = this._hostedNumberOrders || new HostedNumberOrderList(this);
    return this._hostedNumberOrders;
  }
});

export = HostedNumbers;
