'use strict';
import _ = require('lodash');
import RestException = require('./RestException');

/**
 * @constructor
 *
 * @description Base version object
 *
 * @param {Domain} domain twilio domain
 * @param {Version} version api version
 */
class Version {
  constructor(public domain, public version) {
  this._domain = domain;
  this._version = version;
}

/**
 * Generate absolute url from a uri
 *
 * @param  {string} uri uri to transform
 * @return {string} transformed url
 */
absoluteUrl(uri) {
  return this._domain.absoluteUrl(this.relativeUrl(uri));
};

/**
 * Generate relative url from a uri
 *
 * @param  {string} uri uri to transform
 * @return {string} transformed url
 */
relativeUrl(uri) {
  return _.trim(this._version, '/') + '/' + _.trim(uri, '/');
};

/**
 * Make a request against the domain
 *
 * @param  {object} opts request options
 * @return {Promise} promise that resolves to request response
 */
request(opts) {
  return this._domain.request(_.assign({}, opts, {
    uri: this.relativeUrl(opts.uri),
  }));
};

/**
 * Fetch a instance of a record
 * @throws {Error} If response returns non 2xx status code
 *
 * @param  {object} opts request options
 * @return {Promise} promise that resolves to fetched result
 */
fetch(opts) {
  var qResponse = this.request(opts);

  qResponse = qResponse.then(
    function success(response) {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        throw new RestException(response);
      }

      return JSON.parse(response.body);
    }
  );

  return qResponse;
};

/**
 * Update a record
 * @throws {Error} If response returns non 2xx status code
 *
 * @param  {object} opts request options
 * @return {Promise} promise that resolves to updated result
 */
update(opts) {
  var qResponse = this.request(opts);
  qResponse = qResponse.then(
    function success(response) {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        throw new RestException(response);
      }

      return JSON.parse(response.body);
    }
  );

  return qResponse;
};

/**
 * Delete a record
 * @throws {Error} If response returns a 5xx status
 *
 * @param  {object} opts request options
 * @return {Promise} promise that resolves to true if record was deleted
 */
remove(opts) {
  var qResponse = this.request(opts);
  qResponse = qResponse.then(
    function success(response) {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        throw new RestException(response);
      }

      return response.statusCode === 204;
    }
  );

  return qResponse;
};

/**
 * Create a new record
 * @throws {Error} If response returns non 2xx or 201 status code
 *
 * @param  {object} opts request options
 * @return {Promise} promise that resolves to created record
 */
create(opts) {
  var qResponse = this.request(opts);
  qResponse = qResponse.then(
    function success(response) {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        throw new RestException(response);
      }

      return JSON.parse(response.body);
    }
  );

  return qResponse;
};

/**
 * Fetch a page of records
 *
 * @param  {object} opts request options
 * @return {Promise} promise that resolves to page of records
 */
page(opts) {
  return this.request(opts);
};

/**
 * Process limits for list requests
 *
 * @param {object} [opts] ...
 * @param {number} [opts.limit] The maximum number of items to fetch
 * @param {number} [opts.pageSize] The maximum number of items to return
 *                                  with every request
 */
readLimits(opts) {
  var limit = opts.limit;
  var pageLimit;
  var pageSize = opts.pageSize;
  if (!_.isNil(limit) && (!_.isFinite(limit) || limit <= 0)) {
    throw new TypeError("Parameter limit must be a positive integer");
  }

  if (!_.isNil(pageSize) && (!_.isFinite(pageSize) || pageSize <= 0)) {
    throw new TypeError("Parameter pageSize must be a positive integer");
  }

  if (limit) {
    if (!pageSize) {
      pageSize = limit;
    }

    pageLimit = parseInt(Math.ceil(limit / parseFloat(pageSize)), 10);
  }

  return {
    limit: limit,
    pageSize: pageSize,
    pageLimit: pageLimit,
  };
};

}

export = Version;
