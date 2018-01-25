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
import Page = require('../../../../base/Page');  /* jshint ignore:line */
import serialize = require('../../../../base/serialize');  /* jshint ignore:line */
import values = require('../../../../base/values');  /* jshint ignore:line */

var UsageRecordList;
var UsageRecordPage;
var UsageRecordInstance;

/* jshint ignore:start */
/**
 * @constructor Twilio.Wireless.V1.SimContext.UsageRecordList
 * @description Initialize the UsageRecordList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Wireless.V1} version - Version of the resource
 * @param {string} simSid - The sim_sid
 */
/* jshint ignore:end */
UsageRecordList = class UsageRecordList {
  constructor(public version, public simSid) {
  /* jshint ignore:start */
  /**
   * @function usageRecords
   * @memberof Twilio.Wireless.V1.SimContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Wireless.V1.SimContext.UsageRecordContext}
   */
  /* jshint ignore:end */
  class UsageRecordListInstance {
  constructor(public sid) {
    return UsageRecordListInstance.get(sid);
  }

  static _version = version;
  // Path Solution
  static _solution = {simSid: simSid};
  static _uri = _.template(
    '/Sims/<%= simSid %>/UsageRecords' // jshint ignore:line
  )(UsageRecordListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams UsageRecordInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Wireless.V1.SimContext.UsageRecordList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.end] - The end
   * @param {Date} [opts.start] - The start
   * @param {usage_record.granularity} [opts.granularity] - The granularity
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
   * @description Lists UsageRecordInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Wireless.V1.SimContext.UsageRecordList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.end] - The end
   * @param {Date} [opts.start] - The start
   * @param {usage_record.granularity} [opts.granularity] - The granularity
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
   * Retrieve a single page of UsageRecordInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Wireless.V1.SimContext.UsageRecordList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.end] - The end
   * @param {Date} [opts.start] - The start
   * @param {usage_record.granularity} [opts.granularity] - The granularity
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
      'Granularity': _.get(opts, 'granularity'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new UsageRecordPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of UsageRecordInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Wireless.V1.SimContext.UsageRecordList
   * @instance
   *
   * @param {Date} [opts.end] - The end
   * @param {Date} [opts.start] - The start
   * @param {usage_record.granularity} [opts.granularity] - The granularity
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
      deferred.resolve(new UsageRecordPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  return UsageRecordListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Wireless.V1.SimContext.UsageRecordPage
 * @augments Page
 * @description Initialize the UsageRecordPage
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Wireless.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns UsageRecordPage
 */
/* jshint ignore:end */
UsageRecordPage = class UsageRecordPage {
  constructor(public version, public response, public solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

class UsageRecordPage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of UsageRecordInstance
 *
 * @function getInstance
 * @memberof Twilio.Wireless.V1.SimContext.UsageRecordPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns UsageRecordInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new UsageRecordInstance(this._version, payload, this._solution.simSid);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Wireless.V1.SimContext.UsageRecordInstance
 * @description Initialize the UsageRecordContext
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @property {string} simSid - The sim_sid
 * @property {string} accountSid - The account_sid
 * @property {string} period - The period
 * @property {string} commands - The commands
 * @property {string} data - The data
 *
 * @param {Twilio.Wireless.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
UsageRecordInstance = class UsageRecordInstance {
  constructor(public version, public payload, public simSid) {
  this._version = version;

  // Marshaled Properties
  this.simSid = payload.sim_sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.period = payload.period; // jshint ignore:line
  this.commands = payload.commands; // jshint ignore:line
  this.data = payload.data; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {simSid: simSid, };
};

export = {
  UsageRecordList: UsageRecordList,
  UsageRecordPage: UsageRecordPage,
  UsageRecordInstance: UsageRecordInstance
};
