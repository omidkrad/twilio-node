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
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require('../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var DataSessionList;
var DataSessionPage;
var DataSessionInstance;

/* jshint ignore:start */
/**
 * @constructor Twilio.Wireless.V1.SimContext.DataSessionList
 * @description Initialize the DataSessionList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Wireless.V1} version - Version of the resource
 * @param {string} simSid - The sim_sid
 */
/* jshint ignore:end */
DataSessionList = class DataSessionList {
  constructor(public version, public simSid) {
  /* jshint ignore:start */
  /**
   * @function dataSessions
   * @memberof Twilio.Wireless.V1.SimContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Wireless.V1.SimContext.DataSessionContext}
   */
  /* jshint ignore:end */
  class DataSessionListInstance {
  constructor(public sid) {
    return DataSessionListInstance.get(sid);
  }

  DataSessionListInstance._version = version;
  // Path Solution
  DataSessionListInstance._solution = {simSid: simSid};
  DataSessionListInstance._uri = _.template(
    '/Sims/<%= simSid %>/DataSessions' // jshint ignore:line
  )(DataSessionListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams DataSessionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Wireless.V1.SimContext.DataSessionList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.end] - The end
   * @param {Date} [opts.start] - The start
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   * callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  static each(opts, callback) {
    opts = opts || {};
    if (_.isFunction(opts)) {
      opts = { callback: opts };
    } else if (_.isFunction(callback) && !_.isFunction(opts.callback)) {
      opts.callback = callback;
    }

    if (_.isUndefined(opts.callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          opts.callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * @description Lists DataSessionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Wireless.V1.SimContext.DataSessionList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.end] - The end
   * @param {Date} [opts.start] - The start
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  static list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of DataSessionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Wireless.V1.SimContext.DataSessionList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.end] - The end
   * @param {Date} [opts.start] - The start
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  static page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'End': serialize.iso8601DateTime(_.get(opts, 'end')),
      'Start': serialize.iso8601DateTime(_.get(opts, 'start')),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new DataSessionPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of DataSessionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Wireless.V1.SimContext.DataSessionList
   * @instance
   *
   * @param {Date} [opts.end] - The end
   * @param {Date} [opts.start] - The start
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  static getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new DataSessionPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  return DataSessionListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Wireless.V1.SimContext.DataSessionPage
 * @augments Page
 * @description Initialize the DataSessionPage
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Wireless.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns DataSessionPage
 */
/* jshint ignore:end */
DataSessionPage = class DataSessionPage {
  constructor(public version, public response, public solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

class DataSessionPage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of DataSessionInstance
 *
 * @function getInstance
 * @memberof Twilio.Wireless.V1.SimContext.DataSessionPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns DataSessionInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new DataSessionInstance(this._version, payload, this._solution.simSid);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Wireless.V1.SimContext.DataSessionInstance
 * @description Initialize the DataSessionContext
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @property {string} sid - The sid
 * @property {string} simSid - The sim_sid
 * @property {string} accountSid - The account_sid
 * @property {string} radioLink - The radio_link
 * @property {string} operatorMcc - The operator_mcc
 * @property {string} operatorMnc - The operator_mnc
 * @property {string} operatorCountry - The operator_country
 * @property {string} operatorName - The operator_name
 * @property {string} cellId - The cell_id
 * @property {string} cellLocationEstimate - The cell_location_estimate
 * @property {number} packetsUploaded - The packets_uploaded
 * @property {number} packetsDownloaded - The packets_downloaded
 * @property {Date} lastUpdated - The last_updated
 * @property {Date} start - The start
 * @property {Date} end - The end
 *
 * @param {Twilio.Wireless.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
DataSessionInstance = class DataSessionInstance {
  constructor(public version, public payload, public simSid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.simSid = payload.sim_sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.radioLink = payload.radio_link; // jshint ignore:line
  this.operatorMcc = payload.operator_mcc; // jshint ignore:line
  this.operatorMnc = payload.operator_mnc; // jshint ignore:line
  this.operatorCountry = payload.operator_country; // jshint ignore:line
  this.operatorName = payload.operator_name; // jshint ignore:line
  this.cellId = payload.cell_id; // jshint ignore:line
  this.cellLocationEstimate = payload.cell_location_estimate; // jshint ignore:line
  this.packetsUploaded = deserialize.integer(payload.packets_uploaded); // jshint ignore:line
  this.packetsDownloaded = deserialize.integer(payload.packets_downloaded); // jshint ignore:line
  this.lastUpdated = deserialize.iso8601DateTime(payload.last_updated); // jshint ignore:line
  this.start = deserialize.iso8601DateTime(payload.start); // jshint ignore:line
  this.end = deserialize.iso8601DateTime(payload.end); // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {simSid: simSid, };
};

export = {
  DataSessionList: DataSessionList,
  DataSessionPage: DataSessionPage,
  DataSessionInstance: DataSessionInstance
};
