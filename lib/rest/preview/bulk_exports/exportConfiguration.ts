'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../base/Page');  /* jshint ignore:line */
var serialize = require('../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var ExportConfigurationList;
var ExportConfigurationPage;
var ExportConfigurationInstance;
var ExportConfigurationContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.BulkExports.ExportConfigurationList
 * @description Initialize the ExportConfigurationList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.BulkExports} version - Version of the resource
 */
/* jshint ignore:end */
ExportConfigurationList = class ExportConfigurationList {
  constructor(version) {
  /* jshint ignore:start */
  /**
   * @function exportConfiguration
   * @memberof Twilio.Preview.BulkExports
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.BulkExports.ExportConfigurationContext}
   */
  /* jshint ignore:end */
  class ExportConfigurationListInstance {
  constructor(sid) {
    return ExportConfigurationListInstance.get(sid);
  }

  ExportConfigurationListInstance._version = version;
  // Path Solution
  ExportConfigurationListInstance._solution = {};
  /* jshint ignore:start */
  /**
   * Constructs a export_configuration
   *
   * @function get
   * @memberof Twilio.Preview.BulkExports.ExportConfigurationList
   * @instance
   *
   * @param {string} resourceType - The resource_type
   *
   * @returns {Twilio.Preview.BulkExports.ExportConfigurationContext}
   */
  /* jshint ignore:end */
  ExportConfigurationListInstance.get = function get(resourceType) {
    return new ExportConfigurationContext(this._version, resourceType);
  };

  return ExportConfigurationListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.BulkExports.ExportConfigurationPage
 * @augments Page
 * @description Initialize the ExportConfigurationPage
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.BulkExports} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns ExportConfigurationPage
 */
/* jshint ignore:end */
ExportConfigurationPage = function ExportConfigurationPage(version, response,
                                                            solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

class ExportConfigurationPage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of ExportConfigurationInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.BulkExports.ExportConfigurationPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns ExportConfigurationInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new ExportConfigurationInstance(this._version, payload);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.BulkExports.ExportConfigurationInstance
 * @description Initialize the ExportConfigurationContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {boolean} enabled - The enabled
 * @property {string} webhookUrl - The webhook_url
 * @property {string} webhookMethod - The webhook_method
 * @property {string} resourceType - The resource_type
 * @property {string} url - The url
 *
 * @param {Twilio.Preview.BulkExports} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {string} resourceType - The resource_type
 */
/* jshint ignore:end */
ExportConfigurationInstance = function ExportConfigurationInstance(version,
    payload, resourceType) {
  this._version = version;

  // Marshaled Properties
  this.enabled = payload.enabled; // jshint ignore:line
  this.webhookUrl = payload.webhook_url; // jshint ignore:line
  this.webhookMethod = payload.webhook_method; // jshint ignore:line
  this.resourceType = payload.resource_type; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {resourceType: resourceType || this.resourceType, };
};

Object.defineProperty(ExportConfigurationInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ExportConfigurationContext(this._version, this._solution.resourceType);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a ExportConfigurationInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.BulkExports.ExportConfigurationInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ExportConfigurationInstance
 */
/* jshint ignore:end */
fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a ExportConfigurationInstance
 *
 * @function update
 * @memberof Twilio.Preview.BulkExports.ExportConfigurationInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {boolean} [opts.enabled] - The enabled
 * @param {string} [opts.webhookUrl] - The webhook_url
 * @param {string} [opts.webhookMethod] - The webhook_method
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ExportConfigurationInstance
 */
/* jshint ignore:end */
update(opts, callback) {
  return this._proxy.update(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.BulkExports.ExportConfigurationContext
 * @description Initialize the ExportConfigurationContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.BulkExports} version - Version of the resource
 * @param {string} resourceType - The resource_type
 */
/* jshint ignore:end */
ExportConfigurationContext = function ExportConfigurationContext(version,
    resourceType) {
  this._version = version;

  // Path Solution
  this._solution = {resourceType: resourceType, };
  this._uri = _.template(
    '/Exports/<%= resourceType %>/Configuration' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a ExportConfigurationInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.BulkExports.ExportConfigurationContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ExportConfigurationInstance
 */
/* jshint ignore:end */
fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new ExportConfigurationInstance(
      this._version,
      payload,
      this._solution.resourceType
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * update a ExportConfigurationInstance
 *
 * @function update
 * @memberof Twilio.Preview.BulkExports.ExportConfigurationContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {boolean} [opts.enabled] - The enabled
 * @param {string} [opts.webhookUrl] - The webhook_url
 * @param {string} [opts.webhookMethod] - The webhook_method
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ExportConfigurationInstance
 */
/* jshint ignore:end */
update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Enabled': serialize.bool(_.get(opts, 'enabled')),
    'WebhookUrl': _.get(opts, 'webhookUrl'),
    'WebhookMethod': _.get(opts, 'webhookMethod')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new ExportConfigurationInstance(
      this._version,
      payload,
      this._solution.resourceType
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

export = {
  ExportConfigurationList: ExportConfigurationList,
  ExportConfigurationPage: ExportConfigurationPage,
  ExportConfigurationInstance: ExportConfigurationInstance,
  ExportConfigurationContext: ExportConfigurationContext
};
