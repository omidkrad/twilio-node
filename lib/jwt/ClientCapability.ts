'use strict';

import _ = require('lodash');
import jwt = require('jsonwebtoken');
import qs = require('querystring');

/**
 * @constructor
 * @param filters
 */
class EventStreamScope {
  constructor(public filters) {
  this.filters = filters || {};
}

_.extend(EventStreamScope.prototype, {
  scope: 'scope:stream:subscribe',

  payload: function() {
    var queryArgs = ['path=/2010-04-01/Events'];

    if (!_.isEmpty(this.filters)) {
      var queryParams = _.map(this.filters, function(value, key) {
        return _.join([qs.escape(key), qs.escape(value)], '=');
      });
      var filterParams = _.join(queryParams, '&');

      queryArgs.push(_.join(['appParams', qs.escape(filterParams)], '='));
    }

    var queryString = _.join(queryArgs, '&');
    return _.join([this.scope, queryString], '?');
  }
});

/**
 * @constructor
 * @param clientName
 */
class IncomingClientScope {
  constructor(public clientName) {
  this.clientName = clientName;
}

_.extend(IncomingClientScope.prototype, {
  scope: 'scope:client:incoming',

  payload: function() {
    var query = _.join(['clientName', qs.escape(this.clientName)], '=');
    return _.join([this.scope, query], '?');
  }
});

/**
 * @constructor
 * @param {object} options - ...
 * @param {string} options.applicationSid - the application sid
 * @param {string} [options.clientName] - the client name
 * @param {object} [options.params] - parameters
 */
class OutgoingClientScope {
  constructor(public options) {
  if (_.isUndefined(options)) {
    throw new Error('Required parameter "options" missing.');
  }
  if (_.isUndefined(options.applicationSid)) {
    throw new Error('Required parameter "options.applicationSid" missing.');
  }

  options = options || {};
  this.applicationSid = options.applicationSid;
  this.clientName = options.clientName;
  this.params = options.params;
}

_.extend(OutgoingClientScope.prototype, {
  scope: 'scope:client:outgoing',

  payload: function() {
    var queryArgs = [_.join(['appSid', qs.escape(this.applicationSid)], '=')];

    if (_.isString(this.clientName)) {
      queryArgs.push(_.join(['clientName', qs.escape(this.clientName)], '='));
    }

    if (_.isObject(this.params)) {
      var queryParams = _.map(this.params, function(value, key) {
        return _.join([qs.escape(key), qs.escape(value)], '=');
      });
      var filterParams = _.join(queryParams, '&');

      queryArgs.push(_.join(['appParams', qs.escape(filterParams)], '='));
    }

    var queryString = _.join(queryArgs, '&');
    return _.join([this.scope, queryString], '?');
  }
});

/**
 * @constructor
 * @param options
 */
class ClientCapability {
  constructor(public options) {
  if (_.isUndefined(options)) {
    throw new Error('Required parameter "options" missing.');
  }
  if (_.isUndefined(options.accountSid)) {
    throw new Error('Required parameter "options.accountSid" missing.');
  }
  if (_.isUndefined(options.authToken)) {
    throw new Error('Required parameter "options.authToken" missing.');
  }

  options = options || {};
  this.accountSid = options.accountSid;
  this.authToken = options.authToken;
  this.ttl = options.ttl || 3600;
  this.scopes = [];
}

static EventStreamScope = EventStreamScope;
static IncomingClientScope = IncomingClientScope;
static OutgoingClientScope = OutgoingClientScope;

_.extend(ClientCapability.prototype, {
  addScope: function(scope) {
    this.scopes.push(scope);
  },

  toJwt: function() {
    var payload = {
      scope: _.join(_.map(this.scopes, function(scope) {
        return scope.payload();
      }), ' '),
      iss: this.accountSid,
      exp: Math.floor(new Date() / 1000) + this.ttl
    };

    return jwt.sign(payload, this.authToken);
  }
});

}

export = ClientCapability;
