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
import serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
import values = require('../../../../../base/values');  /* jshint ignore:line */

var FeedbackList;
var FeedbackPage;
var FeedbackInstance;
var FeedbackContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.FeedbackList
 * @description Initialize the FeedbackList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The account_sid
 * @param {string} callSid -
 *          A 34 character string that uniquely identifies this resource.
 */
/* jshint ignore:end */
FeedbackList = class FeedbackList {
  constructor(public version, public accountSid, public callSid) {
  /* jshint ignore:start */
  /**
   * @function feedback
   * @memberof Twilio.Api.V2010.AccountContext.CallContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.CallContext.FeedbackContext}
   */
  /* jshint ignore:end */
  class FeedbackListInstance {
  constructor(public sid) {
    return FeedbackListInstance.get(sid);
  }

  static _version = version;
  // Path Solution
  static _solution = {accountSid: accountSid, callSid: callSid};
  /* jshint ignore:start */
  /**
   * Constructs a feedback
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackList
   * @instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.CallContext.FeedbackContext}
   */
  /* jshint ignore:end */
  static get() {
    return new FeedbackContext(this._version, this._solution.accountSid, this._solution.callSid);
  };

  return FeedbackListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.FeedbackPage
 * @augments Page
 * @description Initialize the FeedbackPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns FeedbackPage
 */
/* jshint ignore:end */
FeedbackPage = class FeedbackPage {
  constructor(public version, public response, public solution) {
  // Path Solution
  this._solution = solution;

  super(version, response, this._solution);
};

class FeedbackPage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of FeedbackInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns FeedbackInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new FeedbackInstance(this._version, payload, this._solution.accountSid, this._solution.callSid);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.FeedbackInstance
 * @description Initialize the FeedbackContext
 *
 * @property {string} accountSid - The account_sid
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {feedback.issues} issues - The issues
 * @property {number} qualityScore - 1 to 5 quality score
 * @property {string} sid - The sid
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} callSid - The call sid that uniquely identifies the call
 */
/* jshint ignore:end */
FeedbackInstance = function FeedbackInstance(version, payload, accountSid,
                                              callSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.issues = payload.issues; // jshint ignore:line
  this.qualityScore = deserialize.integer(payload.quality_score); // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {accountSid: accountSid, callSid: callSid, };
};

Object.defineProperty(FeedbackInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new FeedbackContext(this._version, this._solution.accountSid, this._solution.callSid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * create a FeedbackInstance
 *
 * @function create
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackInstance
 * @instance
 *
 * @param {object} opts - ...
 * @param {number} opts.qualityScore - The quality_score
 * @param {feedback.issues|list} [opts.issue] - The issue
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FeedbackInstance
 */
/* jshint ignore:end */
create(opts, callback) {
  return this._proxy.create(opts, callback);
};

/* jshint ignore:start */
/**
 * fetch a FeedbackInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FeedbackInstance
 */
/* jshint ignore:end */
fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a FeedbackInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackInstance
 * @instance
 *
 * @param {object} opts - ...
 * @param {number} opts.qualityScore - An integer from 1 to 5
 * @param {feedback.issues|list} [opts.issue] - Issues experienced during the call
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FeedbackInstance
 */
/* jshint ignore:end */
update(opts, callback) {
  return this._proxy.update(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.FeedbackContext
 * @description Initialize the FeedbackContext
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} callSid - The call sid that uniquely identifies the call
 */
/* jshint ignore:end */
FeedbackContext = class FeedbackContext {
  constructor(public version, public accountSid, public callSid) {
  this._version = version;

  // Path Solution
  this._solution = {accountSid: accountSid, callSid: callSid, };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Calls/<%= callSid %>/Feedback.json' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * create a FeedbackInstance
 *
 * @function create
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackContext
 * @instance
 *
 * @param {object} opts - ...
 * @param {number} opts.qualityScore - The quality_score
 * @param {feedback.issues|list} [opts.issue] - The issue
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FeedbackInstance
 */
/* jshint ignore:end */
create(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameter "opts" missing.');
  }
  if (_.isUndefined(opts.qualityScore)) {
    throw new Error('Required parameter "opts.qualityScore" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'QualityScore': _.get(opts, 'qualityScore'),
    'Issue': serialize.map(_.get(opts, 'issue'), function(e) { return e; })
  });

  var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new FeedbackInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.callSid
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
 * fetch a FeedbackInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FeedbackInstance
 */
/* jshint ignore:end */
fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new FeedbackInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.callSid
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
 * update a FeedbackInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackContext
 * @instance
 *
 * @param {object} opts - ...
 * @param {number} opts.qualityScore - An integer from 1 to 5
 * @param {feedback.issues|list} [opts.issue] - Issues experienced during the call
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FeedbackInstance
 */
/* jshint ignore:end */
update(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameter "opts" missing.');
  }
  if (_.isUndefined(opts.qualityScore)) {
    throw new Error('Required parameter "opts.qualityScore" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'QualityScore': _.get(opts, 'qualityScore'),
    'Issue': serialize.map(_.get(opts, 'issue'), function(e) { return e; })
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new FeedbackInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.callSid
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
  FeedbackList: FeedbackList,
  FeedbackPage: FeedbackPage,
  FeedbackInstance: FeedbackInstance,
  FeedbackContext: FeedbackContext
};
