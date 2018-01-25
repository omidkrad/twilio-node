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
import Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
import Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
import Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
import RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
import Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('TaskQueueRealTimeStatistics', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.taskrouter.v1.workspaces('WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .taskQueues('WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .realTimeStatistics().fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        workspaceSid: 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        taskQueueSid: 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/TaskQueues/<%= taskQueueSid %>/RealTimeStatistics')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'longest_task_waiting_age': 100,
          'task_queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'tasks_by_status': {
              'reserved': 0,
              'pending': 0,
              'assigned': 0,
              'wrapping': 0
          },
          'total_eligible_workers': 100,
          'activity_statistics': [
              {
                  'friendly_name': 'Idle',
                  'workers': 0,
                  'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'friendly_name': 'Busy',
                  'workers': 9,
                  'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'friendly_name': 'Offline',
                  'workers': 6,
                  'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'friendly_name': 'Reserved',
                  'workers': 0,
                  'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'tasks_by_priority': {},
          'total_tasks': 100,
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'total_available_workers': 100,
          'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskQueues/WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/RealTimeStatistics'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.taskrouter.v1.workspaces('WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .taskQueues('WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .realTimeStatistics().fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

