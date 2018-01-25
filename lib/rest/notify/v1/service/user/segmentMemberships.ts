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
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var SegmentMembershipList;
var SegmentMembershipPage;
var SegmentMembershipInstance;
var SegmentMembershipContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Notify.V1.ServiceContext.UserContext.SegmentMembershipList
 * @description Initialize the SegmentMembershipList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Notify.V1} version - Version of the resource
 * @param {string} serviceSid - The service_sid
 * @param {string} identity - The identity
 */
/* jshint ignore:end */
SegmentMembershipList = function SegmentMembershipList(version, serviceSid,
                                                        identity) {
  /* jshint ignore:start */
  /**
   * @function segmentMemberships
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Notify.V1.ServiceContext.UserContext.SegmentMembershipContext}
   */
  /* jshint ignore:end */
  class SegmentMembershipListInstance {
  constructor(public sid) {
    return SegmentMembershipListInstance.get(sid);
  }

  SegmentMembershipListInstance._version = version;
  // Path Solution
  SegmentMembershipListInstance._solution = {serviceSid: serviceSid, identity: identity};
  SegmentMembershipListInstance._uri = _.template(
    '/Services/<%= serviceSid %>/Users/<%= identity %>/SegmentMemberships' // jshint ignore:line
  )(SegmentMembershipListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a SegmentMembershipInstance
   *
   * @function create
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext.SegmentMembershipList
   * @instance
   *
   * @param {object} opts - ...
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed SegmentMembershipInstance
   */
  /* jshint ignore:end */
  static create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.segment)) {
      throw new Error('Required parameter "opts.segment" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({'Segment': _.get(opts, 'segment')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new SegmentMembershipInstance(
        this._version,
        payload,
        this._solution.serviceSid,
        this._solution.identity,
        this._solution.segment
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
   * Constructs a segment_membership
   *
   * @function get
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext.SegmentMembershipList
   * @instance
   *
   * @param {string} segment - The segment
   *
   * @returns {Twilio.Notify.V1.ServiceContext.UserContext.SegmentMembershipContext}
   */
  /* jshint ignore:end */
  static get(segment) {
    return new SegmentMembershipContext(
      this._version,
      this._solution.serviceSid,
      this._solution.identity,
      segment
    );
  };

  return SegmentMembershipListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Notify.V1.ServiceContext.UserContext.SegmentMembershipPage
 * @augments Page
 * @description Initialize the SegmentMembershipPage
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Notify.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns SegmentMembershipPage
 */
/* jshint ignore:end */
SegmentMembershipPage = function SegmentMembershipPage(version, response,
                                                        solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

class SegmentMembershipPage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of SegmentMembershipInstance
 *
 * @function getInstance
 * @memberof Twilio.Notify.V1.ServiceContext.UserContext.SegmentMembershipPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns SegmentMembershipInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new SegmentMembershipInstance(
    this._version,
    payload,
    this._solution.serviceSid,
    this._solution.identity
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Notify.V1.ServiceContext.UserContext.SegmentMembershipInstance
 * @description Initialize the SegmentMembershipContext
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @property {string} accountSid - The account_sid
 * @property {string} serviceSid - The service_sid
 * @property {string} identity - The identity
 * @property {string} segment - The segment
 * @property {string} url - The url
 *
 * @param {Twilio.Notify.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} serviceSid - The service_sid
 * @param {sid_like} identity - The identity
 * @param {string} segment - The segment
 */
/* jshint ignore:end */
SegmentMembershipInstance = function SegmentMembershipInstance(version, payload,
    serviceSid, identity, segment) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.identity = payload.identity; // jshint ignore:line
  this.segment = payload.segment; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {serviceSid: serviceSid, identity: identity, segment: segment || this.segment, };
};

Object.defineProperty(SegmentMembershipInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new SegmentMembershipContext(
        this._version,
        this._solution.serviceSid,
        this._solution.identity,
        this._solution.segment
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * remove a SegmentMembershipInstance
 *
 * @function remove
 * @memberof Twilio.Notify.V1.ServiceContext.UserContext.SegmentMembershipInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SegmentMembershipInstance
 */
/* jshint ignore:end */
remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * fetch a SegmentMembershipInstance
 *
 * @function fetch
 * @memberof Twilio.Notify.V1.ServiceContext.UserContext.SegmentMembershipInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SegmentMembershipInstance
 */
/* jshint ignore:end */
fetch(callback) {
  return this._proxy.fetch(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Notify.V1.ServiceContext.UserContext.SegmentMembershipContext
 * @description Initialize the SegmentMembershipContext
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Notify.V1} version - Version of the resource
 * @param {sid} serviceSid - The service_sid
 * @param {sid_like} identity - The identity
 * @param {string} segment - The segment
 */
/* jshint ignore:end */
SegmentMembershipContext = function SegmentMembershipContext(version,
    serviceSid, identity, segment) {
  this._version = version;

  // Path Solution
  this._solution = {serviceSid: serviceSid, identity: identity, segment: segment, };
  this._uri = _.template(
    '/Services/<%= serviceSid %>/Users/<%= identity %>/SegmentMemberships/<%= segment %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * remove a SegmentMembershipInstance
 *
 * @function remove
 * @memberof Twilio.Notify.V1.ServiceContext.UserContext.SegmentMembershipContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SegmentMembershipInstance
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

/* jshint ignore:start */
/**
 * fetch a SegmentMembershipInstance
 *
 * @function fetch
 * @memberof Twilio.Notify.V1.ServiceContext.UserContext.SegmentMembershipContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SegmentMembershipInstance
 */
/* jshint ignore:end */
fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new SegmentMembershipInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.identity,
      this._solution.segment
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
  SegmentMembershipList: SegmentMembershipList,
  SegmentMembershipPage: SegmentMembershipPage,
  SegmentMembershipInstance: SegmentMembershipInstance,
  SegmentMembershipContext: SegmentMembershipContext
};