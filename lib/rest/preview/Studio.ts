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
import FlowList = require('./studio/flow').FlowList;
import Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the Studio version of Preview
 *
 * @constructor Twilio.Preview.Studio
 *
 * @property {Twilio.Preview.Studio.FlowList} flows - flows resource
 *
 * @param {Twilio.Preview} domain - The twilio domain
 */
/* jshint ignore:end */
class Studio {
  constructor(public domain) {
  super(domain, 'Studio');

  // Resources
  this._flows = undefined;
}

class Studio extends Version {


Object.defineProperty(Studio.prototype,
  'flows', {
  get: function() {
    this._flows = this._flows || new FlowList(this);
    return this._flows;
  }
});

}

export = Studio;
