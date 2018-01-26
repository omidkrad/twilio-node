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
import ServiceList = require('./v1/service').ServiceList;
import Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the V1 version of Proxy
 *
 * @constructor Twilio.Proxy.V1
 *
 * @property {Twilio.Proxy.V1.ServiceList} services - services resource
 *
 * @param {Twilio.Proxy} domain - The twilio domain
 */
/* jshint ignore:end */
class V1 {
  constructor(public domain) {
  super(domain, 'v1');

  // Resources
  this._services = undefined;
}

class V1 extends Version {


Object.defineProperty(V1.prototype,
  'services', {
  get: function() {
    this._services = this._services || new ServiceList(this);
    return this._services;
  }
});

}

export = V1;
