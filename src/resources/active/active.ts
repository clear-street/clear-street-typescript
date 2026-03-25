// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1/v1';
import {
  AnalystRating,
  CancelRunResponse,
  Capability,
  ContentPart,
  ContentPartText,
  CreateFeedbackResponse,
  GetRunResponse,
  GetThreadResponse,
  Instrument,
  InstrumentCore,
  InstrumentQuote,
  InstrumentSecurityID,
  ListMessagesResponse,
  ListThreadsResponse,
  Message,
  MessageContent,
  MessageRole,
  NavigateAction,
  OpenChartAction,
  OpenChatWindowAction,
  OpenScreenerAction,
  OrderPayload,
  OrderStrategyType,
  OrderType,
  PrefillOrderAction,
  Run,
  RunStatus,
  ScreenerFilter,
  SecurityIDSource,
  SecurityType,
  Side,
  StartRunResponse,
  StructuredAction,
  Thread,
  TimeInForce,
  V1,
} from './v1/v1';

export class Active extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Active.V1 = V1;

export declare namespace Active {
  export {
    V1 as V1,
    type AnalystRating as AnalystRating,
    type CancelRunResponse as CancelRunResponse,
    type Capability as Capability,
    type ContentPart as ContentPart,
    type ContentPartText as ContentPartText,
    type CreateFeedbackResponse as CreateFeedbackResponse,
    type GetRunResponse as GetRunResponse,
    type GetThreadResponse as GetThreadResponse,
    type Instrument as Instrument,
    type InstrumentCore as InstrumentCore,
    type InstrumentQuote as InstrumentQuote,
    type InstrumentSecurityID as InstrumentSecurityID,
    type ListMessagesResponse as ListMessagesResponse,
    type ListThreadsResponse as ListThreadsResponse,
    type Message as Message,
    type MessageContent as MessageContent,
    type MessageRole as MessageRole,
    type NavigateAction as NavigateAction,
    type OpenChartAction as OpenChartAction,
    type OpenChatWindowAction as OpenChatWindowAction,
    type OpenScreenerAction as OpenScreenerAction,
    type OrderPayload as OrderPayload,
    type OrderStrategyType as OrderStrategyType,
    type OrderType as OrderType,
    type PrefillOrderAction as PrefillOrderAction,
    type Run as Run,
    type RunStatus as RunStatus,
    type ScreenerFilter as ScreenerFilter,
    type SecurityIDSource as SecurityIDSource,
    type SecurityType as SecurityType,
    type Side as Side,
    type StartRunResponse as StartRunResponse,
    type StructuredAction as StructuredAction,
    type Thread as Thread,
    type TimeInForce as TimeInForce,
  };
}
