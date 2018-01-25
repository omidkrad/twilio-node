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
var MemberList = require('./queue/member').MemberList;
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var QueueList;
var QueuePage;
var QueueInstance;
var QueueContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.QueueList
 * @description Initialize the QueueList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The account_sid
 */
/* jshint ignore:end */
QueueList = class QueueList {
  constructor(public version, public accountSid) {
  /* jshint ignore:start */
  /**
   * @function queues
   * @memberof Twilio.Api.V2010.AccountContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.QueueContext}
   */
  /* jshint ignore:end */
  class QueueListInstance {
  constructor(public sid) {
    return QueueListInstance.get(sid);
  }

  QueueListInstance._version = version;
  // Path Solution
  QueueListInstance._solution = {accountSid: accountSid};
  QueueListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Queues.json' // jshint ignore:line
  )(QueueListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams QueueInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.QueueList
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
   * @description Lists QueueInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.QueueList
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
   * Retrieve a single page of QueueInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.QueueList
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
      deferred.resolve(new QueuePage(this._version, payload, this._solution));
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
   * Retrieve a single target page of QueueInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.QueueList
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
      deferred.resolve(new QueuePage(this._version, payload, this._solution));
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
   * create a QueueInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.QueueList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.friendlyName -
   *          A user-provided string that identifies this queue.
   * @param {number} [opts.maxSize] - The max number of calls allowed in the queue
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed QueueInstance
   */
  /* jshint ignore:end */
  static create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "opts.friendlyName" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'MaxSize': _.get(opts, 'maxSize')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new QueueInstance(
        this._version,
        payload,
        this._solution.accountSid,
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
   * Constructs a queue
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.QueueList
   * @instance
   *
   * @param {string} sid - Fetch by unique queue Sid
   *
   * @returns {Twilio.Api.V2010.AccountContext.QueueContext}
   */
  /* jshint ignore:end */
  static get(sid) {
    return new QueueContext(this._version, this._solution.accountSid, sid);
  };

  return QueueListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.QueuePage
 * @augments Page
 * @description Initialize the QueuePage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns QueuePage
 */
/* jshint ignore:end */
QueuePage = class QueuePage {
  constructor(public version, public response, public solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

class QueuePage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of QueueInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.QueuePage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns QueueInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new QueueInstance(this._version, payload, this._solution.accountSid);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.QueueInstance
 * @description Initialize the QueueContext
 *
 * @property {string} accountSid - The account_sid
 * @property {number} averageWaitTime - Average wait time of members in the queue
 * @property {number} currentSize - The count of calls currently in the queue.
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} friendlyName -
 *          A user-provided string that identifies this queue.
 * @property {number} maxSize - The max number of calls allowed in the queue
 * @property {string} sid - A string that uniquely identifies this queue
 * @property {string} uri - The uri
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique queue Sid
 */
/* jshint ignore:end */
QueueInstance = class QueueInstance {
  constructor(public version, public payload, public accountSid, public sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.averageWaitTime = deserialize.integer(payload.average_wait_time); // jshint ignore:line
  this.currentSize = deserialize.integer(payload.current_size); // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.maxSize = deserialize.integer(payload.max_size); // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {accountSid: accountSid, sid: sid || this.sid, };
};

Object.defineProperty(QueueInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new QueueContext(this._version, this._solution.accountSid, this._solution.sid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a QueueInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.QueueInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed QueueInstance
 */
/* jshint ignore:end */
fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a QueueInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.QueueInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - A human readable description of the queue
 * @param {number} [opts.maxSize] - The max number of members allowed in the queue
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed QueueInstance
 */
/* jshint ignore:end */
update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a QueueInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.QueueInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed QueueInstance
 */
/* jshint ignore:end */
remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Access the members
 *
 * @function members
 * @memberof Twilio.Api.V2010.AccountContext.QueueInstance
 * @instance
 *
 * @returns {Twilio.Api.V2010.AccountContext.QueueContext.MemberList}
 */
/* jshint ignore:end */
members() {
  return this._proxy.members;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.QueueContext
 * @description Initialize the QueueContext
 *
 * @property {Twilio.Api.V2010.AccountContext.QueueContext.MemberList} members -
 *          members resource
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique queue Sid
 */
/* jshint ignore:end */
QueueContext = class QueueContext {
  constructor(public version, public accountSid, public sid) {
  this._version = version;

  // Path Solution
  this._solution = {accountSid: accountSid, sid: sid, };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Queues/<%= sid %>.json' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._members = undefined;
};

/* jshint ignore:start */
/**
 * fetch a QueueInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.QueueContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed QueueInstance
 */
/* jshint ignore:end */
fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new QueueInstance(
      this._version,
      payload,
      this._solution.accountSid,
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
 * update a QueueInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.QueueContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - A human readable description of the queue
 * @param {number} [opts.maxSize] - The max number of members allowed in the queue
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed QueueInstance
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
    'MaxSize': _.get(opts, 'maxSize')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new QueueInstance(
      this._version,
      payload,
      this._solution.accountSid,
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
 * remove a QueueInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.QueueContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed QueueInstance
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

Object.defineProperty(QueueContext.prototype,
  'members', {
  get: function() {
    if (!this._members) {
      this._members = new MemberList(this._version, this._solution.accountSid, this._solution.sid);
    }
    return this._members;
  }
});

export = {
  QueueList: QueueList,
  QueuePage: QueuePage,
  QueueInstance: QueueInstance,
  QueueContext: QueueContext
};