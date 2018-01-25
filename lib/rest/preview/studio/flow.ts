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
var EngagementList = require('./flow/engagement').EngagementList;
var Page = require('../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var FlowList;
var FlowPage;
var FlowInstance;
var FlowContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Studio.FlowList
 * @description Initialize the FlowList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.Studio} version - Version of the resource
 */
/* jshint ignore:end */
FlowList = class FlowList {
  constructor(public version) {
  /* jshint ignore:start */
  /**
   * @function flows
   * @memberof Twilio.Preview.Studio
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.Studio.FlowContext}
   */
  /* jshint ignore:end */
  class FlowListInstance {
  constructor(public sid) {
    return FlowListInstance.get(sid);
  }

  FlowListInstance._version = version;
  // Path Solution
  FlowListInstance._solution = {};
  FlowListInstance._uri = _.template(
    '/Flows' // jshint ignore:line
  )(FlowListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams FlowInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Studio.FlowList
   * @instance
   *
   * @param {object|function} opts - ...
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
  FlowListInstance.each = function each(opts, callback) {
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
   * @description Lists FlowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Studio.FlowList
   * @instance
   *
   * @param {object|function} opts - ...
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
  FlowListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of FlowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Studio.FlowList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  FlowListInstance.page = function page(opts, callback) {
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new FlowPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of FlowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Studio.FlowList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  FlowListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new FlowPage(this._version, payload, this._solution));
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
   * Constructs a flow
   *
   * @function get
   * @memberof Twilio.Preview.Studio.FlowList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Preview.Studio.FlowContext}
   */
  /* jshint ignore:end */
  FlowListInstance.get = function get(sid) {
    return new FlowContext(this._version, sid);
  };

  return FlowListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Studio.FlowPage
 * @augments Page
 * @description Initialize the FlowPage
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.Studio} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns FlowPage
 */
/* jshint ignore:end */
FlowPage = class FlowPage {
  constructor(public version, public response, public solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

class FlowPage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of FlowInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.Studio.FlowPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns FlowInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new FlowInstance(this._version, payload);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Studio.FlowInstance
 * @description Initialize the FlowContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {string} sid - A string that uniquely identifies this Flow.
 * @property {string} accountSid - Account Sid.
 * @property {string} friendlyName - A human readable description of this resource.
 * @property {flow.status} status - The Status of this Flow
 * @property {boolean} debug - Toggle extra logging.
 * @property {number} version -
 *          The latest version number of this Flow's definition.
 * @property {Date} dateCreated - The date this Flow was created
 * @property {Date} dateUpdated - The date this Flow was updated
 * @property {string} url - The URL of this resource.
 * @property {string} links - Nested resource URLs.
 *
 * @param {Twilio.Preview.Studio} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
FlowInstance = class FlowInstance {
  constructor(public version, public payload, public sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.debug = payload.debug; // jshint ignore:line
  this.version = deserialize.integer(payload.version); // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(FlowInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new FlowContext(this._version, this._solution.sid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a FlowInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Studio.FlowInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FlowInstance
 */
/* jshint ignore:end */
fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a FlowInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Studio.FlowInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FlowInstance
 */
/* jshint ignore:end */
remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Access the engagements
 *
 * @function engagements
 * @memberof Twilio.Preview.Studio.FlowInstance
 * @instance
 *
 * @returns {Twilio.Preview.Studio.FlowContext.EngagementList}
 */
/* jshint ignore:end */
engagements() {
  return this._proxy.engagements;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Studio.FlowContext
 * @description Initialize the FlowContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {Twilio.Preview.Studio.FlowContext.EngagementList} engagements -
 *          engagements resource
 *
 * @param {Twilio.Preview.Studio} version - Version of the resource
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
FlowContext = class FlowContext {
  constructor(public version, public sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = _.template(
    '/Flows/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._engagements = undefined;
};

/* jshint ignore:start */
/**
 * fetch a FlowInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Studio.FlowContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FlowInstance
 */
/* jshint ignore:end */
fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new FlowInstance(this._version, payload, this._solution.sid));
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
 * remove a FlowInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Studio.FlowContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FlowInstance
 */
/* jshint ignore:end */
remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({uri: this._uri, method: 'DELETE'});

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

Object.defineProperty(FlowContext.prototype,
  'engagements', {
  get: function() {
    if (!this._engagements) {
      this._engagements = new EngagementList(this._version, this._solution.sid);
    }
    return this._engagements;
  }
});

export = {
  FlowList: FlowList,
  FlowPage: FlowPage,
  FlowInstance: FlowInstance,
  FlowContext: FlowContext
};
