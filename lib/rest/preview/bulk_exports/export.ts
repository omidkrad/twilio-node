'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

import Q = require('q');  /* jshint ignore:line */
import _ = require('lodash');  /* jshint ignore:line */
import DayList = require('./export/day').DayList;
import Page = require('../../../base/Page');  /* jshint ignore:line */
import values = require('../../../base/values');  /* jshint ignore:line */

var ExportList;
var ExportPage;
var ExportInstance;
var ExportContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.BulkExports.ExportList
 * @description Initialize the ExportList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.BulkExports} version - Version of the resource
 */
/* jshint ignore:end */
ExportList = class ExportList {
  constructor(public version) {
  /* jshint ignore:start */
  /**
   * @function exports
   * @memberof Twilio.Preview.BulkExports
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.BulkExports.ExportContext}
   */
  /* jshint ignore:end */
  class ExportListInstance {
  constructor(public sid) {
    return ExportListInstance.get(sid);
  }

  static _version = version;
  // Path Solution
  static _solution = {};
  /* jshint ignore:start */
  /**
   * Constructs a export
   *
   * @function get
   * @memberof Twilio.Preview.BulkExports.ExportList
   * @instance
   *
   * @param {string} resourceType - The resource_type
   *
   * @returns {Twilio.Preview.BulkExports.ExportContext}
   */
  /* jshint ignore:end */
  static get(resourceType) {
    return new ExportContext(this._version, resourceType);
  };

  return ExportListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.BulkExports.ExportPage
 * @augments Page
 * @description Initialize the ExportPage
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.BulkExports} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns ExportPage
 */
/* jshint ignore:end */
ExportPage = class ExportPage {
  constructor(public version, public response, public solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

class ExportPage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of ExportInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.BulkExports.ExportPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns ExportInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new ExportInstance(this._version, payload);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.BulkExports.ExportInstance
 * @description Initialize the ExportContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {string} resourceType - The resource_type
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {Twilio.Preview.BulkExports} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {string} resourceType - The resource_type
 */
/* jshint ignore:end */
ExportInstance = class ExportInstance {
  constructor(public version, public payload, public resourceType) {
  this._version = version;

  // Marshaled Properties
  this.resourceType = payload.resource_type; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {resourceType: resourceType || this.resourceType, };
};

Object.defineProperty(ExportInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ExportContext(this._version, this._solution.resourceType);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a ExportInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.BulkExports.ExportInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ExportInstance
 */
/* jshint ignore:end */
fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * Access the days
 *
 * @function days
 * @memberof Twilio.Preview.BulkExports.ExportInstance
 * @instance
 *
 * @returns {Twilio.Preview.BulkExports.ExportContext.DayList}
 */
/* jshint ignore:end */
days() {
  return this._proxy.days;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.BulkExports.ExportContext
 * @description Initialize the ExportContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {Twilio.Preview.BulkExports.ExportContext.DayList} days -
 *          days resource
 *
 * @param {Twilio.Preview.BulkExports} version - Version of the resource
 * @param {string} resourceType - The resource_type
 */
/* jshint ignore:end */
ExportContext = class ExportContext {
  constructor(public version, public resourceType) {
  this._version = version;

  // Path Solution
  this._solution = {resourceType: resourceType, };
  this._uri = _.template(
    '/Exports/<%= resourceType %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._days = undefined;
};

/* jshint ignore:start */
/**
 * fetch a ExportInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.BulkExports.ExportContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ExportInstance
 */
/* jshint ignore:end */
fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new ExportInstance(this._version, payload, this._solution.resourceType));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

Object.defineProperty(ExportContext.prototype,
  'days', {
  get: function() {
    if (!this._days) {
      this._days = new DayList(this._version, this._solution.resourceType);
    }
    return this._days;
  }
});

export = {
  ExportList: ExportList,
  ExportPage: ExportPage,
  ExportInstance: ExportInstance,
  ExportContext: ExportContext
};
