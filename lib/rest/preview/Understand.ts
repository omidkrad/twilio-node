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
var ServiceList = require('./understand/service').ServiceList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the Understand version of Preview
 *
 * @constructor Twilio.Preview.Understand
 *
 * @property {Twilio.Preview.Understand.ServiceList} services - services resource
 *
 * @param {Twilio.Preview} domain - The twilio domain
 */
/* jshint ignore:end */
class Understand {
  constructor(public domain) {
  Version.prototype.constructor.call(this, domain, 'understand');

  // Resources
  this._services = undefined;
}

class Understand extends Version {


Object.defineProperty(Understand.prototype,
  'services', {
  get: function() {
    this._services = this._services || new ServiceList(this);
    return this._services;
  }
});

}

export = Understand;
