// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as InstructionsAPI from './instructions';
import {
  Instructions,
  PositionInstruction,
  PositionInstructionList,
  PositionInstructionStatus,
  PositionInstructionType,
} from './instructions';

export class Positions extends APIResource {
  instructions: InstructionsAPI.Instructions = new InstructionsAPI.Instructions(this._client);
}

Positions.Instructions = Instructions;

export declare namespace Positions {
  export {
    Instructions as Instructions,
    type PositionInstruction as PositionInstruction,
    type PositionInstructionList as PositionInstructionList,
    type PositionInstructionStatus as PositionInstructionStatus,
    type PositionInstructionType as PositionInstructionType,
  };
}
