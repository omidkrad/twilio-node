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
import values = require('../../../../base/values');  /* jshint ignore:line */

var NumberList;
var NumberPage;
var NumberInstance;
var NumberContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Pricing.V1.VoiceContext.NumberList
 * @description Initialize the NumberList
 *
 * @param {Twilio.Pricing.V1} version - Version of the resource
 */
/* jshint ignore:end */
NumberList = class NumberList {
  constructor(public version) {
  /* jshint ignore:start */
  /**
   * @function numbers
   * @memberof Twilio.Pricing.V1.VoiceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Pricing.V1.VoiceContext.NumberContext}
   */
  /* jshint ignore:end */
  class NumberListInstance {
  constructor(public sid) {
    return NumberListInstance.get(sid);
  }

  static _version = version;
  // Path Solution
  static _solution = {};
  /* jshint ignore:start */
  /**
   * Constructs a number
   *
   * @function get
   * @memberof Twilio.Pricing.V1.VoiceContext.NumberList
   * @instance
   *
   * @param {string} number - The number
   *
   * @returns {Twilio.Pricing.V1.VoiceContext.NumberContext}
   */
  /* jshint ignore:end */
  static get(number) {
    return new NumberContext(this._version, number);
  };

  return NumberListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Pricing.V1.VoiceContext.NumberPage
 * @augments Page
 * @description Initialize the NumberPage
 *
 * @param {Twilio.Pricing.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns NumberPage
 */
/* jshint ignore:end */
NumberPage = class NumberPage {
  constructor(public version, public response, public solution) {
  // Path Solution
  this._solution = solution;

  super(version, response, this._solution);
};

class NumberPage extends Page {


/* jshint ignore:start */
/**
 * Build an instance of NumberInstance
 *
 * @function getInstance
 * @memberof Twilio.Pricing.V1.VoiceContext.NumberPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns NumberInstance
 */
/* jshint ignore:end */
getInstance(payload) {
  return new NumberInstance(this._version, payload);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Pricing.V1.VoiceContext.NumberInstance
 * @description Initialize the NumberContext
 *
 * @property {string} number - The number
 * @property {string} country - The country
 * @property {string} isoCountry - The iso_country
 * @property {string} outboundCallPrice - The outbound_call_price
 * @property {string} inboundCallPrice - The inbound_call_price
 * @property {string} priceUnit - The price_unit
 * @property {string} url - The url
 *
 * @param {Twilio.Pricing.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {phone_number} number - The number
 */
/* jshint ignore:end */
NumberInstance = class NumberInstance {
  constructor(public version, public payload, public number) {
  this._version = version;

  // Marshaled Properties
  this.number = payload.number; // jshint ignore:line
  this.country = payload.country; // jshint ignore:line
  this.isoCountry = payload.iso_country; // jshint ignore:line
  this.outboundCallPrice = payload.outbound_call_price; // jshint ignore:line
  this.inboundCallPrice = payload.inbound_call_price; // jshint ignore:line
  this.priceUnit = payload.price_unit; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {number: number || this.number, };
};

Object.defineProperty(NumberInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new NumberContext(this._version, this._solution.number);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a NumberInstance
 *
 * @function fetch
 * @memberof Twilio.Pricing.V1.VoiceContext.NumberInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed NumberInstance
 */
/* jshint ignore:end */
fetch(callback) {
  return this._proxy.fetch(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Pricing.V1.VoiceContext.NumberContext
 * @description Initialize the NumberContext
 *
 * @param {Twilio.Pricing.V1} version - Version of the resource
 * @param {phone_number} number - The number
 */
/* jshint ignore:end */
NumberContext = class NumberContext {
  constructor(public version, public number) {
  this._version = version;

  // Path Solution
  this._solution = {number: number, };
  this._uri = _.template(
    '/Voice/Numbers/<%= number %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a NumberInstance
 *
 * @function fetch
 * @memberof Twilio.Pricing.V1.VoiceContext.NumberContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed NumberInstance
 */
/* jshint ignore:end */
fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new NumberInstance(this._version, payload, this._solution.number));
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
  NumberList: NumberList,
  NumberPage: NumberPage,
  NumberInstance: NumberInstance,
  NumberContext: NumberContext
};
