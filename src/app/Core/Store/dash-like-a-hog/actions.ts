import {Action} from "@ngrx/store";
import {DASH_LIKE_A_HOG} from "./constants";

export namespace DashLikeAHogActions {
  export class GetContractorsRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CONTRACTORS.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class GetContractorsSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CONTRACTORS.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class GetContractorsFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CONTRACTORS.FAILED;

    constructor(public payload: any) {
    }
  }
}
