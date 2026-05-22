// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrdersAPI from './orders';

export class Executions extends APIResource {}

/**
 * Represents a single fill of an order for an account.
 */
export interface Execution {
  /**
   * Unique identifier for this execution report.
   */
  id: string;

  /**
   * OEMS instrument identifier.
   */
  instrument_id: string;

  /**
   * Identifier of the order this execution belongs to.
   */
  order_id: string;

  /**
   * Fill price.
   */
  price: string;

  /**
   * Filled quantity.
   */
  quantity: string;

  /**
   * Side of the fill.
   */
  side: OrdersAPI.Side;

  /**
   * Trading symbol.
   */
  symbol: string;

  /**
   * Transaction timestamp in nanosecond precision (UTC).
   */
  transaction_time: string;
}

export type ExecutionList = Array<Execution>;

export declare namespace Executions {
  export { type Execution as Execution, type ExecutionList as ExecutionList };
}
