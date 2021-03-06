'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

import moduleInfo = require('../../package.json');  /* jshint ignore:line */
import _ = require('lodash');  /* jshint ignore:line */
import util = require('util');  /* jshint ignore:line */
import Accounts = require('./Accounts');  /* jshint ignore:line */
import Api = require('./Api');  /* jshint ignore:line */
import Chat = require('./Chat');  /* jshint ignore:line */
import Fax = require('./Fax');  /* jshint ignore:line */
import IpMessaging = require('./IpMessaging');  /* jshint ignore:line */
import Lookups = require('./Lookups');  /* jshint ignore:line */
import Messaging = require('./Messaging');  /* jshint ignore:line */
import Monitor = require('./Monitor');  /* jshint ignore:line */
import Notify = require('./Notify');  /* jshint ignore:line */
import Preview = require('./Preview');  /* jshint ignore:line */
import Pricing = require('./Pricing');  /* jshint ignore:line */
import Proxy = require('./Proxy');  /* jshint ignore:line */
import RequestClient = require('../base/RequestClient');  /* jshint ignore:line */
import Sync = require('./Sync');  /* jshint ignore:line */
import Taskrouter = require('./Taskrouter');  /* jshint ignore:line */
import Trunking = require('./Trunking');  /* jshint ignore:line */
import Video = require('./Video');  /* jshint ignore:line */
import Wireless = require('./Wireless');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Twilio Client to interact with the Rest API
 *
 * @constructor Twilio
 *
 * @property {Twilio.Accounts} accounts - accounts domain
 * @property {Twilio.Api} api - api domain
 * @property {Twilio.Chat} chat - chat domain
 * @property {Twilio.Fax} fax - fax domain
 * @property {Twilio.IpMessaging} ip_messaging - ip_messaging domain
 * @property {Twilio.Lookups} lookups - lookups domain
 * @property {Twilio.Monitor} monitor - monitor domain
 * @property {Twilio.Notify} notify - notify domain
 * @property {Twilio.Preview} preview - preview domain
 * @property {Twilio.Pricing} pricing - pricing domain
 * @property {Twilio.Proxy} proxy - proxy domain
 * @property {Twilio.Taskrouter} taskrouter - taskrouter domain
 * @property {Twilio.Trunking} trunking - trunking domain
 * @property {Twilio.Video} video - video domain
 * @property {Twilio.Messaging} messaging - messaging domain
 * @property {Twilio.Wireless} wireless - wireless domain
 * @property {Twilio.Sync} sync - sync domain
 * @property {Twilio.Api.V2010.AccountContext.AddressList} addresses -
 *          addresses resource
 * @property {Twilio.Api.V2010.AccountContext.ApplicationList} applications -
 *          applications resource
 * @property {Twilio.Api.V2010.AccountContext.AuthorizedConnectAppList} authorizedConnectApps -
 *          authorizedConnectApps resource
 * @property {Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryList} availablePhoneNumbers -
 *          availablePhoneNumbers resource
 * @property {Twilio.Api.V2010.AccountContext.CallList} calls - calls resource
 * @property {Twilio.Api.V2010.AccountContext.ConferenceList} conferences -
 *          conferences resource
 * @property {Twilio.Api.V2010.AccountContext.ConnectAppList} connectApps -
 *          connectApps resource
 * @property {Twilio.Api.V2010.AccountContext.IncomingPhoneNumberList} incomingPhoneNumbers -
 *          incomingPhoneNumbers resource
 * @property {Twilio.Api.V2010.AccountContext.KeyList} keys - keys resource
 * @property {Twilio.Api.V2010.AccountContext.MessageList} messages -
 *          messages resource
 * @property {Twilio.Api.V2010.AccountContext.NewKeyList} newKeys -
 *          newKeys resource
 * @property {Twilio.Api.V2010.AccountContext.NewSigningKeyList} newSigningKeys -
 *          newSigningKeys resource
 * @property {Twilio.Api.V2010.AccountContext.NotificationList} notifications -
 *          notifications resource
 * @property {Twilio.Api.V2010.AccountContext.OutgoingCallerIdList} outgoingCallerIds -
 *          outgoingCallerIds resource
 * @property {Twilio.Api.V2010.AccountContext.QueueList} queues - queues resource
 * @property {Twilio.Api.V2010.AccountContext.RecordingList} recordings -
 *          recordings resource
 * @property {Twilio.Api.V2010.AccountContext.SigningKeyList} signingKeys -
 *          signingKeys resource
 * @property {Twilio.Api.V2010.AccountContext.SipList} sip - sip resource
 * @property {Twilio.Api.V2010.AccountContext.ShortCodeList} shortCodes -
 *          shortCodes resource
 * @property {Twilio.Api.V2010.AccountContext.TokenList} tokens - tokens resource
 * @property {Twilio.Api.V2010.AccountContext.TranscriptionList} transcriptions -
 *          transcriptions resource
 * @property {Twilio.Api.V2010.AccountContext.UsageList} usage - usage resource
 * @property {Twilio.Api.V2010.AccountContext.ValidationRequestList} validationRequests -
 *          validationRequests resource
 *
 * @param {string} username -
 *          The username used for authentication. This is normally account sid, but if using key/secret auth will be the api key sid.
 * @param {string} password -
 *          The password used for authentication. This is normally auth token, but if using key/secret auth will be the secret.
 * @param {object} opts - ...
 * @param {HttpClient} [opts.httpClient] -
 *          The client used for http requests. Defaults to RequestClient
 * @param {string} [opts.accountSid] -
 *          The default accountSid. This is set to username if not provided
 * @param {Environment} [opts.env] -
 *          The environment object. Defaults to process.env
 * @param {string} [opts.region] - Twilio region to use. Defaults to none
 *
 * @returns {Twilio} A new instance of Twilio client
 */
/* jshint ignore:end */
class Twilio {
  constructor(public username, public password, public opts) {
    opts = opts || {};
    var env = opts.env || process.env;

    this.username = username || env.TWILIO_ACCOUNT_SID;
    this.password = password || env.TWILIO_AUTH_TOKEN;
    this.accountSid = opts.accountSid || this.username;
    this.httpClient = opts.httpClient || new RequestClient();
    this.region = opts.region;

    if (!this.username) {
      throw new Error('username is required');
    }

    if (!this.password) {
      throw new Error('password is required');
    }

    if (!_.startsWith(this.accountSid, 'AC')) {
      throw new Error('accountSid is required');
    }
  }

  // Domains
  _accounts: any;
  _api: any;
  _chat: any;
  _fax: any;
  _ipMessaging: any;
  _lookups: any;
  _monitor: any;
  _notify: any;
  _preview: any;
  _pricing: any;
  _proxy: any;
  _taskrouter: any;
  _trunking: any;
  _video: any;
  _messaging: any;
  _wireless: any;
  _sync: any;

  /* jshint ignore:start */
  /**
   * Makes a request to the Twilio API using the configured http client.
   * Authentication information is automatically added if none is provided.
   *
   * @param {object} opts - The options argument
   * @param {string} opts.method - The http method
   * @param {string} opts.uri - The request uri
   * @param {string} [opts.username] - The username used for auth
   * @param {string} [opts.password] - The password used for auth
   * @param {object} [opts.headers] - The request headers
   * @param {object} [opts.params] - The request params
   * @param {object} [opts.data] - The request data
   * @param {int} [opts.timeout] - The request timeout in milliseconds
   * @param {boolean} [opts.allowRedirects] - Should the client follow redirects
   */
  /* jshint ignore:end */
  request(opts) {
    opts = opts || {};

    if (!opts.method) {
      throw new Error('method is required');
    }

    if (!opts.uri) {
      throw new Error('uri is required');
    }

    var username = opts.username || this.username;
    var password = opts.password || this.password;

    var headers = opts.headers || {};
    headers['User-Agent'] = util.format(
      'twilio-node/%s (node.js %s)',
      moduleInfo.version,
      process.version
    );
    headers['Accept-Charset'] = 'utf-8';

    if (opts.method === 'POST' && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    if (!headers.Accept) {
      headers.Accept = 'application/json';
    }

    var uri = opts.uri;
    if (this.region) {
      var parts = _.split(uri, '.');

      if (parts.length > 1 && !_.isEqual(parts[1], this.region)) {
        uri = _.join(_.concat([parts[0], this.region], _.slice(parts, 1)), '.');
      }
    }

    return this.httpClient.request({
      method: opts.method,
      uri: uri,
      username: username,
      password: password,
      headers: headers,
      params: opts.params,
      data: opts.data,
      timeout: opts.timeout,
      allowRedirects: opts.allowRedirects,
    });
  }

  get accounts() {
    this._accounts = this._accounts || new Accounts(this);
    return this._accounts;
  }

  get api() {
    this._api = this._api || new Api(this);
    return this._api;
  }

  get chat() {
    this._chat = this._chat || new Chat(this);
    return this._chat;
  }

  get fax() {
    this._fax = this._fax || new Fax(this);
    return this._fax;
  }

  get ipMessaging() {
    this._ipMessaging = this._ipMessaging || new IpMessaging(this);
    return this._ipMessaging;
  }

  get lookups() {
    this._lookups = this._lookups || new Lookups(this);
    return this._lookups;
  }

  get monitor() {
    this._monitor = this._monitor || new Monitor(this);
    return this._monitor;
  }

  get notify() {
    this._notify = this._notify || new Notify(this);
    return this._notify;
  }

  get preview() {
    this._preview = this._preview || new Preview(this);
    return this._preview;
  }

  get pricing() {
    this._pricing = this._pricing || new Pricing(this);
    return this._pricing;
  }

  get proxy() {
    this._proxy = this._proxy || new Proxy(this);
    return this._proxy;
  }

  get taskrouter() {
    this._taskrouter = this._taskrouter || new Taskrouter(this);
    return this._taskrouter;
  }

  get trunking() {
    this._trunking = this._trunking || new Trunking(this);
    return this._trunking;
  }

  get video() {
    this._video = this._video || new Video(this);
    return this._video;
  }

  get messaging() {
    this._messaging = this._messaging || new Messaging(this);
    return this._messaging;
  }

  get wireless() {
    this._wireless = this._wireless || new Wireless(this);
    return this._wireless;
  }

  get sync() {
    this._sync = this._sync || new Sync(this);
    return this._sync;
  }

  get addresses() {
      return this.api.account.addresses;
  }

  get applications() {
    return this.api.account.applications;
  }

  get authorizedConnectApps() {
    return this.api.account.authorizedConnectApps;
  }

  get availablePhoneNumbers() {
    return this.api.account.availablePhoneNumbers;
  }

  get calls() {
    return this.api.account.calls;
  }

  get conferences() {
    return this.api.account.conferences;
  }

  get connectApps() {
    return this.api.account.connectApps;
  }

  get incomingPhoneNumbers() {
    return this.api.account.incomingPhoneNumbers;
  }

  get keys() {
    return this.api.account.keys;
  }

  get messages() {
    return this.api.account.messages;
  }

  get newKeys() {
    return this.api.account.newKeys;
  }

  get newSigningKeys() {
    return this.api.account.newSigningKeys;
  }

  get notifications() {
    return this.api.account.notifications;
  }

  get outgoingCallerIds() {
    return this.api.account.outgoingCallerIds;
  }

  get queues() {
    return this.api.account.queues;
  }

  get recordings() {
    return this.api.account.recordings;
  }

  get signingKeys() {
    return this.api.account.signingKeys;
  }

  get sip() {
    return this.api.account.sip;
  }

  get shortCodes() {
    return this.api.account.shortCodes;
  }

  get tokens() {
    return this.api.account.tokens;
  }

  get transcriptions() {
    return this.api.account.transcriptions;
  }

  get usage() {
    return this.api.account.usage;
  }

  get validationRequests() {
    return this.api.account.validationRequests;
  }

}

export = Twilio;
