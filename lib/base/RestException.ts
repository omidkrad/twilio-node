'use strict';
var util = require('util');

class RestException extends Error {
  constructor(public response) {
  Error.call('[HTTP ' + response.statusCode + '] Failed to execute request');

  var body = JSON.parse(response.body);
  this.status = response.statusCode;
  this.message = body.message;
  this.code = body.code;
  this.moreInfo = body.more_info; /* jshint ignore:line */
  this.detail = body.detail;
}

}

export = RestException;
