'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../../holodeck');
var Request = require('../../../../../../../lib/http/Request');
var Response = require('../../../../../../../lib/http/Response');
var Twilio = require('../../../../../../../lib').Twilio;


var client;
var holodeck;

describe('Feedback', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('AC' + _.join(_.fill(new Array(32), 'a'), ''), 'AUTHTOKEN', holodeck);
  });
  it('should generate valid create request', function() {
    holodeck.mock(new Response(500, ''));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .calls('CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .feedback().create();
    promise = promise.then(function() {
      throw new Error('failed');
    }, function(error) {
      expect(error.constructor).toBe(Error.prototype.constructor);
    });

    promise.done();

    var solution = {
      accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      callSid: 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    };
    var url = _.template(
      'https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/Calls/<%= callSid %>/Feedback.json'
    )(solution);

    holodeck.assertHasRequest(new Request({
      method: 'POST',
      url: url
    }));
  });
  it('should generate valid create response', function() {
    var body = JSON.stringify({
        'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'date_created': 'Thu, 20 Aug 2015 21:45:46 +0000',
        'date_updated': 'Thu, 20 Aug 2015 21:45:46 +0000',
        'issues': [
            'imperfect-audio',
            'post-dial-delay'
        ],
        'quality_score': 5,
        'sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    });
    holodeck.mock(new Response(200, body));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .calls('CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .feedback().create();
    promise = promise.then(function(response) {
      expect(response).toBeDefined();
    }, function() {
      throw new Error('failed');
    });

    promise.done();
  });
  it('should generate valid fetch request', function() {
    holodeck.mock(new Response(500, ''));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .calls('CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .feedback().fetch();
    promise = promise.then(function() {
      throw new Error('failed');
    }, function(error) {
      expect(error.constructor).toBe(Error.prototype.constructor);
    });

    promise.done();

    var solution = {
      accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      callSid: 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    };
    var url = _.template(
      'https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/Calls/<%= callSid %>/Feedback.json'
    )(solution);

    holodeck.assertHasRequest(new Request({
      method: 'GET',
      url: url
    }));
  });
  it('should generate valid fetch response', function() {
    var body = JSON.stringify({
        'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'date_created': 'Thu, 20 Aug 2015 21:45:46 +0000',
        'date_updated': 'Thu, 20 Aug 2015 21:45:46 +0000',
        'issues': [
            'imperfect-audio',
            'post-dial-delay'
        ],
        'quality_score': 5,
        'sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    });
    holodeck.mock(new Response(200, body));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .calls('CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .feedback().fetch();
    promise = promise.then(function(response) {
      expect(response).toBeDefined();
    }, function() {
      throw new Error('failed');
    });

    promise.done();
  });
  it('should generate valid update request', function() {
    holodeck.mock(new Response(500, ''));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .calls('CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .feedback().update();
    promise = promise.then(function() {
      throw new Error('failed');
    }, function(error) {
      expect(error.constructor).toBe(Error.prototype.constructor);
    });

    promise.done();

    var solution = {
      accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      callSid: 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    };
    var url = _.template(
      'https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/Calls/<%= callSid %>/Feedback.json'
    )(solution);

    holodeck.assertHasRequest(new Request({
      method: 'POST',
      url: url
    }));
  });
  it('should generate valid update response', function() {
    var body = JSON.stringify({
        'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'date_created': 'Thu, 20 Aug 2015 21:45:46 +0000',
        'date_updated': 'Thu, 20 Aug 2015 21:45:46 +0000',
        'issues': [
            'imperfect-audio',
            'post-dial-delay'
        ],
        'quality_score': 5,
        'sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    });
    holodeck.mock(new Response(200, body));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .calls('CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .feedback().update();
    promise = promise.then(function(response) {
      expect(response).toBeDefined();
    }, function() {
      throw new Error('failed');
    });

    promise.done();
  });
});
