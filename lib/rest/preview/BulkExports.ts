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
import ExportConfigurationList = require(
    './bulk_exports/exportConfiguration').ExportConfigurationList;
import ExportList = require('./bulk_exports/export').ExportList;
import Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the BulkExports version of Preview
 *
 * @constructor Twilio.Preview.BulkExports
 *
 * @property {Twilio.Preview.BulkExports.ExportList} exports - exports resource
 * @property {Twilio.Preview.BulkExports.ExportConfigurationList} exportConfiguration -
 *          exportConfiguration resource
 *
 * @param {Twilio.Preview} domain - The twilio domain
 */
/* jshint ignore:end */
class BulkExports {
  constructor(public domain) {
  Version.prototype.constructor.call(this, domain, 'BulkExports');

  // Resources
  this._exports = undefined;
  this._exportConfiguration = undefined;
}

class BulkExports extends Version {


Object.defineProperty(BulkExports.prototype,
  'exports', {
  get: function() {
    this._exports = this._exports || new ExportList(this);
    return this._exports;
  }
});

Object.defineProperty(BulkExports.prototype,
  'exportConfiguration', {
  get: function() {
    this._exportConfiguration = this._exportConfiguration || new ExportConfigurationList(this);
    return this._exportConfiguration;
  }
});

}

export = BulkExports;
