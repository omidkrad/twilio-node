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
import V1 = require('./lookups/V1');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize lookups domain
 *
 * @constructor Twilio.Lookups
 *
 * @property {Twilio.Lookups.V1} v1 - v1 version
 * @property {Twilio.Lookups.V1.PhoneNumberList} phoneNumbers -
 *          phoneNumbers resource
 *
 * @param {Twilio} twilio - The twilio client
 */
/* jshint ignore:end */
class Lookups {
  constructor(public twilio) {
  super(twilio, 'https://lookups.twilio.com');

  // Versions
  this._v1 = undefined;
}

class Lookups extends Domain {


Object.defineProperty(Lookups.prototype,
  'v1', {
  get: function() {
    this._v1 = this._v1 || new V1(this);
    return this._v1;
  }
});

Object.defineProperty(Lookups.prototype,
  'phoneNumbers', {
  get: function() {
    return this.v1.phoneNumbers;
  }
});

}

export = Lookups;
