'use strict';

var Response = function(statusCode, body) {
  this.statusCode = statusCode;
  this.body = body;
};

toString() {
  return 'HTTP ' + this.statusCode + ' ' + this.body;
};

export = Response;
