'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

import _ = require('lodash');  /* jshint ignore:line */
import Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
import Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
import Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
import RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
import Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Sip', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
});

