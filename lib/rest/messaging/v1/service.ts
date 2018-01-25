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
var AlphaSenderList = require('./service/alphaSender').AlphaSenderList;
var Page = require('../../../base/Page');  /* jshint ignore:line */
var PhoneNumberList = require('./service/phoneNumber').PhoneNumberList;
var ShortCodeList = require('./service/shortCode').ShortCodeList;
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var serialize = require('../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var ServiceList;
var ServicePage;
var ServiceInstance;
var ServiceContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Messaging.V1.ServiceList
 * @description Initialize the ServiceList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Messaging.V1} version - Version of the resource
 */
/* jshint ignore:end */
ServiceList = class ServiceList {
  constructor(public version) {
  /* jshint ignore:start */
  /**
   * @function services
   * @memberof Twilio.Messaging.V1
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Messaging.V1.ServiceContext}
   */
  /* jshint ignore:end */
  class ServiceListInstance {
  constructor(public sid) {
    return ServiceListInstance.get(sid);
  }

  ServiceListInstance._version = version;
  // Path Solution
  ServiceListInstance._solution = {};
  ServiceListInstance._uri = _.template(
    '/Services' // jshint ignore:line
  )(ServiceListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a ServiceInstance
   *
   * @function create
   * @memberof Twilio.Messaging.V1.ServiceList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.friendlyName - The friendly_name
   * @param {string} [opts.inboundRequestUrl] - The inbound_request_url
   * @param {string} [opts.inboundMethod] - The inbound_method
   * @param {string} [opts.fallbackUrl] - The fallback_url
   * @param {string} [opts.fallbackMethod] - The fallback_method
   * @param {string} [opts.statusCallback] - The status_callback
   * @param {boolean} [opts.stickySender] - The sticky_sender
   * @param {boolean} [opts.mmsConverter] - The mms_converter
   * @param {boolean} [opts.smartEncoding] - The smart_encoding
   * @param {service.scan_message_content} [opts.scanMessageContent] -
   *          The scan_message_content
   * @param {boolean} [opts.fallbackToLongCode] - The fallback_to_long_code
   * @param {boolean} [opts.areaCodeGeomatch] - The area_code_geomatch
   * @param {number} [opts.validityPeriod] - The validity_period
   * @param {boolean} [opts.synchronousValidation] - The synchronous_validation
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ServiceInstance
   */
  /* jshint ignore:end */
  ServiceListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "opts.friendlyName" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'InboundRequestUrl': _.get(opts, 'inboundRequestUrl'),
      'InboundMethod': _.get(opts, 'inboundMethod'),
      'FallbackUrl': _.get(opts, 'fallbackUrl'),
      'FallbackMethod': _.get(opts, 'fallbackMethod'),
      'StatusCallback': _.get(opts, 'statusCallback'),
      'StickySender': serialize.bool(_.get(opts, 'stickySender')),
      'MmsConverter': serialize.bool(_.get(opts, 'mmsConverter')),
      'SmartEncoding': serialize.bool(_.get(opts, 'smartEncoding')),
      'ScanMessageContent': _.get(opts, 'scanMessageContent'),
      'FallbackToLongCode': serialize.bool(_.get(opts, 'fallbackToLongCode')),
      'AreaCodeGeomatch': serialize.bool(_.get(opts, 'areaCodeGeomatch')),
      'ValidityPeriod': _.get(opts, 'validityPeriod'),
      'SynchronousValidation': serialize.bool(_.get(opts, 'synchronousValidation'))
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ServiceInstance(this._version, payload, this._solution.sid));
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
   * Streams ServiceInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Messaging.V1.ServiceList
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
  ServiceListInstance.each = function each(opts, callback) {
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
   * @description Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Messaging.V1.ServiceList
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
  ServiceListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Messaging.V1.ServiceList
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
  ServiceListInstance.page = function page(opts, callback) {
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ServicePage(this._version, payload, this._solution));
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
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Messaging.V1.ServiceList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ServiceListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new ServicePage(this._version, payload, this._solution));
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
   * Constructs a service
   *
   * @function get
   * @memberof Twilio.Messaging.V1.ServiceList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Messaging.V1.ServiceContext}
   */
  /* jshint ignore:end */
  ServiceListInstance.get = function get(sid) {
    return new ServiceContext(this._version, sid);
  };

  return ServiceListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Messaging.V1.ServicePage
 * @augments Page
 * @description Initialize the ServicePage
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Messaging.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns ServicePage
 */
/* jshint ignore:end */
ServicePage = class ServicePage {
  constructor(public version, public response, public solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

class ServicePage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of ServiceInstance
 *
 * @function getInstance
 * @memberof Twilio.Messaging.V1.ServicePage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns ServiceInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new ServiceInstance(this._version, payload);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Messaging.V1.ServiceInstance
 * @description Initialize the ServiceContext
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @property {string} sid - The sid
 * @property {string} accountSid - The account_sid
 * @property {string} friendlyName - The friendly_name
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} inboundRequestUrl - The inbound_request_url
 * @property {string} inboundMethod - The inbound_method
 * @property {string} fallbackUrl - The fallback_url
 * @property {string} fallbackMethod - The fallback_method
 * @property {string} statusCallback - The status_callback
 * @property {boolean} stickySender - The sticky_sender
 * @property {boolean} mmsConverter - The mms_converter
 * @property {boolean} smartEncoding - The smart_encoding
 * @property {service.scan_message_content} scanMessageContent -
 *          The scan_message_content
 * @property {boolean} fallbackToLongCode - The fallback_to_long_code
 * @property {boolean} areaCodeGeomatch - The area_code_geomatch
 * @property {boolean} synchronousValidation - The synchronous_validation
 * @property {number} validityPeriod - The validity_period
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {Twilio.Messaging.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
ServiceInstance = class ServiceInstance {
  constructor(public version, public payload, public sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.inboundRequestUrl = payload.inbound_request_url; // jshint ignore:line
  this.inboundMethod = payload.inbound_method; // jshint ignore:line
  this.fallbackUrl = payload.fallback_url; // jshint ignore:line
  this.fallbackMethod = payload.fallback_method; // jshint ignore:line
  this.statusCallback = payload.status_callback; // jshint ignore:line
  this.stickySender = payload.sticky_sender; // jshint ignore:line
  this.mmsConverter = payload.mms_converter; // jshint ignore:line
  this.smartEncoding = payload.smart_encoding; // jshint ignore:line
  this.scanMessageContent = payload.scan_message_content; // jshint ignore:line
  this.fallbackToLongCode = payload.fallback_to_long_code; // jshint ignore:line
  this.areaCodeGeomatch = payload.area_code_geomatch; // jshint ignore:line
  this.synchronousValidation = payload.synchronous_validation; // jshint ignore:line
  this.validityPeriod = deserialize.integer(payload.validity_period); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(ServiceInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ServiceContext(this._version, this._solution.sid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * update a ServiceInstance
 *
 * @function update
 * @memberof Twilio.Messaging.V1.ServiceInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.inboundRequestUrl] - The inbound_request_url
 * @param {string} [opts.inboundMethod] - The inbound_method
 * @param {string} [opts.fallbackUrl] - The fallback_url
 * @param {string} [opts.fallbackMethod] - The fallback_method
 * @param {string} [opts.statusCallback] - The status_callback
 * @param {boolean} [opts.stickySender] - The sticky_sender
 * @param {boolean} [opts.mmsConverter] - The mms_converter
 * @param {boolean} [opts.smartEncoding] - The smart_encoding
 * @param {service.scan_message_content} [opts.scanMessageContent] -
 *          The scan_message_content
 * @param {boolean} [opts.fallbackToLongCode] - The fallback_to_long_code
 * @param {boolean} [opts.areaCodeGeomatch] - The area_code_geomatch
 * @param {number} [opts.validityPeriod] - The validity_period
 * @param {boolean} [opts.synchronousValidation] - The synchronous_validation
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * fetch a ServiceInstance
 *
 * @function fetch
 * @memberof Twilio.Messaging.V1.ServiceInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a ServiceInstance
 *
 * @function remove
 * @memberof Twilio.Messaging.V1.ServiceInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Access the phoneNumbers
 *
 * @function phoneNumbers
 * @memberof Twilio.Messaging.V1.ServiceInstance
 * @instance
 *
 * @returns {Twilio.Messaging.V1.ServiceContext.PhoneNumberList}
 */
/* jshint ignore:end */
phoneNumbers() {
  return this._proxy.phoneNumbers;
};

/* jshint ignore:start */
/**
 * Access the shortCodes
 *
 * @function shortCodes
 * @memberof Twilio.Messaging.V1.ServiceInstance
 * @instance
 *
 * @returns {Twilio.Messaging.V1.ServiceContext.ShortCodeList}
 */
/* jshint ignore:end */
shortCodes() {
  return this._proxy.shortCodes;
};

/* jshint ignore:start */
/**
 * Access the alphaSenders
 *
 * @function alphaSenders
 * @memberof Twilio.Messaging.V1.ServiceInstance
 * @instance
 *
 * @returns {Twilio.Messaging.V1.ServiceContext.AlphaSenderList}
 */
/* jshint ignore:end */
alphaSenders() {
  return this._proxy.alphaSenders;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Messaging.V1.ServiceContext
 * @description Initialize the ServiceContext
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @property {Twilio.Messaging.V1.ServiceContext.PhoneNumberList} phoneNumbers -
 *          phoneNumbers resource
 * @property {Twilio.Messaging.V1.ServiceContext.ShortCodeList} shortCodes -
 *          shortCodes resource
 * @property {Twilio.Messaging.V1.ServiceContext.AlphaSenderList} alphaSenders -
 *          alphaSenders resource
 *
 * @param {Twilio.Messaging.V1} version - Version of the resource
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
ServiceContext = class ServiceContext {
  constructor(public version, public sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = _.template(
    '/Services/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._phoneNumbers = undefined;
  this._shortCodes = undefined;
  this._alphaSenders = undefined;
};

/* jshint ignore:start */
/**
 * update a ServiceInstance
 *
 * @function update
 * @memberof Twilio.Messaging.V1.ServiceContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.inboundRequestUrl] - The inbound_request_url
 * @param {string} [opts.inboundMethod] - The inbound_method
 * @param {string} [opts.fallbackUrl] - The fallback_url
 * @param {string} [opts.fallbackMethod] - The fallback_method
 * @param {string} [opts.statusCallback] - The status_callback
 * @param {boolean} [opts.stickySender] - The sticky_sender
 * @param {boolean} [opts.mmsConverter] - The mms_converter
 * @param {boolean} [opts.smartEncoding] - The smart_encoding
 * @param {service.scan_message_content} [opts.scanMessageContent] -
 *          The scan_message_content
 * @param {boolean} [opts.fallbackToLongCode] - The fallback_to_long_code
 * @param {boolean} [opts.areaCodeGeomatch] - The area_code_geomatch
 * @param {number} [opts.validityPeriod] - The validity_period
 * @param {boolean} [opts.synchronousValidation] - The synchronous_validation
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
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
    'InboundRequestUrl': _.get(opts, 'inboundRequestUrl'),
    'InboundMethod': _.get(opts, 'inboundMethod'),
    'FallbackUrl': _.get(opts, 'fallbackUrl'),
    'FallbackMethod': _.get(opts, 'fallbackMethod'),
    'StatusCallback': _.get(opts, 'statusCallback'),
    'StickySender': serialize.bool(_.get(opts, 'stickySender')),
    'MmsConverter': serialize.bool(_.get(opts, 'mmsConverter')),
    'SmartEncoding': serialize.bool(_.get(opts, 'smartEncoding')),
    'ScanMessageContent': _.get(opts, 'scanMessageContent'),
    'FallbackToLongCode': serialize.bool(_.get(opts, 'fallbackToLongCode')),
    'AreaCodeGeomatch': serialize.bool(_.get(opts, 'areaCodeGeomatch')),
    'ValidityPeriod': _.get(opts, 'validityPeriod'),
    'SynchronousValidation': serialize.bool(_.get(opts, 'synchronousValidation'))
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new ServiceInstance(this._version, payload, this._solution.sid));
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
 * fetch a ServiceInstance
 *
 * @function fetch
 * @memberof Twilio.Messaging.V1.ServiceContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new ServiceInstance(this._version, payload, this._solution.sid));
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
 * remove a ServiceInstance
 *
 * @function remove
 * @memberof Twilio.Messaging.V1.ServiceContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
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

Object.defineProperty(ServiceContext.prototype,
  'phoneNumbers', {
  get: function() {
    if (!this._phoneNumbers) {
      this._phoneNumbers = new PhoneNumberList(this._version, this._solution.sid);
    }
    return this._phoneNumbers;
  }
});

Object.defineProperty(ServiceContext.prototype,
  'shortCodes', {
  get: function() {
    if (!this._shortCodes) {
      this._shortCodes = new ShortCodeList(this._version, this._solution.sid);
    }
    return this._shortCodes;
  }
});

Object.defineProperty(ServiceContext.prototype,
  'alphaSenders', {
  get: function() {
    if (!this._alphaSenders) {
      this._alphaSenders = new AlphaSenderList(this._version, this._solution.sid);
    }
    return this._alphaSenders;
  }
});

export = {
  ServiceList: ServiceList,
  ServicePage: ServicePage,
  ServiceInstance: ServiceInstance,
  ServiceContext: ServiceContext
};
