import {Action} from "@ngrx/store";

export interface Contractor {
  name: string;
  _id: string;
  phoneNumber: string;
  email: string;
  specializationIds: string[],
  rating: number;
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

