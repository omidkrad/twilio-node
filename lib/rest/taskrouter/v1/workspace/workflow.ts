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
import WorkflowCumulativeStatisticsList = require(
    './workflow/workflowCumulativeStatistics').WorkflowCumulativeStatisticsList;
import WorkflowRealTimeStatisticsList = require(
    './workflow/workflowRealTimeStatistics').WorkflowRealTimeStatisticsList;
import WorkflowStatisticsList = require(
    './workflow/workflowStatistics').WorkflowStatisticsList;
import deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
import values = require('../../../../base/values');  /* jshint ignore:line */

var WorkflowList;
var WorkflowPage;
var WorkflowInstance;
var WorkflowContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkflowList
 * @description Initialize the WorkflowList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
WorkflowList = class WorkflowList {
  constructor(public version, public workspaceSid) {
  /* jshint ignore:start */
  /**
   * @function workflows
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext}
   */
  /* jshint ignore:end */
  class WorkflowListInstance {
  constructor(public sid) {
    return WorkflowListInstance.get(sid);
  }

  static _version = version;
  // Path Solution
  static _solution = {workspaceSid: workspaceSid};
  static _uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Workflows' // jshint ignore:line
  )(WorkflowListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams WorkflowInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - The friendly_name
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
   * @description Lists WorkflowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - The friendly_name
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
   * Retrieve a single page of WorkflowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - The friendly_name
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
      'FriendlyName': _.get(opts, 'friendlyName'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new WorkflowPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of WorkflowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowList
   * @instance
   *
   * @param {string} [opts.friendlyName] - The friendly_name
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
      deferred.resolve(new WorkflowPage(this._version, payload, this._solution));
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
   * create a WorkflowInstance
   *
   * @function create
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.friendlyName - The friendly_name
   * @param {string} opts.configuration - The configuration
   * @param {string} [opts.assignmentCallbackUrl] - The assignment_callback_url
   * @param {string} [opts.fallbackAssignmentCallbackUrl] -
   *          The fallback_assignment_callback_url
   * @param {number} [opts.taskReservationTimeout] - The task_reservation_timeout
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed WorkflowInstance
   */
  /* jshint ignore:end */
  static create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "opts.friendlyName" missing.');
    }
    if (_.isUndefined(opts.configuration)) {
      throw new Error('Required parameter "opts.configuration" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'Configuration': _.get(opts, 'configuration'),
      'AssignmentCallbackUrl': _.get(opts, 'assignmentCallbackUrl'),
      'FallbackAssignmentCallbackUrl': _.get(opts, 'fallbackAssignmentCallbackUrl'),
      'TaskReservationTimeout': _.get(opts, 'taskReservationTimeout')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new WorkflowInstance(
        this._version,
        payload,
        this._solution.workspaceSid,
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
   * Constructs a workflow
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext}
   */
  /* jshint ignore:end */
  static get(sid) {
    return new WorkflowContext(this._version, this._solution.workspaceSid, sid);
  };

  return WorkflowListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkflowPage
 * @augments Page
 * @description Initialize the WorkflowPage
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns WorkflowPage
 */
/* jshint ignore:end */
WorkflowPage = class WorkflowPage {
  constructor(public version, public response, public solution) {
  // Path Solution
  this._solution = solution;

  super(version, response, this._solution);
};

class WorkflowPage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of WorkflowInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns WorkflowInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new WorkflowInstance(this._version, payload, this._solution.workspaceSid);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkflowInstance
 * @description Initialize the WorkflowContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} assignmentCallbackUrl - The assignment_callback_url
 * @property {string} configuration - The configuration
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} documentContentType - The document_content_type
 * @property {string} fallbackAssignmentCallbackUrl -
 *          The fallback_assignment_callback_url
 * @property {string} friendlyName - The friendly_name
 * @property {string} sid - The sid
 * @property {number} taskReservationTimeout - The task_reservation_timeout
 * @property {string} workspaceSid - The workspace_sid
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
WorkflowInstance = function WorkflowInstance(version, payload, workspaceSid,
                                              sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.assignmentCallbackUrl = payload.assignment_callback_url; // jshint ignore:line
  this.configuration = payload.configuration; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.documentContentType = payload.document_content_type; // jshint ignore:line
  this.fallbackAssignmentCallbackUrl = payload.fallback_assignment_callback_url; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.taskReservationTimeout = deserialize.integer(payload.task_reservation_timeout); // jshint ignore:line
  this.workspaceSid = payload.workspace_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {workspaceSid: workspaceSid, sid: sid || this.sid, };
};

Object.defineProperty(WorkflowInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkflowContext(this._version, this._solution.workspaceSid, this._solution.sid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a WorkflowInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkflowInstance
 */
/* jshint ignore:end */
fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a WorkflowInstance
 *
 * @function update
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.assignmentCallbackUrl] - The assignment_callback_url
 * @param {string} [opts.fallbackAssignmentCallbackUrl] -
 *          The fallback_assignment_callback_url
 * @param {string} [opts.configuration] - The configuration
 * @param {number} [opts.taskReservationTimeout] - The task_reservation_timeout
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkflowInstance
 */
/* jshint ignore:end */
update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a WorkflowInstance
 *
 * @function remove
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkflowInstance
 */
/* jshint ignore:end */
remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Access the statistics
 *
 * @function statistics
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowInstance
 * @instance
 *
 * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowStatisticsList}
 */
/* jshint ignore:end */
statistics() {
  return this._proxy.statistics;
};

/* jshint ignore:start */
/**
 * Access the realTimeStatistics
 *
 * @function realTimeStatistics
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowInstance
 * @instance
 *
 * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowRealTimeStatisticsList}
 */
/* jshint ignore:end */
realTimeStatistics() {
  return this._proxy.realTimeStatistics;
};

/* jshint ignore:start */
/**
 * Access the cumulativeStatistics
 *
 * @function cumulativeStatistics
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowInstance
 * @instance
 *
 * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowCumulativeStatisticsList}
 */
/* jshint ignore:end */

    cumulativeStatistics() {
  return this._proxy.cumulativeStatistics;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext
 * @description Initialize the WorkflowContext
 *
 * @property {Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowStatisticsList} statistics -
 *          statistics resource
 * @property {Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowRealTimeStatisticsList} realTimeStatistics -
 *          realTimeStatistics resource
 * @property {Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowCumulativeStatisticsList} cumulativeStatistics -
 *          cumulativeStatistics resource
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
WorkflowContext = class WorkflowContext {
  constructor(public version, public workspaceSid, public sid) {
  this._version = version;

  // Path Solution
  this._solution = {workspaceSid: workspaceSid, sid: sid, };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Workflows/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._statistics = undefined;
  this._realTimeStatistics = undefined;
  this._cumulativeStatistics = undefined;
};

/* jshint ignore:start */
/**
 * fetch a WorkflowInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkflowInstance
 */
/* jshint ignore:end */
fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new WorkflowInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
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
 * update a WorkflowInstance
 *
 * @function update
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.assignmentCallbackUrl] - The assignment_callback_url
 * @param {string} [opts.fallbackAssignmentCallbackUrl] -
 *          The fallback_assignment_callback_url
 * @param {string} [opts.configuration] - The configuration
 * @param {number} [opts.taskReservationTimeout] - The task_reservation_timeout
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkflowInstance
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
    'AssignmentCallbackUrl': _.get(opts, 'assignmentCallbackUrl'),
    'FallbackAssignmentCallbackUrl': _.get(opts, 'fallbackAssignmentCallbackUrl'),
    'Configuration': _.get(opts, 'configuration'),
    'TaskReservationTimeout': _.get(opts, 'taskReservationTimeout')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new WorkflowInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
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
 * remove a WorkflowInstance
 *
 * @function remove
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkflowInstance
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

Object.defineProperty(WorkflowContext.prototype,
  'statistics', {
  get: function() {
    if (!this._statistics) {
      this._statistics = new WorkflowStatisticsList(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    }
    return this._statistics;
  }
});

Object.defineProperty(WorkflowContext.prototype,
  'realTimeStatistics', {
  get: function() {
    if (!this._realTimeStatistics) {
      this._realTimeStatistics = new WorkflowRealTimeStatisticsList(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    }
    return this._realTimeStatistics;
  }
});

Object.defineProperty(WorkflowContext.prototype,
  'cumulativeStatistics', {
  get: function() {
    if (!this._cumulativeStatistics) {
      this._cumulativeStatistics = new WorkflowCumulativeStatisticsList(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    }
    return this._cumulativeStatistics;
  }
});

export = {
  WorkflowList: WorkflowList,
  WorkflowPage: WorkflowPage,
  WorkflowInstance: WorkflowInstance,
  WorkflowContext: WorkflowContext
};
