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

var RatePlanList;
var RatePlanPage;
var RatePlanInstance;
var RatePlanContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Wireless.V1.RatePlanList
 * @description Initialize the RatePlanList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Wireless.V1} version - Version of the resource
 */
/* jshint ignore:end */
RatePlanList = class RatePlanList {
  constructor(public version) {
  /* jshint ignore:start */
  /**
   * @function ratePlans
   * @memberof Twilio.Wireless.V1
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Wireless.V1.RatePlanContext}
   */
  /* jshint ignore:end */
  class RatePlanListInstance {
  constructor(public sid) {
    return RatePlanListInstance.get(sid);
  }

  RatePlanListInstance._version = version;
  // Path Solution
  RatePlanListInstance._solution = {};
  RatePlanListInstance._uri = _.template(
    '/RatePlans' // jshint ignore:line
  )(RatePlanListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams RatePlanInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Wireless.V1.RatePlanList
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
   * @description Lists RatePlanInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Wireless.V1.RatePlanList
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
   * Retrieve a single page of RatePlanInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Wireless.V1.RatePlanList
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
      deferred.resolve(new RatePlanPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of RatePlanInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Wireless.V1.RatePlanList
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
      deferred.resolve(new RatePlanPage(this._version, payload, this._solution));
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
   * create a RatePlanInstance
   *
   * @function create
   * @memberof Twilio.Wireless.V1.RatePlanList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.uniqueName] - The unique_name
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {boolean} [opts.dataEnabled] - The data_enabled
   * @param {number} [opts.dataLimit] - The data_limit
   * @param {string} [opts.dataMetering] - The data_metering
   * @param {boolean} [opts.messagingEnabled] - The messaging_enabled
   * @param {boolean} [opts.voiceEnabled] - The voice_enabled
   * @param {boolean} [opts.nationalRoamingEnabled] - The national_roaming_enabled
   * @param {string|list} [opts.internationalRoaming] - The international_roaming
   * @param {number} [opts.nationalRoamingDataLimit] -
   *          The national_roaming_data_limit
   * @param {number} [opts.internationalRoamingDataLimit] -
   *          The international_roaming_data_limit
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed RatePlanInstance
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
      'UniqueName': _.get(opts, 'uniqueName'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'DataEnabled': serialize.bool(_.get(opts, 'dataEnabled')),
      'DataLimit': _.get(opts, 'dataLimit'),
      'DataMetering': _.get(opts, 'dataMetering'),
      'MessagingEnabled': serialize.bool(_.get(opts, 'messagingEnabled')),
      'VoiceEnabled': serialize.bool(_.get(opts, 'voiceEnabled')),
      'NationalRoamingEnabled': serialize.bool(_.get(opts, 'nationalRoamingEnabled')),
      'InternationalRoaming': serialize.map(_.get(opts, 'internationalRoaming'), function(e) { return e; }),
      'NationalRoamingDataLimit': _.get(opts, 'nationalRoamingDataLimit'),
      'InternationalRoamingDataLimit': _.get(opts, 'internationalRoamingDataLimit')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new RatePlanInstance(this._version, payload, this._solution.sid));
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
   * Constructs a rate_plan
   *
   * @function get
   * @memberof Twilio.Wireless.V1.RatePlanList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Wireless.V1.RatePlanContext}
   */
  /* jshint ignore:end */
  static get(sid) {
    return new RatePlanContext(this._version, sid);
  };

  return RatePlanListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Wireless.V1.RatePlanPage
 * @augments Page
 * @description Initialize the RatePlanPage
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Wireless.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns RatePlanPage
 */
/* jshint ignore:end */
RatePlanPage = class RatePlanPage {
  constructor(public version, public response, public solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

class RatePlanPage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of RatePlanInstance
 *
 * @function getInstance
 * @memberof Twilio.Wireless.V1.RatePlanPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns RatePlanInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new RatePlanInstance(this._version, payload);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Wireless.V1.RatePlanInstance
 * @description Initialize the RatePlanContext
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @property {string} sid - The sid
 * @property {string} uniqueName - The unique_name
 * @property {string} accountSid - The account_sid
 * @property {string} friendlyName - The friendly_name
 * @property {boolean} dataEnabled - The data_enabled
 * @property {string} dataMetering - The data_metering
 * @property {number} dataLimit - The data_limit
 * @property {boolean} messagingEnabled - The messaging_enabled
 * @property {boolean} voiceEnabled - The voice_enabled
 * @property {boolean} nationalRoamingEnabled - The national_roaming_enabled
 * @property {number} nationalRoamingDataLimit - The national_roaming_data_limit
 * @property {string} internationalRoaming - The international_roaming
 * @property {number} internationalRoamingDataLimit -
 *          The international_roaming_data_limit
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} url - The url
 *
 * @param {Twilio.Wireless.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid_like} sid - The sid
 */
/* jshint ignore:end */
RatePlanInstance = class RatePlanInstance {
  constructor(public version, public payload, public sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.uniqueName = payload.unique_name; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.dataEnabled = payload.data_enabled; // jshint ignore:line
  this.dataMetering = payload.data_metering; // jshint ignore:line
  this.dataLimit = deserialize.integer(payload.data_limit); // jshint ignore:line
  this.messagingEnabled = payload.messaging_enabled; // jshint ignore:line
  this.voiceEnabled = payload.voice_enabled; // jshint ignore:line
  this.nationalRoamingEnabled = payload.national_roaming_enabled; // jshint ignore:line
  this.nationalRoamingDataLimit = deserialize.integer(payload.national_roaming_data_limit); // jshint ignore:line
  this.internationalRoaming = payload.international_roaming; // jshint ignore:line
  this.internationalRoamingDataLimit = deserialize.integer(payload.international_roaming_data_limit); // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(RatePlanInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new RatePlanContext(this._version, this._solution.sid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a RatePlanInstance
 *
 * @function fetch
 * @memberof Twilio.Wireless.V1.RatePlanInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RatePlanInstance
 */
/* jshint ignore:end */
fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a RatePlanInstance
 *
 * @function update
 * @memberof Twilio.Wireless.V1.RatePlanInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.uniqueName] - The unique_name
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RatePlanInstance
 */
/* jshint ignore:end */
update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a RatePlanInstance
 *
 * @function remove
 * @memberof Twilio.Wireless.V1.RatePlanInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RatePlanInstance
 */
/* jshint ignore:end */
remove(callback) {
  return this._proxy.remove(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Wireless.V1.RatePlanContext
 * @description Initialize the RatePlanContext
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Wireless.V1} version - Version of the resource
 * @param {sid_like} sid - The sid
 */
/* jshint ignore:end */
RatePlanContext = class RatePlanContext {
  constructor(public version, public sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = _.template(
    '/RatePlans/<%= sid %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a RatePlanInstance
 *
 * @function fetch
 * @memberof Twilio.Wireless.V1.RatePlanContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RatePlanInstance
 */
/* jshint ignore:end */
fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new RatePlanInstance(this._version, payload, this._solution.sid));
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
 * update a RatePlanInstance
 *
 * @function update
 * @memberof Twilio.Wireless.V1.RatePlanContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.uniqueName] - The unique_name
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RatePlanInstance
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
    'UniqueName': _.get(opts, 'uniqueName'),
    'FriendlyName': _.get(opts, 'friendlyName')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new RatePlanInstance(this._version, payload, this._solution.sid));
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
 * remove a RatePlanInstance
 *
 * @function remove
 * @memberof Twilio.Wireless.V1.RatePlanContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RatePlanInstance
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
  RatePlanList: RatePlanList,
  RatePlanPage: RatePlanPage,
  RatePlanInstance: RatePlanInstance,
  RatePlanContext: RatePlanContext
};
