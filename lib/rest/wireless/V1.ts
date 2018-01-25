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
var CommandList = require('./v1/command').CommandList;
var RatePlanList = require('./v1/ratePlan').RatePlanList;
var SimList = require('./v1/sim').SimList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the V1 version of Wireless
 *
 * @constructor Twilio.Wireless.V1
 *
 * @property {Twilio.Wireless.V1.CommandList} commands - commands resource
 * @property {Twilio.Wireless.V1.RatePlanList} ratePlans - ratePlans resource
 * @property {Twilio.Wireless.V1.SimList} sims - sims resource
 *
 * @param {Twilio.Wireless} domain - The twilio domain
 */
/* jshint ignore:end */
class V1 {
  constructor(public domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._commands = undefined;
  this._ratePlans = undefined;
  this._sims = undefined;
}

class V1 extends Version {


Object.defineProperty(V1.prototype,
  'commands', {
  get: function() {
    this._commands = this._commands || new CommandList(this);
    return this._commands;
  }
});

Object.defineProperty(V1.prototype,
  'ratePlans', {
  get: function() {
    this._ratePlans = this._ratePlans || new RatePlanList(this);
    return this._ratePlans;
  }
});

Object.defineProperty(V1.prototype,
  'sims', {
  get: function() {
    this._sims = this._sims || new SimList(this);
    return this._sims;
  }
});

export = V1;
