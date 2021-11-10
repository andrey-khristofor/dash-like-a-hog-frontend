import {Action} from "@ngrx/store";

export interface User {
  name: string;
  id: string;
  phoneNumber?: string;
  email?: string;
  rating?: number,
  Roles?: string[],
  specializationIds: string[]
}

export interface Specialization {
  name: string;
  id: string;
  popularity: number;
}

export interface Currency {
  name: string;
  id: string;
  currencyToUsd: number;
}

export interface ITask {
  specializationId: string;
  price: number;
  currencyId: string;
  deadline: string;
  description: string;
  photoUrl?: string[]
  id: string;
}

export interface Contract {
  id: string;
  customerId: string;
  contractorId: string;
  taskId: string;
}

export type LoadingStatus = { loading: false, loaded: false, error: null }
  | { loading: true, loaded: false, error: null }
  | { loading: false, loaded: true, error: null }
  | { loading: false, loaded: false, error: Error | any};

interface Statuses {
  default: LoadingStatus;
  loading: LoadingStatus;
  loaded: LoadingStatus;
  error: ((error: Error | any) => LoadingStatus);
}

export const status: Statuses = {
  default: { loading: false, loaded: false, error: null },
  loading: { loading: true, loaded: false, error: null },
  loaded: { loading: false, loaded: true, error: null },
  error: (error: Error | any) => ({ loading: false, loaded: false, error }),
};


export interface ActionReducers<S> { [action: string]: ((p: any, s: S) => (S | ((s: S) => S))); }

export interface GenericAction extends Action {
  payload?: any;
}

// @ts-ignore
export function wrappingFunction(maybeFunction: Function | any, ...args) {
  return typeof maybeFunction === 'function'
    ? maybeFunction(...args)
    : maybeFunction;
}

export function reducingFunction<S>(
  actionReducers: ActionReducers<S>,
  state: S,
  action: GenericAction,
): S {
  const reducingFunc = actionReducers[action.type];
  return reducingFunc
    ? wrappingFunction(reducingFunc(action.payload, state), state)
    : state;
}

