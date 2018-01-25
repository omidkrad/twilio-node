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
import RecordingList = require('./v1/recording').RecordingList;
import RoomList = require('./v1/room').RoomList;
import Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the V1 version of Video
 *
 * @constructor Twilio.Video.V1
 *
 * @property {Twilio.Video.V1.RecordingList} recordings - recordings resource
 * @property {Twilio.Video.V1.RoomList} rooms - rooms resource
 *
 * @param {Twilio.Video} domain - The twilio domain
 */
/* jshint ignore:end */
class V1 {
  constructor(public domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._recordings = undefined;
  this._rooms = undefined;
}

class V1 extends Version {


Object.defineProperty(V1.prototype,
  'recordings', {
  get: function() {
    this._recordings = this._recordings || new RecordingList(this);
    return this._recordings;
  }
});

Object.defineProperty(V1.prototype,
  'rooms', {
  get: function() {
    this._rooms = this._rooms || new RoomList(this);
    return this._rooms;
  }
});

}

export = V1;
