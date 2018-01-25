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
var MessagingList = require('./v1/messaging').MessagingList;
var PhoneNumberList = require('./v1/phoneNumber').PhoneNumberList;
var Version = require('../../base/Version');  /* jshint ignore:line */
var VoiceList = require('./v1/voice').VoiceList;


/* jshint ignore:start */
/**
 * Initialize the V1 version of Pricing
 *
 * @constructor Twilio.Pricing.V1
 *
 * @property {Twilio.Pricing.V1.MessagingList} messaging - messaging resource
 * @property {Twilio.Pricing.V1.PhoneNumberList} phoneNumbers -
 *          phoneNumbers resource
 * @property {Twilio.Pricing.V1.VoiceList} voice - voice resource
 *
 * @param {Twilio.Pricing} domain - The twilio domain
 */
/* jshint ignore:end */
class V1 {
  constructor(public domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._messaging = undefined;
  this._phoneNumbers = undefined;
  this._voice = undefined;
}

class V1 extends Version {


Object.defineProperty(V1.prototype,
  'messaging', {
  get: function() {
    this._messaging = this._messaging || new MessagingList(this);
    return this._messaging;
  }
});

Object.defineProperty(V1.prototype,
  'phoneNumbers', {
  get: function() {
    this._phoneNumbers = this._phoneNumbers || new PhoneNumberList(this);
    return this._phoneNumbers;
  }
});

Object.defineProperty(V1.prototype,
  'voice', {
  get: function() {
    this._voice = this._voice || new VoiceList(this);
    return this._voice;
  }
});

}

export = V1;