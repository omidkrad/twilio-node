// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
'use strict';

var _ = require('lodash');
var RestException = require('./RestException');

/**
 * @constructor
 *
 * @description Base page object to maintain request state.
 *
 * @param {Version} version - A twilio version instance
 * @param {Object} response - The http response
 * @param {Object} solution - path solution
 */
class Page {
  constructor(public version, public response, public solution) {
  var payload = this.processResponse(response);

  this._version = version;
  this._payload = payload;
  this._solution = solution;

  this.nextPageUrl = this.getNextPageUrl();
  this.previousPageUrl = this.getPreviousPageUrl();

  this.instances = this.loadInstances(this.loadPage(payload));
}

/**
 * @constant META_KEYS
 * @description meta keys returned in a list request
 */
Page.prototype.META_KEYS = [
  'end',
  'first_page_uri',
  'last_page_uri',
  'next_page_uri',
  'num_pages',
  'page',
  'page_size',
  'previous_page_uri',
  'start',
  'total',
  'uri',
];

/**
 * Get the url of the previous page of records
 *
 * @return {string|undefined} url of the previous page
 */
getPreviousPageUrl() {
  if ('meta' in this._payload && 'previous_page_url' in this._payload.meta && this._payload.meta.previous_page_url) { // jshint ignore:line
    return this._payload.meta.previous_page_url; // jshint ignore:line
  }

  if ('previous_page_uri' in this._payload && this._payload.previous_page_uri) { // jshint ignore:line
    return this._version._domain.absoluteUrl(this._payload.previous_page_uri); // jshint ignore:line
  }

  return undefined;
};

/**
 * Get the url of the next page of records
 *
 * @return {string|undefined} url of the next page
 */
getNextPageUrl() {
  if ('meta' in this._payload && 'next_page_url' in this._payload.meta && this._payload.meta.next_page_url) { // jshint ignore:line
    return this._payload.meta.next_page_url; // jshint ignore:line
  }

  if ('next_page_uri' in this._payload && this._payload.next_page_uri) { // jshint ignore:line
    return this._version._domain.absoluteUrl(this._payload.next_page_uri); // jshint ignore:line
  }

  return undefined;
};

/**
 * Build a new instance given a json payload
 * @abstract
 *
 * @param {object} payload - Payload response from the API
 * @return {object} instance of a resource
 */
getInstance(payload) {
  throw new Error('Page.get_instance() must be implemented in the derived class');
};

/**
 * Load a list of records
 *
 * @param  {object} resources json payload of records
 * @return {Array} list of resources
 */
loadInstances(resources) {
  return _.map(resources, function(resource) {
    return this.getInstance(resource);
  }.bind(this));
};

/**
 * Fetch the next page of records
 *
 * @return {promise} promise that resolves to next page of results
 */
nextPage() {
  if (!this.nextPageUrl) {
    return undefined;
  }

  var promise = this._version._domain.twilio.request({
    method: 'GET',
    uri: this.nextPageUrl,
  });

  promise = promise.then(function(response) {
    return new this.constructor(public this._version, response, this._solution);
  }.bind(this));

  return promise;
};

/**
 * Fetch the previous page of records
 *
 * @return {promise} promise that resolves to previous page of results
 */
previousPage() {
  if (!this.previousPageUrl) {
    return undefined;
  }

  var promise = this._version._domain.twilio.request({
    method: 'GET',
    uri: this.previousPageUrl,
  });

  promise = promise.then(function(response) {
    return new this.constructor(public this._version, response, this._solution);
  }.bind(this));

  return promise;
};

/**
 * Parse json response from API
 * @throws {Error} If non 200 status code is returned
 *
 * @param  {object} response API response
 * @return {object} json parsed response
 */
processResponse(response) {
  if (response.statusCode !== 200) {
    throw new RestException(response);
  }

  return JSON.parse(response.body);
};

/**
 * Load a page of records
 * @throws {Error} If records cannot be deserialized
 *
 * @param  {object} payload json payload
 * @return {array} the page of records
 */
loadPage(payload) {
  if ('meta' in payload && 'key' in payload.meta) {
    return payload[payload.meta.key];
  }

  var keys = _.chain(payload)
      .keys()
      .difference(this.META_KEYS)
      .value();

  if (keys.length === 1) {
    return payload[keys[0]];
  }

  throw new Error('Page Records cannot be deserialized');
};

export = Page;
