'use strict';

var util = require('util');


class ObsoleteClient {
  constructor(public sid, public tkn, public options) {
  throw new Error(this.constructor.name + ' has been removed from this version of the library. Please refer to https://www.twilio.com/docs/libraries/node for more information.')
}


class RestClient {
  constructor(public sid, public tkn, public options) {
  RestClient.super_.call(this, sid, tkn, options);
}
util.inherits(RestClient, ObsoleteClient);


class IpMessagingClient {
  constructor(public sid, public tkn, public options) {
  IpMessagingClient.super_.call(this, sid, tkn, options);
}
util.inherits(IpMessagingClient, ObsoleteClient);


class PricingClient {
  constructor(public sid, public tkn, public options) {
  PricingClient.super_.call(this, sid, tkn, options);
}
util.inherits(PricingClient, ObsoleteClient);


class MonitorClient {
  constructor(public sid, public tkn, public options) {
  MonitorClient.super_.call(this, sid, tkn, options);
}
util.inherits(MonitorClient, ObsoleteClient);


class TaskRouterClient {
  constructor(public sid, public tkn, public options) {
  TaskRouterClient.super_.call(this, sid, tkn, options);
}
util.inherits(TaskRouterClient, ObsoleteClient);


class LookupsClient {
  constructor(public sid, public tkn, public options) {
  LookupsClient.super_.call(this, sid, tkn, options);
}
util.inherits(LookupsClient, ObsoleteClient);


class TrunkingClient {
  constructor(public sid, public tkn, public options) {
  TrunkingClient.super_.call(this, sid, tkn, options);
}
util.inherits(TrunkingClient, ObsoleteClient);


export = {
  RestClient: RestClient,
  IpMessagingClient: IpMessagingClient,
  PricingClient: PricingClient,
  MonitorClient: MonitorClient,
  TaskRouterClient: TaskRouterClient,
  LookupsClient: LookupsClient,
  TrunkingClient: TrunkingClient
};
