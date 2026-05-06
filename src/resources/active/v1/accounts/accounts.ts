// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ExercisesAPI from './exercises';
import {
  ExerciseAction,
  ExerciseInstruction,
  ExerciseInstructionList,
  ExerciseStatus,
  Exercises,
} from './exercises';

export class Accounts extends APIResource {
  exercises: ExercisesAPI.Exercises = new ExercisesAPI.Exercises(this._client);
}

Accounts.Exercises = Exercises;

export declare namespace Accounts {
  export {
    Exercises as Exercises,
    type ExerciseAction as ExerciseAction,
    type ExerciseInstruction as ExerciseInstruction,
    type ExerciseInstructionList as ExerciseInstructionList,
    type ExerciseStatus as ExerciseStatus,
  };
}
