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
import Domain = require('../base/Domain');  /* jshint ignore:line */
import V1 = require('./accounts/V1');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize accounts domain
 *
 * @constructor Twilio.Accounts
 *
 * @property {Twilio.Accounts.V1} v1 - v1 version
 * @property {Twilio.Accounts.V1.CredentialList} credentials - credentials resource
 *
 * @param {Twilio} twilio - The twilio client
 */
/* jshint ignore:end */
class Accounts {
  constructor(public twilio) {
  Domain.prototype.constructor.call(this, twilio, 'https://accounts.twilio.com');

  // Versions
  this._v1 = undefined;
}

class Accounts extends Domain {


Object.defineProperty(Accounts.prototype,
  'v1', {
  get: function() {
    this._v1 = this._v1 || new V1(this);
    return this._v1;
  }
});

Object.defineProperty(Accounts.prototype,
  'credentials', {
  get: function() {
    return this.v1.credentials;
  }
});

}

export = Accounts;
