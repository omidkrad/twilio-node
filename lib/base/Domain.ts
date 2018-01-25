'use strict';
import _ = require('lodash');

/**
 * Base domain object
 *
 * @constructor
 *
 * @param {Twilio} twilio - A Twilio Client
 * @param {string} baseUrl - Base url for this domain
 */
class Domain {
  constructor(public twilio, public baseUrl) {
  this.twilio = twilio;
  this.baseUrl = baseUrl;
}

/**
 * Turn a uri into an absolute url
 *
 * @param  {string} uri uri to transform
 * @return {string} absolute url
 */
absoluteUrl(uri) {
  return _.trim(this.baseUrl, '/') + '/' + _.trim(uri, '/');
};

/**
 * Make request to this domain
 *
 * @param {object} opts request options
 * @return {Promise} request promise
 */
request(opts) {
  return this.twilio.request(_.assign({}, opts, {
    uri: this.absoluteUrl(opts.uri),
  }));
};

}

export = Domain;
