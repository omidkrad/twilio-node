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
import CertificateList = require('./fleet/certificate').CertificateList;
import DeploymentList = require('./fleet/deployment').DeploymentList;
import DeviceList = require('./fleet/device').DeviceList;
import KeyList = require('./fleet/key').KeyList;
import Page = require('../../../base/Page');  /* jshint ignore:line */
import deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
import values = require('../../../base/values');  /* jshint ignore:line */

var FleetList;
var FleetPage;
var FleetInstance;
var FleetContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.DeployedDevices.FleetList
 * @description Initialize the FleetList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.DeployedDevices} version - Version of the resource
 */
/* jshint ignore:end */
FleetList = class FleetList {
  constructor(public version) {
  /* jshint ignore:start */
  /**
   * @function fleets
   * @memberof Twilio.Preview.DeployedDevices
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.DeployedDevices.FleetContext}
   */
  /* jshint ignore:end */
  class FleetListInstance {
  constructor(public sid) {
    return FleetListInstance.get(sid);
  }

  static _version = version;
  // Path Solution
  static _solution = {};
  static _uri = _.template(
    '/Fleets' // jshint ignore:line
  )(FleetListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a FleetInstance
   *
   * @function create
   * @memberof Twilio.Preview.DeployedDevices.FleetList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] -
   *          A human readable description for this Fleet.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed FleetInstance
   */
  /* jshint ignore:end */
  static create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({'FriendlyName': _.get(opts, 'friendlyName')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new FleetInstance(this._version, payload, this._solution.sid));
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
   * Streams FleetInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.DeployedDevices.FleetList
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
   * @description Lists FleetInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.DeployedDevices.FleetList
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
   * Retrieve a single page of FleetInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.DeployedDevices.FleetList
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
      deferred.resolve(new FleetPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of FleetInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.DeployedDevices.FleetList
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
      deferred.resolve(new FleetPage(this._version, payload, this._solution));
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
   * Constructs a fleet
   *
   * @function get
   * @memberof Twilio.Preview.DeployedDevices.FleetList
   * @instance
   *
   * @param {string} sid - A string that uniquely identifies the Fleet.
   *
   * @returns {Twilio.Preview.DeployedDevices.FleetContext}
   */
  /* jshint ignore:end */
  static get(sid) {
    return new FleetContext(this._version, sid);
  };

  return FleetListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.DeployedDevices.FleetPage
 * @augments Page
 * @description Initialize the FleetPage
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.DeployedDevices} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns FleetPage
 */
/* jshint ignore:end */
FleetPage = class FleetPage {
  constructor(public version, public response, public solution) {
  // Path Solution
  this._solution = solution;

  super(version, response, this._solution);
};

class FleetPage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of FleetInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.DeployedDevices.FleetPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns FleetInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new FleetInstance(this._version, payload);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.DeployedDevices.FleetInstance
 * @description Initialize the FleetContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {string} sid - A string that uniquely identifies this Fleet.
 * @property {string} url - URL of this Fleet.
 * @property {string} uniqueName - A unique, addressable name of this Fleet.
 * @property {string} friendlyName - A human readable description for this Fleet.
 * @property {string} accountSid - The unique SID that identifies this Account.
 * @property {string} defaultDeploymentSid -
 *          The unique SID that identifies this Fleet's default Deployment.
 * @property {Date} dateCreated - The date this Fleet was created.
 * @property {Date} dateUpdated - The date this Fleet was updated.
 * @property {string} links - Nested resource URLs.
 *
 * @param {Twilio.Preview.DeployedDevices} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid_like} sid - A string that uniquely identifies the Fleet.
 */
/* jshint ignore:end */
FleetInstance = class FleetInstance {
  constructor(public version, public payload, public sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.uniqueName = payload.unique_name; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.defaultDeploymentSid = payload.default_deployment_sid; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(FleetInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new FleetContext(this._version, this._solution.sid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a FleetInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.DeployedDevices.FleetInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FleetInstance
 */
/* jshint ignore:end */
fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a FleetInstance
 *
 * @function remove
 * @memberof Twilio.Preview.DeployedDevices.FleetInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FleetInstance
 */
/* jshint ignore:end */
remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * update a FleetInstance
 *
 * @function update
 * @memberof Twilio.Preview.DeployedDevices.FleetInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] -
 *          A human readable description for this Fleet.
 * @param {string} [opts.defaultDeploymentSid] - A default Deployment SID.
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FleetInstance
 */
/* jshint ignore:end */
update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Access the devices
 *
 * @function devices
 * @memberof Twilio.Preview.DeployedDevices.FleetInstance
 * @instance
 *
 * @returns {Twilio.Preview.DeployedDevices.FleetContext.DeviceList}
 */
/* jshint ignore:end */
devices() {
  return this._proxy.devices;
};

/* jshint ignore:start */
/**
 * Access the deployments
 *
 * @function deployments
 * @memberof Twilio.Preview.DeployedDevices.FleetInstance
 * @instance
 *
 * @returns {Twilio.Preview.DeployedDevices.FleetContext.DeploymentList}
 */
/* jshint ignore:end */
deployments() {
  return this._proxy.deployments;
};

/* jshint ignore:start */
/**
 * Access the certificates
 *
 * @function certificates
 * @memberof Twilio.Preview.DeployedDevices.FleetInstance
 * @instance
 *
 * @returns {Twilio.Preview.DeployedDevices.FleetContext.CertificateList}
 */
/* jshint ignore:end */
certificates() {
  return this._proxy.certificates;
};

/* jshint ignore:start */
/**
 * Access the keys
 *
 * @function keys
 * @memberof Twilio.Preview.DeployedDevices.FleetInstance
 * @instance
 *
 * @returns {Twilio.Preview.DeployedDevices.FleetContext.KeyList}
 */
/* jshint ignore:end */
keys() {
  return this._proxy.keys;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.DeployedDevices.FleetContext
 * @description Initialize the FleetContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {Twilio.Preview.DeployedDevices.FleetContext.DeviceList} devices -
 *          devices resource
 * @property {Twilio.Preview.DeployedDevices.FleetContext.DeploymentList} deployments -
 *          deployments resource
 * @property {Twilio.Preview.DeployedDevices.FleetContext.CertificateList} certificates -
 *          certificates resource
 * @property {Twilio.Preview.DeployedDevices.FleetContext.KeyList} keys -
 *          keys resource
 *
 * @param {Twilio.Preview.DeployedDevices} version - Version of the resource
 * @param {sid_like} sid - A string that uniquely identifies the Fleet.
 */
/* jshint ignore:end */
FleetContext = class FleetContext {
  constructor(public version, public sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = _.template(
    '/Fleets/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._devices = undefined;
  this._deployments = undefined;
  this._certificates = undefined;
  this._keys = undefined;
};

/* jshint ignore:start */
/**
 * fetch a FleetInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.DeployedDevices.FleetContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FleetInstance
 */
/* jshint ignore:end */
fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new FleetInstance(this._version, payload, this._solution.sid));
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
 * remove a FleetInstance
 *
 * @function remove
 * @memberof Twilio.Preview.DeployedDevices.FleetContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FleetInstance
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
 * update a FleetInstance
 *
 * @function update
 * @memberof Twilio.Preview.DeployedDevices.FleetContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] -
 *          A human readable description for this Fleet.
 * @param {string} [opts.defaultDeploymentSid] - A default Deployment SID.
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FleetInstance
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
    'DefaultDeploymentSid': _.get(opts, 'defaultDeploymentSid')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new FleetInstance(this._version, payload, this._solution.sid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

Object.defineProperty(FleetContext.prototype,
  'devices', {
  get: function() {
    if (!this._devices) {
      this._devices = new DeviceList(this._version, this._solution.sid);
    }
    return this._devices;
  }
});

Object.defineProperty(FleetContext.prototype,
  'deployments', {
  get: function() {
    if (!this._deployments) {
      this._deployments = new DeploymentList(this._version, this._solution.sid);
    }
    return this._deployments;
  }
});

Object.defineProperty(FleetContext.prototype,
  'certificates', {
  get: function() {
    if (!this._certificates) {
      this._certificates = new CertificateList(this._version, this._solution.sid);
    }
    return this._certificates;
  }
});

Object.defineProperty(FleetContext.prototype,
  'keys', {
  get: function() {
    if (!this._keys) {
      this._keys = new KeyList(this._version, this._solution.sid);
    }
    return this._keys;
  }
});

export = {
  FleetList: FleetList,
  FleetPage: FleetPage,
  FleetInstance: FleetInstance,
  FleetContext: FleetContext
};
