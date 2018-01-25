'use strict';

var util = require('util');


class ObsoleteClient {
  constructor(sid, tkn, options) {
  throw new Error(this.constructor.name + ' has been removed from this version of the library. Please refer to https://www.twilio.com/docs/libraries/node for more information.')
}


class RestClient {
  constructor(sid, tkn, options) {
  RestClient.super_.call(this, sid, tkn, options);
}
util.inherits(RestClient, ObsoleteClient);


class IpMessagingClient {
  constructor(sid, tkn, options) {
  IpMessagingClient.super_.call(this, sid, tkn, options);
}
util.inherits(IpMessagingClient, ObsoleteClient);


class PricingClient {
  constructor(sid, tkn, options) {
  PricingClient.super_.call(this, sid, tkn, options);
}
util.inherits(PricingClient, ObsoleteClient);


class MonitorClient {
  constructor(sid, tkn, options) {
  MonitorClient.super_.call(this, sid, tkn, options);
}
util.inherits(MonitorClient, ObsoleteClient);


class TaskRouterClient {
  constructor(sid, tkn, options) {
  TaskRouterClient.super_.call(this, sid, tkn, options);
}
util.inherits(TaskRouterClient, ObsoleteClient);


class LookupsClient {
  constructor(sid, tkn, options) {
  LookupsClient.super_.call(this, sid, tkn, options);
}
util.inherits(LookupsClient, ObsoleteClient);


class TrunkingClient {
  constructor(sid, tkn, options) {
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
