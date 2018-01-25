'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

import _ = require('lodash');  /* jshint ignore:line */
import AuthorizationDocumentList = require(
    './hosted_numbers/authorizationDocument').AuthorizationDocumentList;
import HostedNumberOrderList = require(
    './hosted_numbers/hostedNumberOrder').HostedNumberOrderList;
import Version = require('../../base/Version');  /* jshint ignore:line */


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
class HostedNumbers {
  constructor(public domain) {
  Version.prototype.constructor.call(this, domain, 'HostedNumbers');

  // Resources
  this._authorizationDocuments = undefined;
  this._hostedNumberOrders = undefined;
}

class HostedNumbers extends Version {


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

}

export = HostedNumbers;
