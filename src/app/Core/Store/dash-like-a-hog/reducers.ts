import {ActionReducers, Contractor, LoadingStatus, reducingFunction, status} from "../../../types";
import {DASH_LIKE_A_HOG} from "./constants";

export interface DashLikeAHogState {
  contractors: Contractor[];
  contractorsStatus: LoadingStatus;
}
export const DashLikeAHogInitialState: DashLikeAHogState = {
  contractors: [],
  contractorsStatus: status.default
}

const actionReducers: ActionReducers<DashLikeAHogState> = {
  [DASH_LIKE_A_HOG.GET_CONTRACTORS.REQUESTED]: (_: any, state: any) => {
    return {...state, contractorsStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.GET_CONTRACTORS.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, contractorsStatus: status.loaded, contractors: [...payload]}
  },
  [DASH_LIKE_A_HOG.GET_CONTRACTORS.FAILED]: (payload: any, state: any) => {
    return {...state, contractorsStatus: status.error(payload)}
  },
}

export function DashLikeAHogReducer(state = DashLikeAHogInitialState, action: any) {
  return reducingFunction<DashLikeAHogState>(
    actionReducers,
    state,
    action,
  );
}


