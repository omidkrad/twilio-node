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
import AccSecurity = require('./preview/AccSecurity');  /* jshint ignore:line */
import BulkExports = require('./preview/BulkExports');  /* jshint ignore:line */
import DeployedDevices = require(
    './preview/DeployedDevices');  /* jshint ignore:line */
import Domain = require('../base/Domain');  /* jshint ignore:line */
import HostedNumbers = require(
    './preview/HostedNumbers');  /* jshint ignore:line */
import Marketplace = require('./preview/Marketplace');  /* jshint ignore:line */
import Proxy = require('./preview/Proxy');  /* jshint ignore:line */
import Studio = require('./preview/Studio');  /* jshint ignore:line */
import Sync = require('./preview/Sync');  /* jshint ignore:line */
import Understand = require('./preview/Understand');  /* jshint ignore:line */
import Wireless = require('./preview/Wireless');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize preview domain
 *
 * @constructor Twilio.Preview
 *
 * @property {Twilio.Preview.BulkExports} bulk_exports - bulk_exports version
 * @property {Twilio.Preview.DeployedDevices} deployed_devices -
 *          deployed_devices version
 * @property {Twilio.Preview.HostedNumbers} hosted_numbers - hosted_numbers version
 * @property {Twilio.Preview.Marketplace} marketplace - marketplace version
 * @property {Twilio.Preview.Proxy} proxy - proxy version
 * @property {Twilio.Preview.Studio} studio - studio version
 * @property {Twilio.Preview.AccSecurity} acc_security - acc_security version
 * @property {Twilio.Preview.Sync} sync - sync version
 * @property {Twilio.Preview.Understand} understand - understand version
 * @property {Twilio.Preview.Wireless} wireless - wireless version
 * @property {Twilio.Preview.BulkExports.ExportList} exports - exports resource
 * @property {Twilio.Preview.BulkExports.ExportConfigurationList} exportConfiguration -
 *          exportConfiguration resource
 * @property {Twilio.Preview.DeployedDevices.FleetList} fleets - fleets resource
 * @property {Twilio.Preview.HostedNumbers.AuthorizationDocumentList} authorizationDocuments -
 *          authorizationDocuments resource
 * @property {Twilio.Preview.HostedNumbers.HostedNumberOrderList} hostedNumberOrders -
 *          hostedNumberOrders resource
 * @property {Twilio.Preview.Marketplace.AvailableAddOnList} availableAddOns -
 *          availableAddOns resource
 * @property {Twilio.Preview.Marketplace.InstalledAddOnList} installedAddOns -
 *          installedAddOns resource
 * @property {Twilio.Preview.Understand.ServiceList} services - services resource
 * @property {Twilio.Preview.Studio.FlowList} flows - flows resource
 * @property {Twilio.Preview.Wireless.CommandList} commands - commands resource
 * @property {Twilio.Preview.Wireless.RatePlanList} ratePlans - ratePlans resource
 * @property {Twilio.Preview.Wireless.SimList} sims - sims resource
 *
 * @param {Twilio} twilio - The twilio client
 */
/* jshint ignore:end */
class Preview {
  constructor(public twilio) {
  Domain.prototype.constructor.call(this, twilio, 'https://preview.twilio.com');

  // Versions
  this._bulk_exports = undefined;
  this._deployed_devices = undefined;
  this._hosted_numbers = undefined;
  this._marketplace = undefined;
  this._proxy = undefined;
  this._studio = undefined;
  this._acc_security = undefined;
  this._sync = undefined;
  this._understand = undefined;
  this._wireless = undefined;
}

class Preview extends Domain {


Object.defineProperty(Preview.prototype,
  'bulk_exports', {
  get: function() {
    this._bulk_exports = this._bulk_exports || new BulkExports(this);
    return this._bulk_exports;
  }
});

Object.defineProperty(Preview.prototype,
  'deployed_devices', {
  get: function() {
    this._deployed_devices = this._deployed_devices || new DeployedDevices(this);
    return this._deployed_devices;
  }
});

Object.defineProperty(Preview.prototype,
  'hosted_numbers', {
  get: function() {
    this._hosted_numbers = this._hosted_numbers || new HostedNumbers(this);
    return this._hosted_numbers;
  }
});

Object.defineProperty(Preview.prototype,
  'marketplace', {
  get: function() {
    this._marketplace = this._marketplace || new Marketplace(this);
    return this._marketplace;
  }
});

Object.defineProperty(Preview.prototype,
  'proxy', {
  get: function() {
    this._proxy = this._proxy || new Proxy(this);
    return this._proxy;
  }
});

Object.defineProperty(Preview.prototype,
  'studio', {
  get: function() {
    this._studio = this._studio || new Studio(this);
    return this._studio;
  }
});

Object.defineProperty(Preview.prototype,
  'acc_security', {
  get: function() {
    this._acc_security = this._acc_security || new AccSecurity(this);
    return this._acc_security;
  }
});

Object.defineProperty(Preview.prototype,
  'sync', {
  get: function() {
    this._sync = this._sync || new Sync(this);
    return this._sync;
  }
});

Object.defineProperty(Preview.prototype,
  'understand', {
  get: function() {
    this._understand = this._understand || new Understand(this);
    return this._understand;
  }
});

Object.defineProperty(Preview.prototype,
  'wireless', {
  get: function() {
    this._wireless = this._wireless || new Wireless(this);
    return this._wireless;
  }
});

Object.defineProperty(Preview.prototype,
  'exports', {
  get: function() {
    return this.bulk_exports.exports;
  }
});

Object.defineProperty(Preview.prototype,
  'exportConfiguration', {
  get: function() {
    return this.bulk_exports.exportConfiguration;
  }
});

Object.defineProperty(Preview.prototype,
  'fleets', {
  get: function() {
    return this.deployed_devices.fleets;
  }
});

Object.defineProperty(Preview.prototype,
  'authorizationDocuments', {
  get: function() {
    return this.hosted_numbers.authorizationDocuments;
  }
});

Object.defineProperty(Preview.prototype,
  'hostedNumberOrders', {
  get: function() {
    return this.hosted_numbers.hostedNumberOrders;
  }
});

Object.defineProperty(Preview.prototype,
  'availableAddOns', {
  get: function() {
    return this.marketplace.availableAddOns;
  }
});

Object.defineProperty(Preview.prototype,
  'installedAddOns', {
  get: function() {
    return this.marketplace.installedAddOns;
  }
});

Object.defineProperty(Preview.prototype,
  'services', {
  get: function() {
    return this.understand.services;
  }
});

Object.defineProperty(Preview.prototype,
  'flows', {
  get: function() {
    return this.studio.flows;
  }
});

Object.defineProperty(Preview.prototype,
  'commands', {
  get: function() {
    return this.wireless.commands;
  }
});

Object.defineProperty(Preview.prototype,
  'ratePlans', {
  get: function() {
    return this.wireless.ratePlans;
  }
});

Object.defineProperty(Preview.prototype,
  'sims', {
  get: function() {
    return this.wireless.sims;
  }
});

}

export = Preview;
