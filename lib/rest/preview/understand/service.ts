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
import FieldTypeList = require('./service/fieldType').FieldTypeList;
import IntentList = require('./service/intent').IntentList;
import ModelBuildList = require('./service/modelBuild').ModelBuildList;
import Page = require('../../../base/Page');  /* jshint ignore:line */
import QueryList = require('./service/query').QueryList;
import deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
import serialize = require('../../../base/serialize');  /* jshint ignore:line */
import values = require('../../../base/values');  /* jshint ignore:line */

var ServiceList;
var ServicePage;
var ServiceInstance;
var ServiceContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Understand.ServiceList
 * @description Initialize the ServiceList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.Understand} version - Version of the resource
 */
/* jshint ignore:end */
ServiceList = class ServiceList {
  constructor(public version) {
  /* jshint ignore:start */
  /**
   * @function services
   * @memberof Twilio.Preview.Understand
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.Understand.ServiceContext}
   */
  /* jshint ignore:end */
  class ServiceListInstance {
  constructor(public sid) {
    return ServiceListInstance.get(sid);
  }

  static _version = version;
  // Path Solution
  static _solution = {};
  static _uri = _.template(
    '/Services' // jshint ignore:line
  )(ServiceListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams ServiceInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Understand.ServiceList
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
   * @description Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Understand.ServiceList
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
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Understand.ServiceList
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
  static page(opts, callback) {
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ServicePage(this._version, payload, this._solution));
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
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Understand.ServiceList
   * @instance
   *
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
      deferred.resolve(new ServicePage(this._version, payload, this._solution));
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
   * create a ServiceInstance
   *
   * @function create
   * @memberof Twilio.Preview.Understand.ServiceList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {boolean} [opts.logQueries] - The log_queries
   * @param {number} [opts.ttl] - The ttl
   * @param {string} [opts.uniqueName] - The unique_name
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ServiceInstance
   */
  /* jshint ignore:end */
  static create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'LogQueries': serialize.bool(_.get(opts, 'logQueries')),
      'Ttl': _.get(opts, 'ttl'),
      'UniqueName': _.get(opts, 'uniqueName')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ServiceInstance(this._version, payload, this._solution.sid));
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
   * Constructs a service
   *
   * @function get
   * @memberof Twilio.Preview.Understand.ServiceList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Preview.Understand.ServiceContext}
   */
  /* jshint ignore:end */
  static get(sid) {
    return new ServiceContext(this._version, sid);
  };

  return ServiceListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Understand.ServicePage
 * @augments Page
 * @description Initialize the ServicePage
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.Understand} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns ServicePage
 */
/* jshint ignore:end */
ServicePage = class ServicePage {
  constructor(public version, public response, public solution) {
  // Path Solution
  this._solution = solution;

  super(version, response, this._solution);
};

class ServicePage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of ServiceInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.Understand.ServicePage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns ServiceInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new ServiceInstance(this._version, payload);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Understand.ServiceInstance
 * @description Initialize the ServiceContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {string} accountSid - The account_sid
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} friendlyName - The friendly_name
 * @property {string} latestModelBuildSid - The latest_model_build_sid
 * @property {string} links - The links
 * @property {boolean} logQueries - The log_queries
 * @property {string} sid - The sid
 * @property {number} ttl - The ttl
 * @property {string} uniqueName - The unique_name
 * @property {string} url - The url
 *
 * @param {Twilio.Preview.Understand} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid_like} sid - The sid
 */
/* jshint ignore:end */
ServiceInstance = class ServiceInstance {
  constructor(public version, public payload, public sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.latestModelBuildSid = payload.latest_model_build_sid; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line
  this.logQueries = payload.log_queries; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.ttl = deserialize.integer(payload.ttl); // jshint ignore:line
  this.uniqueName = payload.unique_name; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(ServiceInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ServiceContext(this._version, this._solution.sid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a ServiceInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Understand.ServiceInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a ServiceInstance
 *
 * @function update
 * @memberof Twilio.Preview.Understand.ServiceInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {boolean} [opts.logQueries] - The log_queries
 * @param {number} [opts.ttl] - The ttl
 * @param {string} [opts.uniqueName] - The unique_name
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a ServiceInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Understand.ServiceInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Access the fieldTypes
 *
 * @function fieldTypes
 * @memberof Twilio.Preview.Understand.ServiceInstance
 * @instance
 *
 * @returns {Twilio.Preview.Understand.ServiceContext.FieldTypeList}
 */
/* jshint ignore:end */
fieldTypes() {
  return this._proxy.fieldTypes;
};

/* jshint ignore:start */
/**
 * Access the intents
 *
 * @function intents
 * @memberof Twilio.Preview.Understand.ServiceInstance
 * @instance
 *
 * @returns {Twilio.Preview.Understand.ServiceContext.IntentList}
 */
/* jshint ignore:end */
intents() {
  return this._proxy.intents;
};

/* jshint ignore:start */
/**
 * Access the modelBuilds
 *
 * @function modelBuilds
 * @memberof Twilio.Preview.Understand.ServiceInstance
 * @instance
 *
 * @returns {Twilio.Preview.Understand.ServiceContext.ModelBuildList}
 */
/* jshint ignore:end */
modelBuilds() {
  return this._proxy.modelBuilds;
};

/* jshint ignore:start */
/**
 * Access the queries
 *
 * @function queries
 * @memberof Twilio.Preview.Understand.ServiceInstance
 * @instance
 *
 * @returns {Twilio.Preview.Understand.ServiceContext.QueryList}
 */
/* jshint ignore:end */
queries() {
  return this._proxy.queries;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Understand.ServiceContext
 * @description Initialize the ServiceContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {Twilio.Preview.Understand.ServiceContext.FieldTypeList} fieldTypes -
 *          fieldTypes resource
 * @property {Twilio.Preview.Understand.ServiceContext.IntentList} intents -
 *          intents resource
 * @property {Twilio.Preview.Understand.ServiceContext.ModelBuildList} modelBuilds -
 *          modelBuilds resource
 * @property {Twilio.Preview.Understand.ServiceContext.QueryList} queries -
 *          queries resource
 *
 * @param {Twilio.Preview.Understand} version - Version of the resource
 * @param {sid_like} sid - The sid
 */
/* jshint ignore:end */
ServiceContext = class ServiceContext {
  constructor(public version, public sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = _.template(
    '/Services/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._fieldTypes = undefined;
  this._intents = undefined;
  this._modelBuilds = undefined;
  this._queries = undefined;
};

/* jshint ignore:start */
/**
 * fetch a ServiceInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Understand.ServiceContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new ServiceInstance(this._version, payload, this._solution.sid));
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
 * update a ServiceInstance
 *
 * @function update
 * @memberof Twilio.Preview.Understand.ServiceContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {boolean} [opts.logQueries] - The log_queries
 * @param {number} [opts.ttl] - The ttl
 * @param {string} [opts.uniqueName] - The unique_name
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
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
    'FriendlyName': _.get(opts, 'friendlyName'),
    'LogQueries': serialize.bool(_.get(opts, 'logQueries')),
    'Ttl': _.get(opts, 'ttl'),
    'UniqueName': _.get(opts, 'uniqueName')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new ServiceInstance(this._version, payload, this._solution.sid));
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
 * remove a ServiceInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Understand.ServiceContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
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

Object.defineProperty(ServiceContext.prototype,
  'fieldTypes', {
  get: function() {
    if (!this._fieldTypes) {
      this._fieldTypes = new FieldTypeList(this._version, this._solution.sid);
    }
    return this._fieldTypes;
  }
});

Object.defineProperty(ServiceContext.prototype,
  'intents', {
  get: function() {
    if (!this._intents) {
      this._intents = new IntentList(this._version, this._solution.sid);
    }
    return this._intents;
  }
});

Object.defineProperty(ServiceContext.prototype,
  'modelBuilds', {
  get: function() {
    if (!this._modelBuilds) {
      this._modelBuilds = new ModelBuildList(this._version, this._solution.sid);
    }
    return this._modelBuilds;
  }
});

Object.defineProperty(ServiceContext.prototype,
  'queries', {
  get: function() {
    if (!this._queries) {
      this._queries = new QueryList(this._version, this._solution.sid);
    }
    return this._queries;
  }
});

export = {
  ServiceList: ServiceList,
  ServicePage: ServicePage,
  ServiceInstance: ServiceInstance,
  ServiceContext: ServiceContext
};
