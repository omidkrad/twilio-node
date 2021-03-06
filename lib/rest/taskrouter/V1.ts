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
import Version = require('../../base/Version');  /* jshint ignore:line */
import WorkspaceList = require('./v1/workspace').WorkspaceList;


/* jshint ignore:start */
/**
 * Initialize the V1 version of Taskrouter
 *
 * @constructor Twilio.Taskrouter.V1
 *
 * @property {Twilio.Taskrouter.V1.WorkspaceList} workspaces - workspaces resource
 *
 * @param {Twilio.Taskrouter} domain - The twilio domain
 */
/* jshint ignore:end */
class V1 {
  constructor(public domain) {
  super(domain, 'v1');

  // Resources
  this._workspaces = undefined;
}

class V1 extends Version {


Object.defineProperty(V1.prototype,
  'workspaces', {
  get: function() {
    this._workspaces = this._workspaces || new WorkspaceList(this);
    return this._workspaces;
  }
});

}

export = V1;
