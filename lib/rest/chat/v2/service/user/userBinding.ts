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
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var UserBindingList;
var UserBindingPage;
var UserBindingInstance;
var UserBindingContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Chat.V2.ServiceContext.UserContext.UserBindingList
 * @description Initialize the UserBindingList
 *
 * @param {Twilio.Chat.V2} version - Version of the resource
 * @param {string} serviceSid - The service_sid
 * @param {string} userSid - The user_sid
 */
/* jshint ignore:end */
UserBindingList = class UserBindingList {
  constructor(public version, public serviceSid, public userSid) {
  /* jshint ignore:start */
  /**
   * @function userBindings
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Chat.V2.ServiceContext.UserContext.UserBindingContext}
   */
  /* jshint ignore:end */
  class UserBindingListInstance {
  constructor(public sid) {
    return UserBindingListInstance.get(sid);
  }

  UserBindingListInstance._version = version;
  // Path Solution
  UserBindingListInstance._solution = {serviceSid: serviceSid, userSid: userSid};
  UserBindingListInstance._uri = _.template(
    '/Services/<%= serviceSid %>/Users/<%= userSid %>/Bindings' // jshint ignore:line
  )(UserBindingListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams UserBindingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {user_binding.binding_type|list} [opts.bindingType] - The binding_type
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
   * @description Lists UserBindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {user_binding.binding_type|list} [opts.bindingType] - The binding_type
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
   * Retrieve a single page of UserBindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {user_binding.binding_type|list} [opts.bindingType] - The binding_type
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
      'BindingType': serialize.map(_.get(opts, 'bindingType'), function(e) { return e; }),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new UserBindingPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of UserBindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingList
   * @instance
   *
   * @param {user_binding.binding_type|list} [opts.bindingType] - The binding_type
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
      deferred.resolve(new UserBindingPage(this._version, payload, this._solution));
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
   * Constructs a user_binding
   *
   * @function get
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Chat.V2.ServiceContext.UserContext.UserBindingContext}
   */
  /* jshint ignore:end */
  static get(sid) {
    return new UserBindingContext(this._version, this._solution.serviceSid, this._solution.userSid, sid);
  };

  return UserBindingListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Chat.V2.ServiceContext.UserContext.UserBindingPage
 * @augments Page
 * @description Initialize the UserBindingPage
 *
 * @param {Twilio.Chat.V2} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns UserBindingPage
 */
/* jshint ignore:end */
UserBindingPage = class UserBindingPage {
  constructor(public version, public response, public solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

class UserBindingPage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of UserBindingInstance
 *
 * @function getInstance
 * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns UserBindingInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new UserBindingInstance(
    this._version,
    payload,
    this._solution.serviceSid,
    this._solution.userSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Chat.V2.ServiceContext.UserContext.UserBindingInstance
 * @description Initialize the UserBindingContext
 *
 * @property {string} sid - The sid
 * @property {string} accountSid - The account_sid
 * @property {string} serviceSid - The service_sid
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} endpoint - The endpoint
 * @property {string} identity - The identity
 * @property {string} userSid - The user_sid
 * @property {string} credentialSid - The credential_sid
 * @property {user_binding.binding_type} bindingType - The binding_type
 * @property {string} messageTypes - The message_types
 * @property {string} url - The url
 *
 * @param {Twilio.Chat.V2} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} serviceSid - The service_sid
 * @param {sid_like} userSid - The user_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
UserBindingInstance = function UserBindingInstance(version, payload, serviceSid,
                                                    userSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.endpoint = payload.endpoint; // jshint ignore:line
  this.identity = payload.identity; // jshint ignore:line
  this.userSid = payload.user_sid; // jshint ignore:line
  this.credentialSid = payload.credential_sid; // jshint ignore:line
  this.bindingType = payload.binding_type; // jshint ignore:line
  this.messageTypes = payload.message_types; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {serviceSid: serviceSid, userSid: userSid, sid: sid || this.sid, };
};

Object.defineProperty(UserBindingInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new UserBindingContext(
        this._version,
        this._solution.serviceSid,
        this._solution.userSid,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a UserBindingInstance
 *
 * @function fetch
 * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed UserBindingInstance
 */
/* jshint ignore:end */
fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a UserBindingInstance
 *
 * @function remove
 * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed UserBindingInstance
 */
/* jshint ignore:end */
remove(callback) {
  return this._proxy.remove(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Chat.V2.ServiceContext.UserContext.UserBindingContext
 * @description Initialize the UserBindingContext
 *
 * @param {Twilio.Chat.V2} version - Version of the resource
 * @param {sid} serviceSid - The service_sid
 * @param {sid_like} userSid - The user_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
UserBindingContext = function UserBindingContext(version, serviceSid, userSid,
                                                  sid) {
  this._version = version;

  // Path Solution
  this._solution = {serviceSid: serviceSid, userSid: userSid, sid: sid, };
  this._uri = _.template(
    '/Services/<%= serviceSid %>/Users/<%= userSid %>/Bindings/<%= sid %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a UserBindingInstance
 *
 * @function fetch
 * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed UserBindingInstance
 */
/* jshint ignore:end */
fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new UserBindingInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.userSid,
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
 * remove a UserBindingInstance
 *
 * @function remove
 * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed UserBindingInstance
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
  UserBindingList: UserBindingList,
  UserBindingPage: UserBindingPage,
  UserBindingInstance: UserBindingInstance,
  UserBindingContext: UserBindingContext
};
