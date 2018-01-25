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
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var WorkspaceRealTimeStatisticsList;
var WorkspaceRealTimeStatisticsPage;
var WorkspaceRealTimeStatisticsInstance;
var WorkspaceRealTimeStatisticsContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceRealTimeStatisticsList
 * @description Initialize the WorkspaceRealTimeStatisticsList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
WorkspaceRealTimeStatisticsList = function
    WorkspaceRealTimeStatisticsList(version, workspaceSid) {
  /* jshint ignore:start */
  /**
   * @function realTimeStatistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceRealTimeStatisticsContext}
   */
  /* jshint ignore:end */
  function WorkspaceRealTimeStatisticsListInstance(sid) {
    return WorkspaceRealTimeStatisticsListInstance.get(sid);
  }

  WorkspaceRealTimeStatisticsListInstance._version = version;
  // Path Solution
  WorkspaceRealTimeStatisticsListInstance._solution = {workspaceSid: workspaceSid};
  /* jshint ignore:start */
  /**
   * Constructs a workspace_real_time_statistics
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceRealTimeStatisticsList
   * @instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceRealTimeStatisticsContext}
   */
  /* jshint ignore:end */
  WorkspaceRealTimeStatisticsListInstance.get = function get() {
    return new WorkspaceRealTimeStatisticsContext(this._version, this._solution.workspaceSid);
  };

  return WorkspaceRealTimeStatisticsListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceRealTimeStatisticsPage
 * @augments Page
 * @description Initialize the WorkspaceRealTimeStatisticsPage
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns WorkspaceRealTimeStatisticsPage
 */
/* jshint ignore:end */
WorkspaceRealTimeStatisticsPage = function
    WorkspaceRealTimeStatisticsPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(WorkspaceRealTimeStatisticsPage.prototype, Page.prototype);
WorkspaceRealTimeStatisticsPage.prototype.constructor = WorkspaceRealTimeStatisticsPage;

/* jshint ignore:start */
/**
 * Build an instance of WorkspaceRealTimeStatisticsInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceRealTimeStatisticsPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns WorkspaceRealTimeStatisticsInstance
 */
/* jshint ignore:end */
WorkspaceRealTimeStatisticsPage.prototype.getInstance = function
    getInstance(payload) {
  return new WorkspaceRealTimeStatisticsInstance(this._version, payload, this._solution.workspaceSid);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceRealTimeStatisticsInstance
 * @description Initialize the WorkspaceRealTimeStatisticsContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} activityStatistics - The activity_statistics
 * @property {number} longestTaskWaitingAge - The longest_task_waiting_age
 * @property {string} tasksByPriority - The tasks_by_priority
 * @property {string} tasksByStatus - The tasks_by_status
 * @property {number} totalTasks - The total_tasks
 * @property {number} totalWorkers - The total_workers
 * @property {string} workspaceSid - The workspace_sid
 * @property {string} url - The url
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
WorkspaceRealTimeStatisticsInstance = function
    WorkspaceRealTimeStatisticsInstance(version, payload, workspaceSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.activityStatistics = payload.activity_statistics; // jshint ignore:line
  this.longestTaskWaitingAge = deserialize.integer(payload.longest_task_waiting_age); // jshint ignore:line
  this.tasksByPriority = payload.tasks_by_priority; // jshint ignore:line
  this.tasksByStatus = payload.tasks_by_status; // jshint ignore:line
  this.totalTasks = deserialize.integer(payload.total_tasks); // jshint ignore:line
  this.totalWorkers = deserialize.integer(payload.total_workers); // jshint ignore:line
  this.workspaceSid = payload.workspace_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {workspaceSid: workspaceSid, };
};

Object.defineProperty(WorkspaceRealTimeStatisticsInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkspaceRealTimeStatisticsContext(this._version, this._solution.workspaceSid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a WorkspaceRealTimeStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceRealTimeStatisticsInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.taskChannel] - The task_channel
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkspaceRealTimeStatisticsInstance
 */
/* jshint ignore:end */
WorkspaceRealTimeStatisticsInstance.prototype.fetch = function fetch(opts,
    callback) {
  return this._proxy.fetch(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceRealTimeStatisticsContext
 * @description Initialize the WorkspaceRealTimeStatisticsContext
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {sid} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
WorkspaceRealTimeStatisticsContext = function
    WorkspaceRealTimeStatisticsContext(version, workspaceSid) {
  this._version = version;

  // Path Solution
  this._solution = {workspaceSid: workspaceSid, };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/RealTimeStatistics' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a WorkspaceRealTimeStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceRealTimeStatisticsContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.taskChannel] - The task_channel
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkspaceRealTimeStatisticsInstance
 */
/* jshint ignore:end */
WorkspaceRealTimeStatisticsContext.prototype.fetch = function fetch(opts,
    callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({'TaskChannel': _.get(opts, 'taskChannel')});

  var promise = this._version.fetch({uri: this._uri, method: 'GET', params: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new WorkspaceRealTimeStatisticsInstance(
      this._version,
      payload,
      this._solution.workspaceSid
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
  WorkspaceRealTimeStatisticsList: WorkspaceRealTimeStatisticsList,
  WorkspaceRealTimeStatisticsPage: WorkspaceRealTimeStatisticsPage,
  WorkspaceRealTimeStatisticsInstance: WorkspaceRealTimeStatisticsInstance,
  WorkspaceRealTimeStatisticsContext: WorkspaceRealTimeStatisticsContext
};
