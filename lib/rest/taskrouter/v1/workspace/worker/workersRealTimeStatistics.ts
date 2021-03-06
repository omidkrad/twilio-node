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
import Page = require('../../../../../base/Page');  /* jshint ignore:line */
import deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
import values = require('../../../../../base/values');  /* jshint ignore:line */

var WorkersRealTimeStatisticsList;
var WorkersRealTimeStatisticsPage;
var WorkersRealTimeStatisticsInstance;
var WorkersRealTimeStatisticsContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsList
 * @description Initialize the WorkersRealTimeStatisticsList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
WorkersRealTimeStatisticsList = function WorkersRealTimeStatisticsList(version,
    workspaceSid) {
  /* jshint ignore:start */
  /**
   * @function realTimeStatistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsContext}
   */
  /* jshint ignore:end */
  class WorkersRealTimeStatisticsListInstance {
  constructor(public sid) {
    return WorkersRealTimeStatisticsListInstance.get(sid);
  }

  static _version = version;
  // Path Solution
  static _solution = {workspaceSid: workspaceSid};
  /* jshint ignore:start */
  /**
   * Constructs a workers_real_time_statistics
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsList
   * @instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsContext}
   */
  /* jshint ignore:end */
  static get() {
    return new WorkersRealTimeStatisticsContext(this._version, this._solution.workspaceSid);
  };

  return WorkersRealTimeStatisticsListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsPage
 * @augments Page
 * @description Initialize the WorkersRealTimeStatisticsPage
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns WorkersRealTimeStatisticsPage
 */
/* jshint ignore:end */
WorkersRealTimeStatisticsPage = function WorkersRealTimeStatisticsPage(version,
    response, solution) {
  // Path Solution
  this._solution = solution;

  super(version, response, this._solution);
};

class WorkersRealTimeStatisticsPage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of WorkersRealTimeStatisticsInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns WorkersRealTimeStatisticsInstance
 */
/* jshint ignore:end */

    getInstance(payload) {
  return new WorkersRealTimeStatisticsInstance(this._version, payload, this._solution.workspaceSid);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsInstance
 * @description Initialize the WorkersRealTimeStatisticsContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} activityStatistics - The activity_statistics
 * @property {number} totalWorkers - The total_workers
 * @property {string} workspaceSid - The workspace_sid
 * @property {string} url - The url
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
WorkersRealTimeStatisticsInstance = function
    WorkersRealTimeStatisticsInstance(version, payload, workspaceSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.activityStatistics = payload.activity_statistics; // jshint ignore:line
  this.totalWorkers = deserialize.integer(payload.total_workers); // jshint ignore:line
  this.workspaceSid = payload.workspace_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {workspaceSid: workspaceSid, };
};

Object.defineProperty(WorkersRealTimeStatisticsInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkersRealTimeStatisticsContext(this._version, this._solution.workspaceSid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a WorkersRealTimeStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.taskChannel] - The task_channel
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkersRealTimeStatisticsInstance
 */
/* jshint ignore:end */
fetch(opts,
    callback) {
  return this._proxy.fetch(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsContext
 * @description Initialize the WorkersRealTimeStatisticsContext
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {sid} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
WorkersRealTimeStatisticsContext = function
    WorkersRealTimeStatisticsContext(version, workspaceSid) {
  this._version = version;

  // Path Solution
  this._solution = {workspaceSid: workspaceSid, };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Workers/RealTimeStatistics' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a WorkersRealTimeStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.taskChannel] - The task_channel
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkersRealTimeStatisticsInstance
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
  var data = values.of({'TaskChannel': _.get(opts, 'taskChannel')});

  var promise = this._version.fetch({uri: this._uri, method: 'GET', params: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new WorkersRealTimeStatisticsInstance(
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
  WorkersRealTimeStatisticsList: WorkersRealTimeStatisticsList,
  WorkersRealTimeStatisticsPage: WorkersRealTimeStatisticsPage,
  WorkersRealTimeStatisticsInstance: WorkersRealTimeStatisticsInstance,
  WorkersRealTimeStatisticsContext: WorkersRealTimeStatisticsContext
};
