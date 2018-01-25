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
import TrunkList = require('./v1/trunk').TrunkList;
import Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the V1 version of Trunking
 *
 * @constructor Twilio.Trunking.V1
 *
 * @property {Twilio.Trunking.V1.TrunkList} trunks - trunks resource
 *
 * @param {Twilio.Trunking} domain - The twilio domain
 */
/* jshint ignore:end */
class V1 {
  constructor(public domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._trunks = undefined;
}

class V1 extends Version {


Object.defineProperty(V1.prototype,
  'trunks', {
  get: function() {
    this._trunks = this._trunks || new TrunkList(this);
    return this._trunks;
  }
});

}

export = V1;
