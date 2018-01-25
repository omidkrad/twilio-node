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
import deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
import values = require('../../../../base/values');  /* jshint ignore:line */

var ShortCodeList;
var ShortCodePage;
var ShortCodeInstance;
var ShortCodeContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Proxy.V1.ServiceContext.ShortCodeList
 * @description Initialize the ShortCodeList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Proxy.V1} version - Version of the resource
 * @param {string} serviceSid - Service Sid.
 */
/* jshint ignore:end */
ShortCodeList = class ShortCodeList {
  constructor(public version, public serviceSid) {
  /* jshint ignore:start */
  /**
   * @function shortCodes
   * @memberof Twilio.Proxy.V1.ServiceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Proxy.V1.ServiceContext.ShortCodeContext}
   */
  /* jshint ignore:end */
  class ShortCodeListInstance {
  constructor(public sid) {
    return ShortCodeListInstance.get(sid);
  }

  static _version = version;
  // Path Solution
  static _solution = {serviceSid: serviceSid};
  static _uri = _.template(
    '/Services/<%= serviceSid %>/ShortCodes' // jshint ignore:line
  )(ShortCodeListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a ShortCodeInstance
   *
   * @function create
   * @memberof Twilio.Proxy.V1.ServiceContext.ShortCodeList
   * @instance
   *
   * @param {object} opts - ...
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ShortCodeInstance
   */
  /* jshint ignore:end */
  static create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.sid)) {
      throw new Error('Required parameter "opts.sid" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({'Sid': _.get(opts, 'sid')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ShortCodeInstance(
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
   * Streams ShortCodeInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Proxy.V1.ServiceContext.ShortCodeList
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
   * @description Lists ShortCodeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Proxy.V1.ServiceContext.ShortCodeList
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
   * Retrieve a single page of ShortCodeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Proxy.V1.ServiceContext.ShortCodeList
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
      deferred.resolve(new ShortCodePage(this._version, payload, this._solution));
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
   * Retrieve a single target page of ShortCodeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Proxy.V1.ServiceContext.ShortCodeList
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
      deferred.resolve(new ShortCodePage(this._version, payload, this._solution));
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
   * Constructs a short_code
   *
   * @function get
   * @memberof Twilio.Proxy.V1.ServiceContext.ShortCodeList
   * @instance
   *
   * @param {string} sid - A string that uniquely identifies this Short Code.
   *
   * @returns {Twilio.Proxy.V1.ServiceContext.ShortCodeContext}
   */
  /* jshint ignore:end */
  static get(sid) {
    return new ShortCodeContext(this._version, this._solution.serviceSid, sid);
  };

  return ShortCodeListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Proxy.V1.ServiceContext.ShortCodePage
 * @augments Page
 * @description Initialize the ShortCodePage
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Proxy.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns ShortCodePage
 */
/* jshint ignore:end */
ShortCodePage = class ShortCodePage {
  constructor(public version, public response, public solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

class ShortCodePage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of ShortCodeInstance
 *
 * @function getInstance
 * @memberof Twilio.Proxy.V1.ServiceContext.ShortCodePage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns ShortCodeInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new ShortCodeInstance(this._version, payload, this._solution.serviceSid);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Proxy.V1.ServiceContext.ShortCodeInstance
 * @description Initialize the ShortCodeContext
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @property {string} sid - A string that uniquely identifies this Short Code.
 * @property {string} accountSid - Account Sid.
 * @property {string} serviceSid - Service Sid.
 * @property {Date} dateCreated - The date this Short Code was created
 * @property {Date} dateUpdated - The date this Short Code was updated
 * @property {string} shortCode - Shortcode.
 * @property {string} isoCountry - ISO Country Code,
 * @property {string} capabilities - Nested resource URLs.
 * @property {string} url - The URL of this resource.
 *
 * @param {Twilio.Proxy.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} serviceSid - Service Sid.
 * @param {sid} sid - A string that uniquely identifies this Short Code.
 */
/* jshint ignore:end */
ShortCodeInstance = function ShortCodeInstance(version, payload, serviceSid,
                                                sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.shortCode = payload.short_code; // jshint ignore:line
  this.isoCountry = payload.iso_country; // jshint ignore:line
  this.capabilities = payload.capabilities; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {serviceSid: serviceSid, sid: sid || this.sid, };
};

Object.defineProperty(ShortCodeInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ShortCodeContext(this._version, this._solution.serviceSid, this._solution.sid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * remove a ShortCodeInstance
 *
 * @function remove
 * @memberof Twilio.Proxy.V1.ServiceContext.ShortCodeInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ShortCodeInstance
 */
/* jshint ignore:end */
remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * fetch a ShortCodeInstance
 *
 * @function fetch
 * @memberof Twilio.Proxy.V1.ServiceContext.ShortCodeInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ShortCodeInstance
 */
/* jshint ignore:end */
fetch(callback) {
  return this._proxy.fetch(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Proxy.V1.ServiceContext.ShortCodeContext
 * @description Initialize the ShortCodeContext
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Proxy.V1} version - Version of the resource
 * @param {sid} serviceSid - Service Sid.
 * @param {sid} sid - A string that uniquely identifies this Short Code.
 */
/* jshint ignore:end */
ShortCodeContext = class ShortCodeContext {
  constructor(public version, public serviceSid, public sid) {
  this._version = version;

  // Path Solution
  this._solution = {serviceSid: serviceSid, sid: sid, };
  this._uri = _.template(
    '/Services/<%= serviceSid %>/ShortCodes/<%= sid %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * remove a ShortCodeInstance
 *
 * @function remove
 * @memberof Twilio.Proxy.V1.ServiceContext.ShortCodeContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ShortCodeInstance
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

/* jshint ignore:start */
/**
 * fetch a ShortCodeInstance
 *
 * @function fetch
 * @memberof Twilio.Proxy.V1.ServiceContext.ShortCodeContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ShortCodeInstance
 */
/* jshint ignore:end */
fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new ShortCodeInstance(
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

export = {
  ShortCodeList: ShortCodeList,
  ShortCodePage: ShortCodePage,
  ShortCodeInstance: ShortCodeInstance,
  ShortCodeContext: ShortCodeContext
};
