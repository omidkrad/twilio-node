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
var CredentialList = require('./v2/credential').CredentialList;
var ServiceList = require('./v2/service').ServiceList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the V2 version of Chat
 *
 * @constructor Twilio.Chat.V2
 *
 * @property {Twilio.Chat.V2.CredentialList} credentials - credentials resource
 * @property {Twilio.Chat.V2.ServiceList} services - services resource
 *
 * @param {Twilio.Chat} domain - The twilio domain
 */
/* jshint ignore:end */
class V2 {
  constructor(public domain) {
  Version.prototype.constructor.call(this, domain, 'v2');

  // Resources
  this._credentials = undefined;
  this._services = undefined;
}

class V2 extends Version {


Object.defineProperty(V2.prototype,
  'credentials', {
  get: function() {
    this._credentials = this._credentials || new CredentialList(this);
    return this._credentials;
  }
});

Object.defineProperty(V2.prototype,
  'services', {
  get: function() {
    this._services = this._services || new ServiceList(this);
    return this._services;
  }
});

export = V2;
