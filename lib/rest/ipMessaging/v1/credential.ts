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
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var serialize = require('../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var CredentialList;
var CredentialPage;
var CredentialInstance;
var CredentialContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.IpMessaging.V1.CredentialList
 * @description Initialize the CredentialList
 *
 * @param {Twilio.IpMessaging.V1} version - Version of the resource
 */
/* jshint ignore:end */
CredentialList = class CredentialList {
  constructor(version) {
  /* jshint ignore:start */
  /**
   * @function credentials
   * @memberof Twilio.IpMessaging.V1
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.IpMessaging.V1.CredentialContext}
   */
  /* jshint ignore:end */
  class CredentialListInstance {
  constructor(sid) {
    return CredentialListInstance.get(sid);
  }

  CredentialListInstance._version = version;
  // Path Solution
  CredentialListInstance._solution = {};
  CredentialListInstance._uri = _.template(
    '/Credentials' // jshint ignore:line
  )(CredentialListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams CredentialInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.IpMessaging.V1.CredentialList
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
  CredentialListInstance.each = function each(opts, callback) {
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
   * @description Lists CredentialInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.IpMessaging.V1.CredentialList
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
  CredentialListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of CredentialInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.IpMessaging.V1.CredentialList
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
  CredentialListInstance.page = function page(opts, callback) {
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new CredentialPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of CredentialInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.IpMessaging.V1.CredentialList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  CredentialListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new CredentialPage(this._version, payload, this._solution));
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
   * create a CredentialInstance
   *
   * @function create
   * @memberof Twilio.IpMessaging.V1.CredentialList
   * @instance
   *
   * @param {object} opts - ...
   * @param {credential.push_service} opts.type - The type
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.certificate] - The certificate
   * @param {string} [opts.privateKey] - The private_key
   * @param {boolean} [opts.sandbox] - The sandbox
   * @param {string} [opts.apiKey] - The api_key
   * @param {string} [opts.secret] - The secret
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed CredentialInstance
   */
  /* jshint ignore:end */
  CredentialListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.type)) {
      throw new Error('Required parameter "opts.type" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Type': _.get(opts, 'type'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'Certificate': _.get(opts, 'certificate'),
      'PrivateKey': _.get(opts, 'privateKey'),
      'Sandbox': serialize.bool(_.get(opts, 'sandbox')),
      'ApiKey': _.get(opts, 'apiKey'),
      'Secret': _.get(opts, 'secret')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new CredentialInstance(this._version, payload, this._solution.sid));
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
   * Constructs a credential
   *
   * @function get
   * @memberof Twilio.IpMessaging.V1.CredentialList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.IpMessaging.V1.CredentialContext}
   */
  /* jshint ignore:end */
  CredentialListInstance.get = function get(sid) {
    return new CredentialContext(this._version, sid);
  };

  return CredentialListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.IpMessaging.V1.CredentialPage
 * @augments Page
 * @description Initialize the CredentialPage
 *
 * @param {Twilio.IpMessaging.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns CredentialPage
 */
/* jshint ignore:end */
CredentialPage = class CredentialPage {
  constructor(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

class CredentialPage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of CredentialInstance
 *
 * @function getInstance
 * @memberof Twilio.IpMessaging.V1.CredentialPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns CredentialInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new CredentialInstance(this._version, payload);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.IpMessaging.V1.CredentialInstance
 * @description Initialize the CredentialContext
 *
 * @property {string} sid - The sid
 * @property {string} accountSid - The account_sid
 * @property {string} friendlyName - The friendly_name
 * @property {credential.push_service} type - The type
 * @property {string} sandbox - The sandbox
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} url - The url
 *
 * @param {Twilio.IpMessaging.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
CredentialInstance = class CredentialInstance {
  constructor(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.type = payload.type; // jshint ignore:line
  this.sandbox = payload.sandbox; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(CredentialInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new CredentialContext(this._version, this._solution.sid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a CredentialInstance
 *
 * @function fetch
 * @memberof Twilio.IpMessaging.V1.CredentialInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CredentialInstance
 */
/* jshint ignore:end */
fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a CredentialInstance
 *
 * @function update
 * @memberof Twilio.IpMessaging.V1.CredentialInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.certificate] - The certificate
 * @param {string} [opts.privateKey] - The private_key
 * @param {boolean} [opts.sandbox] - The sandbox
 * @param {string} [opts.apiKey] - The api_key
 * @param {string} [opts.secret] - The secret
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CredentialInstance
 */
/* jshint ignore:end */
update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a CredentialInstance
 *
 * @function remove
 * @memberof Twilio.IpMessaging.V1.CredentialInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CredentialInstance
 */
/* jshint ignore:end */
remove(callback) {
  return this._proxy.remove(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.IpMessaging.V1.CredentialContext
 * @description Initialize the CredentialContext
 *
 * @param {Twilio.IpMessaging.V1} version - Version of the resource
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
CredentialContext = class CredentialContext {
  constructor(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = _.template(
    '/Credentials/<%= sid %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a CredentialInstance
 *
 * @function fetch
 * @memberof Twilio.IpMessaging.V1.CredentialContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CredentialInstance
 */
/* jshint ignore:end */
fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new CredentialInstance(this._version, payload, this._solution.sid));
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
 * update a CredentialInstance
 *
 * @function update
 * @memberof Twilio.IpMessaging.V1.CredentialContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.certificate] - The certificate
 * @param {string} [opts.privateKey] - The private_key
 * @param {boolean} [opts.sandbox] - The sandbox
 * @param {string} [opts.apiKey] - The api_key
 * @param {string} [opts.secret] - The secret
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CredentialInstance
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
    'Certificate': _.get(opts, 'certificate'),
    'PrivateKey': _.get(opts, 'privateKey'),
    'Sandbox': serialize.bool(_.get(opts, 'sandbox')),
    'ApiKey': _.get(opts, 'apiKey'),
    'Secret': _.get(opts, 'secret')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new CredentialInstance(this._version, payload, this._solution.sid));
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
 * remove a CredentialInstance
 *
 * @function remove
 * @memberof Twilio.IpMessaging.V1.CredentialContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CredentialInstance
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
  CredentialList: CredentialList,
  CredentialPage: CredentialPage,
  CredentialInstance: CredentialInstance,
  CredentialContext: CredentialContext
};
