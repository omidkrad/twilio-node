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
var values = require('../../../../base/values');  /* jshint ignore:line */

var QueryList;
var QueryPage;
var QueryInstance;
var QueryContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Understand.ServiceContext.QueryList
 * @description Initialize the QueryList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.Understand} version - Version of the resource
 * @param {string} serviceSid - The service_sid
 */
/* jshint ignore:end */
QueryList = class QueryList {
  constructor(version, serviceSid) {
  /* jshint ignore:start */
  /**
   * @function queries
   * @memberof Twilio.Preview.Understand.ServiceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.Understand.ServiceContext.QueryContext}
   */
  /* jshint ignore:end */
  class QueryListInstance {
  constructor(sid) {
    return QueryListInstance.get(sid);
  }

  QueryListInstance._version = version;
  // Path Solution
  QueryListInstance._solution = {serviceSid: serviceSid};
  QueryListInstance._uri = _.template(
    '/Services/<%= serviceSid %>/Queries' // jshint ignore:line
  )(QueryListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams QueryInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Understand.ServiceContext.QueryList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.language] - The language
   * @param {string} [opts.modelBuild] - The model_build
   * @param {string} [opts.status] - The status
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
  QueryListInstance.each = function each(opts, callback) {
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
   * @description Lists QueryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Understand.ServiceContext.QueryList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.language] - The language
   * @param {string} [opts.modelBuild] - The model_build
   * @param {string} [opts.status] - The status
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
  QueryListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of QueryInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Understand.ServiceContext.QueryList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.language] - The language
   * @param {string} [opts.modelBuild] - The model_build
   * @param {string} [opts.status] - The status
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  QueryListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Language': _.get(opts, 'language'),
      'ModelBuild': _.get(opts, 'modelBuild'),
      'Status': _.get(opts, 'status'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new QueryPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of QueryInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Understand.ServiceContext.QueryList
   * @instance
   *
   * @param {string} [opts.language] - The language
   * @param {string} [opts.modelBuild] - The model_build
   * @param {string} [opts.status] - The status
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  QueryListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new QueryPage(this._version, payload, this._solution));
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
   * create a QueryInstance
   *
   * @function create
   * @memberof Twilio.Preview.Understand.ServiceContext.QueryList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.language - The language
   * @param {string} opts.query - The query
   * @param {string} [opts.intent] - The intent
   * @param {string} [opts.modelBuild] - The model_build
   * @param {string} [opts.field] - The field
   * @param {string} [opts.namedEntity] - The named_entity
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed QueryInstance
   */
  /* jshint ignore:end */
  QueryListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.language)) {
      throw new Error('Required parameter "opts.language" missing.');
    }
    if (_.isUndefined(opts.query)) {
      throw new Error('Required parameter "opts.query" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Language': _.get(opts, 'language'),
      'Query': _.get(opts, 'query'),
      'Intent': _.get(opts, 'intent'),
      'ModelBuild': _.get(opts, 'modelBuild'),
      'Field': _.get(opts, 'field'),
      'NamedEntity': _.get(opts, 'namedEntity')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new QueryInstance(
        this._version,
        payload,
        this._solution.serviceSid,
        this._solution.sid
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
   * Constructs a query
   *
   * @function get
   * @memberof Twilio.Preview.Understand.ServiceContext.QueryList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Preview.Understand.ServiceContext.QueryContext}
   */
  /* jshint ignore:end */
  QueryListInstance.get = function get(sid) {
    return new QueryContext(this._version, this._solution.serviceSid, sid);
  };

  return QueryListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Understand.ServiceContext.QueryPage
 * @augments Page
 * @description Initialize the QueryPage
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.Understand} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns QueryPage
 */
/* jshint ignore:end */
QueryPage = class QueryPage {
  constructor(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

class QueryPage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of QueryInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.Understand.ServiceContext.QueryPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns QueryInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new QueryInstance(this._version, payload, this._solution.serviceSid);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Understand.ServiceContext.QueryInstance
 * @description Initialize the QueryContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {string} accountSid - The account_sid
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} results - The results
 * @property {string} language - The language
 * @property {string} modelBuildSid - The model_build_sid
 * @property {string} query - The query
 * @property {string} sampleSid - The sample_sid
 * @property {string} serviceSid - The service_sid
 * @property {string} sid - The sid
 * @property {string} status - The status
 * @property {string} url - The url
 *
 * @param {Twilio.Preview.Understand} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid_like} serviceSid - The service_sid
 * @param {sid_like} sid - The sid
 */
/* jshint ignore:end */
QueryInstance = class QueryInstance {
  constructor(version, payload, serviceSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.results = payload.results; // jshint ignore:line
  this.language = payload.language; // jshint ignore:line
  this.modelBuildSid = payload.model_build_sid; // jshint ignore:line
  this.query = payload.query; // jshint ignore:line
  this.sampleSid = payload.sample_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {serviceSid: serviceSid, sid: sid || this.sid, };
};

Object.defineProperty(QueryInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new QueryContext(this._version, this._solution.serviceSid, this._solution.sid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a QueryInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Understand.ServiceContext.QueryInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed QueryInstance
 */
/* jshint ignore:end */
fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a QueryInstance
 *
 * @function update
 * @memberof Twilio.Preview.Understand.ServiceContext.QueryInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.sampleSid] - The sample_sid
 * @param {string} [opts.status] - The status
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed QueryInstance
 */
/* jshint ignore:end */
update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a QueryInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Understand.ServiceContext.QueryInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed QueryInstance
 */
/* jshint ignore:end */
remove(callback) {
  return this._proxy.remove(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Understand.ServiceContext.QueryContext
 * @description Initialize the QueryContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.Understand} version - Version of the resource
 * @param {sid_like} serviceSid - The service_sid
 * @param {sid_like} sid - The sid
 */
/* jshint ignore:end */
QueryContext = class QueryContext {
  constructor(version, serviceSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {serviceSid: serviceSid, sid: sid, };
  this._uri = _.template(
    '/Services/<%= serviceSid %>/Queries/<%= sid %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a QueryInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Understand.ServiceContext.QueryContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed QueryInstance
 */
/* jshint ignore:end */
fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new QueryInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.sid
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
 * update a QueryInstance
 *
 * @function update
 * @memberof Twilio.Preview.Understand.ServiceContext.QueryContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.sampleSid] - The sample_sid
 * @param {string} [opts.status] - The status
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed QueryInstance
 */
/* jshint ignore:end */
update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({'SampleSid': _.get(opts, 'sampleSid'), 'Status': _.get(opts, 'status')});

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new QueryInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.sid
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
 * remove a QueryInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Understand.ServiceContext.QueryContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed QueryInstance
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

export = {
  QueryList: QueryList,
  QueryPage: QueryPage,
  QueryInstance: QueryInstance,
  QueryContext: QueryContext
};
