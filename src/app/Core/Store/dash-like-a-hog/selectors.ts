import {DashLikeAHogState} from "./reducers";
import {AppState} from "../root-reducer";

export namespace DashLikeAHogSelectors {

  export const DashLikeAHogConfiguration = (state: AppState): DashLikeAHogState => state.dashLikeAHog;
  export const contractors = (state: AppState) => {
    const dashLikeAHog = DashLikeAHogConfiguration(state);
    return dashLikeAHog.contractors;
  }

}
