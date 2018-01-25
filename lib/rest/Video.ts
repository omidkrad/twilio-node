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
var Domain = require('../base/Domain');  /* jshint ignore:line */
var V1 = require('./video/V1');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize video domain
 *
 * @constructor Twilio.Video
 *
 * @property {Twilio.Video.V1} v1 - v1 version
 * @property {Twilio.Video.V1.RecordingList} recordings - recordings resource
 * @property {Twilio.Video.V1.RoomList} rooms - rooms resource
 *
 * @param {Twilio} twilio - The twilio client
 */
/* jshint ignore:end */
class Video {
  constructor(public twilio) {
  Domain.prototype.constructor.call(this, twilio, 'https://video.twilio.com');

  // Versions
  this._v1 = undefined;
}

class Video extends Domain {


Object.defineProperty(Video.prototype,
  'v1', {
  get: function() {
    this._v1 = this._v1 || new V1(this);
    return this._v1;
  }
});

Object.defineProperty(Video.prototype,
  'recordings', {
  get: function() {
    return this.v1.recordings;
  }
});

Object.defineProperty(Video.prototype,
  'rooms', {
  get: function() {
    return this.v1.rooms;
  }
});

}

export = Video;
