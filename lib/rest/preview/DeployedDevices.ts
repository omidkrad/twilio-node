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
var FleetList = require('./deployed_devices/fleet').FleetList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the DeployedDevices version of Preview
 *
 * @constructor Twilio.Preview.DeployedDevices
 *
 * @property {Twilio.Preview.DeployedDevices.FleetList} fleets - fleets resource
 *
 * @param {Twilio.Preview} domain - The twilio domain
 */
/* jshint ignore:end */
class DeployedDevices {
  constructor(domain) {
  Version.prototype.constructor.call(this, domain, 'DeployedDevices');

  // Resources
  this._fleets = undefined;
}

class DeployedDevices extends Version {


Object.defineProperty(DeployedDevices.prototype,
  'fleets', {
  get: function() {
    this._fleets = this._fleets || new FleetList(this);
    return this._fleets;
  }
});

export = DeployedDevices;
