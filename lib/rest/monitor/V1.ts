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
import AlertList = require('./v1/alert').AlertList;
import EventList = require('./v1/event').EventList;
import Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the V1 version of Monitor
 *
 * @constructor Twilio.Monitor.V1
 *
 * @property {Twilio.Monitor.V1.AlertList} alerts - alerts resource
 * @property {Twilio.Monitor.V1.EventList} events - events resource
 *
 * @param {Twilio.Monitor} domain - The twilio domain
 */
/* jshint ignore:end */
class V1 {
  constructor(public domain) {
  super(domain, 'v1');

  // Resources
  this._alerts = undefined;
  this._events = undefined;
}

class V1 extends Version {


Object.defineProperty(V1.prototype,
  'alerts', {
  get: function() {
    this._alerts = this._alerts || new AlertList(this);
    return this._alerts;
  }
});

Object.defineProperty(V1.prototype,
  'events', {
  get: function() {
    this._events = this._events || new EventList(this);
    return this._events;
  }
});

}

export = V1;
