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
var DependentHostedNumberOrderList = require(
    './authorizationDocument/dependentHostedNumberOrder').DependentHostedNumberOrderList;
var Page = require('../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var serialize = require('../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var AuthorizationDocumentList;
var AuthorizationDocumentPage;
var AuthorizationDocumentInstance;
var AuthorizationDocumentContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.HostedNumbers.AuthorizationDocumentList
 * @description Initialize the AuthorizationDocumentList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.HostedNumbers} version - Version of the resource
 */
/* jshint ignore:end */
AuthorizationDocumentList = class AuthorizationDocumentList {
  constructor(public version) {
  /* jshint ignore:start */
  /**
   * @function authorizationDocuments
   * @memberof Twilio.Preview.HostedNumbers
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.HostedNumbers.AuthorizationDocumentContext}
   */
  /* jshint ignore:end */
  class AuthorizationDocumentListInstance {
  constructor(public sid) {
    return AuthorizationDocumentListInstance.get(sid);
  }

  AuthorizationDocumentListInstance._version = version;
  // Path Solution
  AuthorizationDocumentListInstance._solution = {};
  AuthorizationDocumentListInstance._uri = _.template(
    '/AuthorizationDocuments' // jshint ignore:line
  )(AuthorizationDocumentListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams AuthorizationDocumentInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.email] - Email.
   * @param {authorization_document.status} [opts.status] -
   *          The Status of this AuthorizationDocument.
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
   * @description Lists AuthorizationDocumentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.email] - Email.
   * @param {authorization_document.status} [opts.status] -
   *          The Status of this AuthorizationDocument.
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
   * Retrieve a single page of AuthorizationDocumentInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.email] - Email.
   * @param {authorization_document.status} [opts.status] -
   *          The Status of this AuthorizationDocument.
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
      'Email': _.get(opts, 'email'),
      'Status': _.get(opts, 'status'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new AuthorizationDocumentPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of AuthorizationDocumentInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentList
   * @instance
   *
   * @param {string} [opts.email] - Email.
   * @param {authorization_document.status} [opts.status] -
   *          The Status of this AuthorizationDocument.
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  static getPage(targetUrl,
      callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new AuthorizationDocumentPage(this._version, payload, this._solution));
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
   * create a AuthorizationDocumentInstance
   *
   * @function create
   * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string|list} opts.hostedNumberOrderSids -
   *          A list of HostedNumberOrder sids.
   * @param {string} opts.addressSid - Address sid.
   * @param {string} opts.email - Email.
   * @param {string|list} [opts.ccEmails] - A list of emails.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed AuthorizationDocumentInstance
   */
  /* jshint ignore:end */
  static create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.hostedNumberOrderSids)) {
      throw new Error('Required parameter "opts.hostedNumberOrderSids" missing.');
    }
    if (_.isUndefined(opts.addressSid)) {
      throw new Error('Required parameter "opts.addressSid" missing.');
    }
    if (_.isUndefined(opts.email)) {
      throw new Error('Required parameter "opts.email" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'HostedNumberOrderSids': serialize.map(_.get(opts, 'hostedNumberOrderSids'), function(e) { return e; }),
      'AddressSid': _.get(opts, 'addressSid'),
      'Email': _.get(opts, 'email'),
      'CcEmails': serialize.map(_.get(opts, 'ccEmails'), function(e) { return e; })
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new AuthorizationDocumentInstance(this._version, payload, this._solution.sid));
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
   * Constructs a authorization_document
   *
   * @function get
   * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentList
   * @instance
   *
   * @param {string} sid - AuthorizationDocument sid.
   *
   * @returns {Twilio.Preview.HostedNumbers.AuthorizationDocumentContext}
   */
  /* jshint ignore:end */
  static get(sid) {
    return new AuthorizationDocumentContext(this._version, sid);
  };

  return AuthorizationDocumentListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.HostedNumbers.AuthorizationDocumentPage
 * @augments Page
 * @description Initialize the AuthorizationDocumentPage
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.HostedNumbers} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns AuthorizationDocumentPage
 */
/* jshint ignore:end */
AuthorizationDocumentPage = function AuthorizationDocumentPage(version,
    response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

class AuthorizationDocumentPage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of AuthorizationDocumentInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns AuthorizationDocumentInstance
 */
/* jshint ignore:end */
getInstance(payload)
    {
  return new AuthorizationDocumentInstance(this._version, payload);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.HostedNumbers.AuthorizationDocumentInstance
 * @description Initialize the AuthorizationDocumentContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {string} sid - AuthorizationDocument sid.
 * @property {string} addressSid - Address sid.
 * @property {authorization_document.status} status -
 *          The Status of this AuthorizationDocument.
 * @property {string} email - Email.
 * @property {string} ccEmails - A list of emails.
 * @property {Date} dateCreated - The date this AuthorizationDocument was created.
 * @property {Date} dateUpdated - The date this AuthorizationDocument was updated.
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {Twilio.Preview.HostedNumbers} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid - AuthorizationDocument sid.
 */
/* jshint ignore:end */
AuthorizationDocumentInstance = function AuthorizationDocumentInstance(version,
    payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.addressSid = payload.address_sid; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.email = payload.email; // jshint ignore:line
  this.ccEmails = payload.cc_emails; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(AuthorizationDocumentInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new AuthorizationDocumentContext(this._version, this._solution.sid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a AuthorizationDocumentInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AuthorizationDocumentInstance
 */
/* jshint ignore:end */
fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a AuthorizationDocumentInstance
 *
 * @function update
 * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string|list} [opts.hostedNumberOrderSids] -
 *          A list of HostedNumberOrder sids.
 * @param {string} [opts.addressSid] - Address sid.
 * @param {string} [opts.email] - Email.
 * @param {string|list} [opts.ccEmails] - A list of emails.
 * @param {authorization_document.status} [opts.status] -
 *          The Status of this AuthorizationDocument.
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AuthorizationDocumentInstance
 */
/* jshint ignore:end */
update(opts, callback)
    {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Access the dependentHostedNumberOrders
 *
 * @function dependentHostedNumberOrders
 * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentInstance
 * @instance
 *
 * @returns {Twilio.Preview.HostedNumbers.AuthorizationDocumentContext.DependentHostedNumberOrderList}
 */
/* jshint ignore:end */
AuthorizationDocumentInstance.prototype.dependentHostedNumberOrders = function
    dependentHostedNumberOrders() {
  return this._proxy.dependentHostedNumberOrders;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.HostedNumbers.AuthorizationDocumentContext
 * @description Initialize the AuthorizationDocumentContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {Twilio.Preview.HostedNumbers.AuthorizationDocumentContext.DependentHostedNumberOrderList} dependentHostedNumberOrders -
 *          dependentHostedNumberOrders resource
 *
 * @param {Twilio.Preview.HostedNumbers} version - Version of the resource
 * @param {sid} sid - AuthorizationDocument sid.
 */
/* jshint ignore:end */
AuthorizationDocumentContext = function AuthorizationDocumentContext(version,
    sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = _.template(
    '/AuthorizationDocuments/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._dependentHostedNumberOrders = undefined;
};

/* jshint ignore:start */
/**
 * fetch a AuthorizationDocumentInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AuthorizationDocumentInstance
 */
/* jshint ignore:end */
fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new AuthorizationDocumentInstance(this._version, payload, this._solution.sid));
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
 * update a AuthorizationDocumentInstance
 *
 * @function update
 * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string|list} [opts.hostedNumberOrderSids] -
 *          A list of HostedNumberOrder sids.
 * @param {string} [opts.addressSid] - Address sid.
 * @param {string} [opts.email] - Email.
 * @param {string|list} [opts.ccEmails] - A list of emails.
 * @param {authorization_document.status} [opts.status] -
 *          The Status of this AuthorizationDocument.
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AuthorizationDocumentInstance
 */
/* jshint ignore:end */
update(opts, callback)
    {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'HostedNumberOrderSids': serialize.map(_.get(opts, 'hostedNumberOrderSids'), function(e) { return e; }),
    'AddressSid': _.get(opts, 'addressSid'),
    'Email': _.get(opts, 'email'),
    'CcEmails': serialize.map(_.get(opts, 'ccEmails'), function(e) { return e; }),
    'Status': _.get(opts, 'status')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new AuthorizationDocumentInstance(this._version, payload, this._solution.sid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

Object.defineProperty(AuthorizationDocumentContext.prototype,
  'dependentHostedNumberOrders', {
  get: function() {
    if (!this._dependentHostedNumberOrders) {
      this._dependentHostedNumberOrders = new DependentHostedNumberOrderList(
        this._version,
        this._solution.sid
      );
    }
    return this._dependentHostedNumberOrders;
  }
});

export = {
  AuthorizationDocumentList: AuthorizationDocumentList,
  AuthorizationDocumentPage: AuthorizationDocumentPage,
  AuthorizationDocumentInstance: AuthorizationDocumentInstance,
  AuthorizationDocumentContext: AuthorizationDocumentContext
};
