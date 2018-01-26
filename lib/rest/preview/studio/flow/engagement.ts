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
import StepList = require('./engagement/step').StepList;
import deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
import values = require('../../../../base/values');  /* jshint ignore:line */

var EngagementList;
var EngagementPage;
var EngagementInstance;
var EngagementContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Studio.FlowContext.EngagementList
 * @description Initialize the EngagementList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.Studio} version - Version of the resource
 * @param {string} flowSid - Flow Sid.
 */
/* jshint ignore:end */
EngagementList = class EngagementList {
  constructor(public version, public flowSid) {
  /* jshint ignore:start */
  /**
   * @function engagements
   * @memberof Twilio.Preview.Studio.FlowContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.Studio.FlowContext.EngagementContext}
   */
  /* jshint ignore:end */
  class EngagementListInstance {
  constructor(public sid) {
    return EngagementListInstance.get(sid);
  }

  static _version = version;
  // Path Solution
  static _solution = {flowSid: flowSid};
  static _uri = _.template(
    '/Flows/<%= flowSid %>/Engagements' // jshint ignore:line
  )(EngagementListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams EngagementInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Studio.FlowContext.EngagementList
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
   * @description Lists EngagementInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Studio.FlowContext.EngagementList
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
   * Retrieve a single page of EngagementInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Studio.FlowContext.EngagementList
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
      deferred.resolve(new EngagementPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of EngagementInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Studio.FlowContext.EngagementList
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
      deferred.resolve(new EngagementPage(this._version, payload, this._solution));
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
   * create a EngagementInstance
   *
   * @function create
   * @memberof Twilio.Preview.Studio.FlowContext.EngagementList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.to - The to
   * @param {string} opts.from - The from
   * @param {string} [opts.parameters] - The parameters
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed EngagementInstance
   */
  /* jshint ignore:end */
  static create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.to)) {
      throw new Error('Required parameter "opts.to" missing.');
    }
    if (_.isUndefined(opts.from)) {
      throw new Error('Required parameter "opts.from" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'To': _.get(opts, 'to'),
      'From': _.get(opts, 'from'),
      'Parameters': _.get(opts, 'parameters')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new EngagementInstance(
        this._version,
        payload,
        this._solution.flowSid,
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
   * Constructs a engagement
   *
   * @function get
   * @memberof Twilio.Preview.Studio.FlowContext.EngagementList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Preview.Studio.FlowContext.EngagementContext}
   */
  /* jshint ignore:end */
  static get(sid) {
    return new EngagementContext(this._version, this._solution.flowSid, sid);
  };

  return EngagementListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Studio.FlowContext.EngagementPage
 * @augments Page
 * @description Initialize the EngagementPage
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.Studio} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns EngagementPage
 */
/* jshint ignore:end */
EngagementPage = class EngagementPage {
  constructor(public version, public response, public solution) {
  // Path Solution
  this._solution = solution;

  super(version, response, this._solution);
};

class EngagementPage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of EngagementInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.Studio.FlowContext.EngagementPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns EngagementInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new EngagementInstance(this._version, payload, this._solution.flowSid);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Studio.FlowContext.EngagementInstance
 * @description Initialize the EngagementContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {string} sid - A string that uniquely identifies this Engagement.
 * @property {string} accountSid - Account Sid.
 * @property {string} flowSid - Flow Sid.
 * @property {string} contactSid - Contact Sid.
 * @property {string} contactChannelAddress -
 *          The phone number, SIP address or Client identifier that triggered this Engagement.
 * @property {engagement.status} status - The Status of this Engagement
 * @property {string} context - Nested resource URLs.
 * @property {Date} dateCreated - The date this Engagement was created
 * @property {Date} dateUpdated - The date this Engagement was updated
 * @property {string} url - The URL of this resource.
 * @property {string} links - Nested resource URLs.
 *
 * @param {Twilio.Preview.Studio} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} flowSid - The flow_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
EngagementInstance = function EngagementInstance(version, payload, flowSid, sid)
                                                  {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.flowSid = payload.flow_sid; // jshint ignore:line
  this.contactSid = payload.contact_sid; // jshint ignore:line
  this.contactChannelAddress = payload.contact_channel_address; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.context = payload.context; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {flowSid: flowSid, sid: sid || this.sid, };
};

Object.defineProperty(EngagementInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new EngagementContext(this._version, this._solution.flowSid, this._solution.sid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a EngagementInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Studio.FlowContext.EngagementInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed EngagementInstance
 */
/* jshint ignore:end */
fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a EngagementInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Studio.FlowContext.EngagementInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed EngagementInstance
 */
/* jshint ignore:end */
remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Access the steps
 *
 * @function steps
 * @memberof Twilio.Preview.Studio.FlowContext.EngagementInstance
 * @instance
 *
 * @returns {Twilio.Preview.Studio.FlowContext.EngagementContext.StepList}
 */
/* jshint ignore:end */
steps() {
  return this._proxy.steps;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Studio.FlowContext.EngagementContext
 * @description Initialize the EngagementContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {Twilio.Preview.Studio.FlowContext.EngagementContext.StepList} steps -
 *          steps resource
 *
 * @param {Twilio.Preview.Studio} version - Version of the resource
 * @param {sid} flowSid - The flow_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
EngagementContext = class EngagementContext {
  constructor(public version, public flowSid, public sid) {
  this._version = version;

  // Path Solution
  this._solution = {flowSid: flowSid, sid: sid, };
  this._uri = _.template(
    '/Flows/<%= flowSid %>/Engagements/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._steps = undefined;
};

/* jshint ignore:start */
/**
 * fetch a EngagementInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Studio.FlowContext.EngagementContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed EngagementInstance
 */
/* jshint ignore:end */
fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new EngagementInstance(
      this._version,
      payload,
      this._solution.flowSid,
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
 * remove a EngagementInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Studio.FlowContext.EngagementContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed EngagementInstance
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

Object.defineProperty(EngagementContext.prototype,
  'steps', {
  get: function() {
    if (!this._steps) {
      this._steps = new StepList(this._version, this._solution.flowSid, this._solution.sid);
    }
    return this._steps;
  }
});

export = {
  EngagementList: EngagementList,
  EngagementPage: EngagementPage,
  EngagementInstance: EngagementInstance,
  EngagementContext: EngagementContext
};
