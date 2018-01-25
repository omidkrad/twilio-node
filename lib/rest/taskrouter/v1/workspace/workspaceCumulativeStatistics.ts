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
import serialize = require('../../../../base/serialize');  /* jshint ignore:line */
import values = require('../../../../base/values');  /* jshint ignore:line */

var WorkspaceCumulativeStatisticsList;
var WorkspaceCumulativeStatisticsPage;
var WorkspaceCumulativeStatisticsInstance;
var WorkspaceCumulativeStatisticsContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceCumulativeStatisticsList
 * @description Initialize the WorkspaceCumulativeStatisticsList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
WorkspaceCumulativeStatisticsList = function
    WorkspaceCumulativeStatisticsList(version, workspaceSid) {
  /* jshint ignore:start */
  /**
   * @function cumulativeStatistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceCumulativeStatisticsContext}
   */
  /* jshint ignore:end */
  class WorkspaceCumulativeStatisticsListInstance {
  constructor(public sid) {
    return WorkspaceCumulativeStatisticsListInstance.get(sid);
  }

  static _version = version;
  // Path Solution
  static _solution = {workspaceSid: workspaceSid};
  /* jshint ignore:start */
  /**
   * Constructs a workspace_cumulative_statistics
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceCumulativeStatisticsList
   * @instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceCumulativeStatisticsContext}
   */
  /* jshint ignore:end */
  static get() {
    return new WorkspaceCumulativeStatisticsContext(this._version, this._solution.workspaceSid);
  };

  return WorkspaceCumulativeStatisticsListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceCumulativeStatisticsPage
 * @augments Page
 * @description Initialize the WorkspaceCumulativeStatisticsPage
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns WorkspaceCumulativeStatisticsPage
 */
/* jshint ignore:end */
WorkspaceCumulativeStatisticsPage = function
    WorkspaceCumulativeStatisticsPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

class WorkspaceCumulativeStatisticsPage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of WorkspaceCumulativeStatisticsInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceCumulativeStatisticsPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns WorkspaceCumulativeStatisticsInstance
 */
/* jshint ignore:end */

    getInstance(payload) {
  return new WorkspaceCumulativeStatisticsInstance(this._version, payload, this._solution.workspaceSid);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceCumulativeStatisticsInstance
 * @description Initialize the WorkspaceCumulativeStatisticsContext
 *
 * @property {string} accountSid - The account_sid
 * @property {number} avgTaskAcceptanceTime - The avg_task_acceptance_time
 * @property {Date} startTime - The start_time
 * @property {Date} endTime - The end_time
 * @property {number} reservationsCreated - The reservations_created
 * @property {number} reservationsAccepted - The reservations_accepted
 * @property {number} reservationsRejected - The reservations_rejected
 * @property {number} reservationsTimedOut - The reservations_timed_out
 * @property {number} reservationsCanceled - The reservations_canceled
 * @property {number} reservationsRescinded - The reservations_rescinded
 * @property {string} splitByWaitTime - The split_by_wait_time
 * @property {string} waitDurationUntilAccepted - The wait_duration_until_accepted
 * @property {string} waitDurationUntilCanceled - The wait_duration_until_canceled
 * @property {number} tasksCanceled - The tasks_canceled
 * @property {number} tasksCompleted - The tasks_completed
 * @property {number} tasksCreated - The tasks_created
 * @property {number} tasksDeleted - The tasks_deleted
 * @property {number} tasksMoved - The tasks_moved
 * @property {number} tasksTimedOutInWorkflow - The tasks_timed_out_in_workflow
 * @property {string} workspaceSid - The workspace_sid
 * @property {string} url - The url
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
WorkspaceCumulativeStatisticsInstance = function
    WorkspaceCumulativeStatisticsInstance(version, payload, workspaceSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.avgTaskAcceptanceTime = deserialize.integer(payload.avg_task_acceptance_time); // jshint ignore:line
  this.startTime = deserialize.iso8601DateTime(payload.start_time); // jshint ignore:line
  this.endTime = deserialize.iso8601DateTime(payload.end_time); // jshint ignore:line
  this.reservationsCreated = deserialize.integer(payload.reservations_created); // jshint ignore:line
  this.reservationsAccepted = deserialize.integer(payload.reservations_accepted); // jshint ignore:line
  this.reservationsRejected = deserialize.integer(payload.reservations_rejected); // jshint ignore:line
  this.reservationsTimedOut = deserialize.integer(payload.reservations_timed_out); // jshint ignore:line
  this.reservationsCanceled = deserialize.integer(payload.reservations_canceled); // jshint ignore:line
  this.reservationsRescinded = deserialize.integer(payload.reservations_rescinded); // jshint ignore:line
  this.splitByWaitTime = payload.split_by_wait_time; // jshint ignore:line
  this.waitDurationUntilAccepted = payload.wait_duration_until_accepted; // jshint ignore:line
  this.waitDurationUntilCanceled = payload.wait_duration_until_canceled; // jshint ignore:line
  this.tasksCanceled = deserialize.integer(payload.tasks_canceled); // jshint ignore:line
  this.tasksCompleted = deserialize.integer(payload.tasks_completed); // jshint ignore:line
  this.tasksCreated = deserialize.integer(payload.tasks_created); // jshint ignore:line
  this.tasksDeleted = deserialize.integer(payload.tasks_deleted); // jshint ignore:line
  this.tasksMoved = deserialize.integer(payload.tasks_moved); // jshint ignore:line
  this.tasksTimedOutInWorkflow = deserialize.integer(payload.tasks_timed_out_in_workflow); // jshint ignore:line
  this.workspaceSid = payload.workspace_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {workspaceSid: workspaceSid, };
};

Object.defineProperty(WorkspaceCumulativeStatisticsInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkspaceCumulativeStatisticsContext(this._version, this._solution.workspaceSid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a WorkspaceCumulativeStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceCumulativeStatisticsInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {Date} [opts.endDate] - The end_date
 * @param {number} [opts.minutes] - The minutes
 * @param {Date} [opts.startDate] - The start_date
 * @param {string} [opts.taskChannel] - The task_channel
 * @param {string} [opts.splitByWaitTime] - The split_by_wait_time
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkspaceCumulativeStatisticsInstance
 */
/* jshint ignore:end */
fetch(opts,
    callback) {
  return this._proxy.fetch(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceCumulativeStatisticsContext
 * @description Initialize the WorkspaceCumulativeStatisticsContext
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {sid} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
WorkspaceCumulativeStatisticsContext = function
    WorkspaceCumulativeStatisticsContext(version, workspaceSid) {
  this._version = version;

  // Path Solution
  this._solution = {workspaceSid: workspaceSid, };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/CumulativeStatistics' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a WorkspaceCumulativeStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceCumulativeStatisticsContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {Date} [opts.endDate] - The end_date
 * @param {number} [opts.minutes] - The minutes
 * @param {Date} [opts.startDate] - The start_date
 * @param {string} [opts.taskChannel] - The task_channel
 * @param {string} [opts.splitByWaitTime] - The split_by_wait_time
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkspaceCumulativeStatisticsInstance
 */
/* jshint ignore:end */
fetch(opts,
    callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'EndDate': serialize.iso8601DateTime(_.get(opts, 'endDate')),
    'Minutes': _.get(opts, 'minutes'),
    'StartDate': serialize.iso8601DateTime(_.get(opts, 'startDate')),
    'TaskChannel': _.get(opts, 'taskChannel'),
    'SplitByWaitTime': _.get(opts, 'splitByWaitTime')
  });

  var promise = this._version.fetch({uri: this._uri, method: 'GET', params: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new WorkspaceCumulativeStatisticsInstance(
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
  WorkspaceCumulativeStatisticsList: WorkspaceCumulativeStatisticsList,
  WorkspaceCumulativeStatisticsPage: WorkspaceCumulativeStatisticsPage,
  WorkspaceCumulativeStatisticsInstance: WorkspaceCumulativeStatisticsInstance,
  WorkspaceCumulativeStatisticsContext: WorkspaceCumulativeStatisticsContext
};
