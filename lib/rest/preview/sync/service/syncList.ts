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
var SyncListItemList = require('./syncList/syncListItem').SyncListItemList;
var SyncListPermissionList = require(
    './syncList/syncListPermission').SyncListPermissionList;
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var SyncListList;
var SyncListPage;
var SyncListInstance;
var SyncListContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Sync.ServiceContext.SyncListList
 * @description Initialize the SyncListList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.Sync} version - Version of the resource
 * @param {string} serviceSid - The service_sid
 */
/* jshint ignore:end */
SyncListList = class SyncListList {
  constructor(public version, public serviceSid) {
  /* jshint ignore:start */
  /**
   * @function syncLists
   * @memberof Twilio.Preview.Sync.ServiceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.Sync.ServiceContext.SyncListContext}
   */
  /* jshint ignore:end */
  class SyncListListInstance {
  constructor(public sid) {
    return SyncListListInstance.get(sid);
  }

  SyncListListInstance._version = version;
  // Path Solution
  SyncListListInstance._solution = {serviceSid: serviceSid};
  SyncListListInstance._uri = _.template(
    '/Services/<%= serviceSid %>/Lists' // jshint ignore:line
  )(SyncListListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a SyncListInstance
   *
   * @function create
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.uniqueName] - The unique_name
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed SyncListInstance
   */
  /* jshint ignore:end */
  static create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({'UniqueName': _.get(opts, 'uniqueName')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new SyncListInstance(
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
   * Streams SyncListInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListList
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
   * @description Lists SyncListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListList
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
   * Retrieve a single page of SyncListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListList
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
      deferred.resolve(new SyncListPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of SyncListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListList
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
      deferred.resolve(new SyncListPage(this._version, payload, this._solution));
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
   * Constructs a sync_list
   *
   * @function get
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Preview.Sync.ServiceContext.SyncListContext}
   */
  /* jshint ignore:end */
  static get(sid) {
    return new SyncListContext(this._version, this._solution.serviceSid, sid);
  };

  return SyncListListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Sync.ServiceContext.SyncListPage
 * @augments Page
 * @description Initialize the SyncListPage
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.Sync} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns SyncListPage
 */
/* jshint ignore:end */
SyncListPage = class SyncListPage {
  constructor(public version, public response, public solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

class SyncListPage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of SyncListInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.Sync.ServiceContext.SyncListPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns SyncListInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new SyncListInstance(this._version, payload, this._solution.serviceSid);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Sync.ServiceContext.SyncListInstance
 * @description Initialize the SyncListContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {string} sid - The sid
 * @property {string} uniqueName - The unique_name
 * @property {string} accountSid - The account_sid
 * @property {string} serviceSid - The service_sid
 * @property {string} url - The url
 * @property {string} links - The links
 * @property {string} revision - The revision
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} createdBy - The created_by
 *
 * @param {Twilio.Preview.Sync} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} serviceSid - The service_sid
 * @param {sid_like} sid - The sid
 */
/* jshint ignore:end */
SyncListInstance = function SyncListInstance(version, payload, serviceSid, sid)
                                              {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.uniqueName = payload.unique_name; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line
  this.revision = payload.revision; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.createdBy = payload.created_by; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {serviceSid: serviceSid, sid: sid || this.sid, };
};

Object.defineProperty(SyncListInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new SyncListContext(this._version, this._solution.serviceSid, this._solution.sid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a SyncListInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Sync.ServiceContext.SyncListInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SyncListInstance
 */
/* jshint ignore:end */
fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a SyncListInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Sync.ServiceContext.SyncListInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SyncListInstance
 */
/* jshint ignore:end */
remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Access the syncListItems
 *
 * @function syncListItems
 * @memberof Twilio.Preview.Sync.ServiceContext.SyncListInstance
 * @instance
 *
 * @returns {Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemList}
 */
/* jshint ignore:end */
syncListItems() {
  return this._proxy.syncListItems;
};

/* jshint ignore:start */
/**
 * Access the syncListPermissions
 *
 * @function syncListPermissions
 * @memberof Twilio.Preview.Sync.ServiceContext.SyncListInstance
 * @instance
 *
 * @returns {Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListPermissionList}
 */
/* jshint ignore:end */
syncListPermissions()
    {
  return this._proxy.syncListPermissions;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Sync.ServiceContext.SyncListContext
 * @description Initialize the SyncListContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemList} syncListItems -
 *          syncListItems resource
 * @property {Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListPermissionList} syncListPermissions -
 *          syncListPermissions resource
 *
 * @param {Twilio.Preview.Sync} version - Version of the resource
 * @param {sid} serviceSid - The service_sid
 * @param {sid_like} sid - The sid
 */
/* jshint ignore:end */
SyncListContext = class SyncListContext {
  constructor(public version, public serviceSid, public sid) {
  this._version = version;

  // Path Solution
  this._solution = {serviceSid: serviceSid, sid: sid, };
  this._uri = _.template(
    '/Services/<%= serviceSid %>/Lists/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._syncListItems = undefined;
  this._syncListPermissions = undefined;
};

/* jshint ignore:start */
/**
 * fetch a SyncListInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SyncListInstance
 */
/* jshint ignore:end */
fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new SyncListInstance(
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
 * remove a SyncListInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SyncListInstance
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

Object.defineProperty(SyncListContext.prototype,
  'syncListItems', {
  get: function() {
    if (!this._syncListItems) {
      this._syncListItems = new SyncListItemList(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    }
    return this._syncListItems;
  }
});

Object.defineProperty(SyncListContext.prototype,
  'syncListPermissions', {
  get: function() {
    if (!this._syncListPermissions) {
      this._syncListPermissions = new SyncListPermissionList(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    }
    return this._syncListPermissions;
  }
});

export = {
  SyncListList: SyncListList,
  SyncListPage: SyncListPage,
  SyncListInstance: SyncListInstance,
  SyncListContext: SyncListContext
};