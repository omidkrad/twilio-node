'use strict';
var _ = require('lodash');
var Q = require('q');
var Request = require('../../lib/http/request');
var RequestClient = require('../../lib/base/RequestClient');

function Hologram(request, response) {
  this.request = request;
  this.response = response;
}

function Holodeck() {
  this.requests = [];
  this.holograms = [];
}

_.extend(Holodeck.prototype, RequestClient.prototype);

Holodeck.prototype.mock = function(response, request) {
  request = request || new Request();
  this.holograms.push(new Hologram(request, response));
};

Holodeck.prototype.assertHasRequest = function(request) {
  var matchedRequest = _.find(this.requests, function(req) {
    return req.isEqual(request);
  });

  if (!_.isUndefined(matchedRequest)) {
    return;
  }

  var message = _.template(
    '\nHolodeck has never received a request matching: \n <%= request %>\n')({ request: request }
  );

  throw new Error(message);
};

Holodeck.prototype.request = function(opts) {
  opts = opts || {};

  var deferred = Q.defer();
  var request = new Request(_.assign({}, opts, {
    auth: {
      username: opts.username,
      password: opts.password
    }
  }));
  this.requests.push(request);

  var matchedHologram = _.find(this.holograms, function(hologram) {
    return hologram.request.isEqual(request);
  });

  setTimeout(function() {
    if (!_.isUndefined(matchedHologram)) {
      var response = matchedHologram.response;
      deferred.resolve({
        statusCode: response.statusCode,
        body: response.body
      });
    } else {
      deferred.reject(new Error('Failure: holodeck does not contain response'));
    }
  }, 1);

  return deferred.promise;
};

export = Holodeck;
