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
import CredentialList = require('./v1/credential').CredentialList;
import Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the V1 version of Accounts
 *
 * @constructor Twilio.Accounts.V1
 *
 * @property {Twilio.Accounts.V1.CredentialList} credentials - credentials resource
 *
 * @param {Twilio.Accounts} domain - The twilio domain
 */
/* jshint ignore:end */
class V1 {
  constructor(public domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._credentials = undefined;
}

class V1 extends Version {


Object.defineProperty(V1.prototype,
  'credentials', {
  get: function() {
    this._credentials = this._credentials || new CredentialList(this);
    return this._credentials;
  }
});

}

export = V1;
