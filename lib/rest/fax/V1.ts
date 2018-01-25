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
var FaxList = require('./v1/fax').FaxList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the V1 version of Fax
 *
 * @constructor Twilio.Fax.V1
 *
 * @property {Twilio.Fax.V1.FaxList} faxes - faxes resource
 *
 * @param {Twilio.Fax} domain - The twilio domain
 */
/* jshint ignore:end */
class V1 {
  constructor(public domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._faxes = undefined;
}

class V1 extends Version {


Object.defineProperty(V1.prototype,
  'faxes', {
  get: function() {
    this._faxes = this._faxes || new FaxList(this);
    return this._faxes;
  }
});

}

export = V1;
