import {DashLikeAHogState} from "./reducers";
import {AppState} from "../root-reducer";

export namespace DashLikeAHogSelectors {

  export const DashLikeAHogConfiguration = (state: AppState): DashLikeAHogState => state.dashLikeAHog;
  export const users = (state: AppState) => {
    const dashLikeAHog = DashLikeAHogConfiguration(state);
    return dashLikeAHog.users;
  }

  export const user = (state: AppState) => {
    const dashLikeAHog = DashLikeAHogConfiguration(state);
    return dashLikeAHog.currentUser;
  }

  export const specializations = (state: AppState) => {
    const dashLikeAHog = DashLikeAHogConfiguration(state);
    return dashLikeAHog.specializations;
  }

  export const specialization = (state: AppState) => {
    const dashLikeAHog = DashLikeAHogConfiguration(state);
    return dashLikeAHog.currentSpecialization;
  }

  export const currencies = (state: AppState) => {
    const dashLikeAHog = DashLikeAHogConfiguration(state);
    return dashLikeAHog.currencies;
  }

  export const currency = (state: AppState) => {
    const dashLikeAHog = DashLikeAHogConfiguration(state);
    return dashLikeAHog.currentCurrency;
  }

  export const tasks = (state: AppState) => {
    const dashLikeAHog = DashLikeAHogConfiguration(state);
    return dashLikeAHog.tasks;
  }

  export const task = (state: AppState) => {
    const dashLikeAHog = DashLikeAHogConfiguration(state);
    return dashLikeAHog.currentTask;
  }

  export const contracts = (state: AppState) => {
    const dashLikeAHog = DashLikeAHogConfiguration(state);
    return dashLikeAHog.contracts;
  }

  export const contract = (state: AppState) => {
    const dashLikeAHog = DashLikeAHogConfiguration(state);
    return dashLikeAHog.currentContract;
  }

  export const contractors = (state: AppState) => {
    const dashLikeAHog = DashLikeAHogConfiguration(state);
    return dashLikeAHog.contractors;
  }

  export const customers = (state: AppState) => {
    const dashLikeAHog = DashLikeAHogConfiguration(state);
    return dashLikeAHog.customers;
  }

}
