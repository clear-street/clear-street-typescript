// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OfferingsAPI from './offerings';
import {
  Currency,
  MetricUnit,
  MetricValueType,
  OfferingCard,
  OfferingCardList,
  OfferingClass,
  OfferingCompany,
  OfferingDetail,
  OfferingDocumentResource,
  OfferingDocumentType,
  OfferingGetOfferingByIDParams,
  OfferingGetOfferingByIDResponse,
  OfferingGetOfferingsParams,
  OfferingGetOfferingsResponse,
  OfferingHighlight,
  OfferingKeyRisk,
  OfferingParticipantResource,
  OfferingSpv,
  Offerings,
  ParticipantRole,
  SpvStatus,
  ValuationBasis,
} from './offerings';

export class PrivateMarkets extends APIResource {
  offerings: OfferingsAPI.Offerings = new OfferingsAPI.Offerings(this._client);
}

PrivateMarkets.Offerings = Offerings;

export declare namespace PrivateMarkets {
  export {
    Offerings as Offerings,
    type Currency as Currency,
    type MetricUnit as MetricUnit,
    type MetricValueType as MetricValueType,
    type OfferingCard as OfferingCard,
    type OfferingCardList as OfferingCardList,
    type OfferingClass as OfferingClass,
    type OfferingCompany as OfferingCompany,
    type OfferingDetail as OfferingDetail,
    type OfferingDocumentResource as OfferingDocumentResource,
    type OfferingDocumentType as OfferingDocumentType,
    type OfferingHighlight as OfferingHighlight,
    type OfferingKeyRisk as OfferingKeyRisk,
    type OfferingParticipantResource as OfferingParticipantResource,
    type OfferingSpv as OfferingSpv,
    type ParticipantRole as ParticipantRole,
    type SpvStatus as SpvStatus,
    type ValuationBasis as ValuationBasis,
    type OfferingGetOfferingByIDResponse as OfferingGetOfferingByIDResponse,
    type OfferingGetOfferingsResponse as OfferingGetOfferingsResponse,
    type OfferingGetOfferingByIDParams as OfferingGetOfferingByIDParams,
    type OfferingGetOfferingsParams as OfferingGetOfferingsParams,
  };
}
