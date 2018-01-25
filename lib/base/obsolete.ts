'use strict';

import util = require('util');


class ObsoleteClient {
  constructor(public sid, public tkn, public options) {
  throw new Error(this.constructor.name + ' has been removed from this version of the library. Please refer to https://www.twilio.com/docs/libraries/node for more information.')
}


class RestClient extends ObsoleteClient {
  constructor(public sid, public tkn, public options) {
  super(sid, tkn, options);
}


class IpMessagingClient extends ObsoleteClient {
  constructor(public sid, public tkn, public options) {
  super(sid, tkn, options);
}


class PricingClient extends ObsoleteClient {
  constructor(public sid, public tkn, public options) {
  super(sid, tkn, options);
}


class MonitorClient extends ObsoleteClient {
  constructor(public sid, public tkn, public options) {
  super(sid, tkn, options);
}


class TaskRouterClient extends ObsoleteClient {
  constructor(public sid, public tkn, public options) {
  super(sid, tkn, options);
}


class LookupsClient extends ObsoleteClient {
  constructor(public sid, public tkn, public options) {
  super(sid, tkn, options);
}


class TrunkingClient extends ObsoleteClient {
  constructor(public sid, public tkn, public options) {
  super(sid, tkn, options);
}


export = {
  RestClient: RestClient,
  IpMessagingClient: IpMessagingClient,
  PricingClient: PricingClient,
  MonitorClient: MonitorClient,
  TaskRouterClient: TaskRouterClient,
  LookupsClient: LookupsClient,
  TrunkingClient: TrunkingClient
};
