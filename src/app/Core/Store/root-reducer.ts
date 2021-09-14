import {DashLikeAHogState} from "./dash-like-a-hog/reducers";
import {environment} from "../../../environments/environment";
import {MetaReducer} from "@ngrx/store";

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [/* logger */]
  : [];

export interface AppState {
  // ngrx router state
  dashLikeAHog: DashLikeAHogState
  // add your page state interface
}
