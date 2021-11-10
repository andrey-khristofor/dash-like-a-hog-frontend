import {
  ActionReducers,
  User,
  LoadingStatus,
  reducingFunction,
  status,
  Specialization,
  Currency,
  Contract, ITask
} from "../../../types";
import {DASH_LIKE_A_HOG} from "./constants";

export interface DashLikeAHogState {
  users: User[];
  usersStatus: LoadingStatus;
  currentUser: User;
  currentUserStatus: LoadingStatus;
  specializations: Specialization[];
  specializationsStatus: LoadingStatus;
  currentSpecialization: Specialization;
  currentSpecializationStatus: LoadingStatus;
  currencies: Currency[];
  currenciesStatus: LoadingStatus;
  currentCurrency: Currency;
  currentCurrencyStatus: LoadingStatus;
  contracts: Contract[];
  contractsStatus: LoadingStatus;
  currentContract: Contract;
  currentContractStatus: LoadingStatus;
  tasks: ITask[];
  tasksStatus: LoadingStatus;
  currentTask: ITask;
  currentTaskStatus: LoadingStatus;
  customers: User[],
  contractors: User[]
}

export const DashLikeAHogInitialState: DashLikeAHogState = {
  users: [],
  usersStatus: status.default,
  // @ts-ignore
  currentUser: null,
  currentUserStatus: status.default,
  specializations: [],
  specializationsStatus: status.default,
  // @ts-ignore
  currentSpecialization: null,
  currentSpecializationStatus: status.default,
  currencies: [],
  currenciesStatus: status.default,
  // @ts-ignore
  currentCurrency: null,
  currentCurrencyStatus: status.default,
  tasks: [],
  tasksStatus: status.default,
  // @ts-ignore
  currentTask: null,
  currentTaskStatus: status.default,
  contracts: [],
  contractsStatus: status.default,
  // @ts-ignore
  currentContract: null,
  currentContractStatus: status.default,
  customers: [],
  contractors: []
}

const actionReducers: ActionReducers<DashLikeAHogState> = {
  [DASH_LIKE_A_HOG.GET_USERS.REQUESTED]: (_: any, state: any) => {
    return {...state, usersStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.GET_USERS.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, usersStatus: status.loaded, users: [...payload.map((value : any) => ({id: value._id, ...value}))]}
  },
  [DASH_LIKE_A_HOG.GET_USERS.FAILED]: (payload: any, state: any) => {
    return {...state, usersStatus: status.error(payload)}
  },
  [DASH_LIKE_A_HOG.GET_USER.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentUserStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.GET_USER.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentUserStatus: status.loaded, currentUser: {...payload, id: payload._id}}
  },
  [DASH_LIKE_A_HOG.GET_USER.FAILED]: (payload: any, state: any) => {
    return {...state, currentUserStatus: status.error(payload)}
  },[DASH_LIKE_A_HOG.CREATE_USER.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentUserStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.CREATE_USER.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentUserStatus: status.loaded, currentUser: {...payload, id: payload._id}}
  },
  [DASH_LIKE_A_HOG.CREATE_USER.FAILED]: (payload: any, state: any) => {
    return {...state, currentUserStatus: status.error(payload)}
  },[DASH_LIKE_A_HOG.UPDATE_USER.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentUserStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.UPDATE_USER.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentUserStatus: status.loaded, currentUser: {...payload, id: payload._id}}
  },
  [DASH_LIKE_A_HOG.UPDATE_USER.FAILED]: (payload: any, state: any) => {
    return {...state, currentUserStatus: status.error(payload)}
  },[DASH_LIKE_A_HOG.DELETE_USER.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentUserStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.DELETE_USER.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentUserStatus: status.loaded, currentUser: null, users: [...payload.map((value : any) => ({id: value._id, ...value}))]}
  },
  [DASH_LIKE_A_HOG.DELETE_USER.FAILED]: (payload: any, state: any) => {
    return {...state, currentUserStatus: status.error(payload)}
  },
  [DASH_LIKE_A_HOG.CURRENT_USER.RESET]: (_: any, state: any) => {
    return {...state, currentUserStatus: status.default, currentUser: null}
  },



  [DASH_LIKE_A_HOG.GET_SPECIALIZATIONS.REQUESTED]: (_: any, state: any) => {
    return {...state, specializationsStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.GET_SPECIALIZATIONS.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, specializationsStatus: status.loaded, specializations: [...payload.map((value : any) => ({id: value._id, ...value}))]}
  },
  [DASH_LIKE_A_HOG.GET_SPECIALIZATIONS.FAILED]: (payload: any, state: any) => {
    return {...state, specializationsStatus: status.error(payload)}
  },
  [DASH_LIKE_A_HOG.GET_SPECIALIZATION.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentSpecializationStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.GET_SPECIALIZATION.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentSpecializationStatus: status.loaded, currentSpecialization: {...payload, id: payload._id}}
  },
  [DASH_LIKE_A_HOG.GET_SPECIALIZATION.FAILED]: (payload: any, state: any) => {
    return {...state, currentSpecializationStatus: status.error(payload)}
  },[DASH_LIKE_A_HOG.CREATE_SPECIALIZATION.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentSpecializationStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.CREATE_SPECIALIZATION.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentSpecializationStatus: status.loaded, currentSpecialization: {...payload, id: payload._id}}
  },
  [DASH_LIKE_A_HOG.CREATE_SPECIALIZATION.FAILED]: (payload: any, state: any) => {
    return {...state, currentSpecializationStatus: status.error(payload)}
  },[DASH_LIKE_A_HOG.UPDATE_SPECIALIZATION.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentSpecializationStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.UPDATE_SPECIALIZATION.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentSpecializationStatus: status.loaded, currentSpecialization: {...payload, id: payload._id}}
  },
  [DASH_LIKE_A_HOG.UPDATE_SPECIALIZATION.FAILED]: (payload: any, state: any) => {
    return {...state, currentSpecializationStatus: status.error(payload)}
  },[DASH_LIKE_A_HOG.DELETE_SPECIALIZATION.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentSpecializationStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.DELETE_SPECIALIZATION.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentSpecializationStatus: status.loaded, currentSpecialization: null, specializations: [...payload.map((value : any) => ({id: value._id, ...value}))]}
  },
  [DASH_LIKE_A_HOG.DELETE_SPECIALIZATION.FAILED]: (payload: any, state: any) => {
    return {...state, currentSpecializationStatus: status.error(payload)}
  },
  [DASH_LIKE_A_HOG.CURRENT_SPECIALIZATION.RESET]: (_: any, state: any) => {
    return {...state, currentSpecializationStatus: status.default, currentSpecialization: null}
  },



  [DASH_LIKE_A_HOG.GET_CURRENCIES.REQUESTED]: (_: any, state: any) => {
    return {...state, currenciesStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.GET_CURRENCIES.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currenciesStatus: status.loaded, currencies: [...payload.map((value : any) => ({id: value._id, ...value}))]}
  },
  [DASH_LIKE_A_HOG.GET_CURRENCIES.FAILED]: (payload: any, state: any) => {
    return {...state, currenciesStatus: status.error(payload)}
  },
  [DASH_LIKE_A_HOG.GET_CURRENCY.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentCurrencyStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.GET_CURRENCY.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentCurrencyStatus: status.loaded, currentCurrency: {...payload, id: payload._id}}
  },
  [DASH_LIKE_A_HOG.GET_CURRENCY.FAILED]: (payload: any, state: any) => {
    return {...state, currentCurrencyStatus: status.error(payload)}
  },[DASH_LIKE_A_HOG.CREATE_CURRENCY.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentCurrencyStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.CREATE_CURRENCY.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentCurrencyStatus: status.loaded, currentCurrency: {...payload, id: payload._id}}
  },
  [DASH_LIKE_A_HOG.CREATE_CURRENCY.FAILED]: (payload: any, state: any) => {
    return {...state, currentCurrencyStatus: status.error(payload)}
  },[DASH_LIKE_A_HOG.UPDATE_CURRENCY.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentCurrencyStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.UPDATE_CURRENCY.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentCurrencyStatus: status.loaded, currentCurrency: {...payload, id: payload._id}}
  },
  [DASH_LIKE_A_HOG.UPDATE_CURRENCY.FAILED]: (payload: any, state: any) => {
    return {...state, currentCurrencyStatus: status.error(payload)}
  },[DASH_LIKE_A_HOG.DELETE_CURRENCY.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentCurrencyStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.DELETE_CURRENCY.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentCurrencyStatus: status.loaded, currentCurrency: null, currencies: [...payload.map((value : any) => ({id: value._id, ...value}))]}
  },
  [DASH_LIKE_A_HOG.DELETE_CURRENCY.FAILED]: (payload: any, state: any) => {
    return {...state, currentCurrencyStatus: status.error(payload)}
  },
  [DASH_LIKE_A_HOG.CURRENT_CURRENCY.RESET]: (_: any, state: any) => {
    return {...state, currentCurrencyStatus: status.default, currentCurrency: null}
  },



  [DASH_LIKE_A_HOG.GET_TASKS.REQUESTED]: (_: any, state: any) => {
    return {...state, tasksStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.GET_TASKS.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, tasksStatus: status.loaded, tasks: [...payload.map((value : any) => ({id: value._id, ...value}))]}
  },
  [DASH_LIKE_A_HOG.GET_TASKS.FAILED]: (payload: any, state: any) => {
    return {...state, tasksStatus: status.error(payload)}
  },
  [DASH_LIKE_A_HOG.GET_TASK.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentTaskStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.GET_TASK.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentTaskStatus: status.loaded, currentTask: {...payload, id: payload._id}}
  },
  [DASH_LIKE_A_HOG.GET_TASK.FAILED]: (payload: any, state: any) => {
    return {...state, currentTaskStatus: status.error(payload)}
  },[DASH_LIKE_A_HOG.CREATE_TASK.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentTaskStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.CREATE_TASK.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentTaskStatus: status.loaded, currentTask: {...payload, id: payload._id}}
  },
  [DASH_LIKE_A_HOG.CREATE_TASK.FAILED]: (payload: any, state: any) => {
    return {...state, currentTaskStatus: status.error(payload)}
  },[DASH_LIKE_A_HOG.UPDATE_TASK.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentTaskStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.UPDATE_TASK.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentTaskStatus: status.loaded, currentTask: {...payload, id: payload._id}}
  },
  [DASH_LIKE_A_HOG.UPDATE_TASK.FAILED]: (payload: any, state: any) => {
    return {...state, currentTaskStatus: status.error(payload)}
  },[DASH_LIKE_A_HOG.DELETE_TASK.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentTaskStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.DELETE_TASK.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentTaskStatus: status.loaded, currentTask: null, tasks: [...payload.map((value : any) => ({id: value._id, ...value}))]}
  },
  [DASH_LIKE_A_HOG.DELETE_TASK.FAILED]: (payload: any, state: any) => {
    return {...state, currentTaskStatus: status.error(payload)}
  },
  [DASH_LIKE_A_HOG.CURRENT_TASK.RESET]: (_: any, state: any) => {
    return {...state, currentTaskStatus: status.default, currentTask: null}
  },


  [DASH_LIKE_A_HOG.GET_CONTRACTS.REQUESTED]: (_: any, state: any) => {
    return {...state, contractsStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.GET_CONTRACTS.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, contractsStatus: status.loaded, contracts: [...payload.map((value : any) => ({id: value._id, ...value}))]}
  },
  [DASH_LIKE_A_HOG.GET_CONTRACTS.FAILED]: (payload: any, state: any) => {
    return {...state, contractsStatus: status.error(payload)}
  },
  [DASH_LIKE_A_HOG.GET_CONTRACT.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentContractStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.GET_CONTRACT.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentContractStatus: status.loaded, currentContract: {...payload, id: payload._id}}
  },
  [DASH_LIKE_A_HOG.GET_CONTRACT.FAILED]: (payload: any, state: any) => {
    return {...state, currentContractStatus: status.error(payload)}
  },[DASH_LIKE_A_HOG.CREATE_CONTRACT.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentContractStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.CREATE_CONTRACT.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentContractStatus: status.loaded, currentContract: {...payload, id: payload._id}}
  },
  [DASH_LIKE_A_HOG.CREATE_CONTRACT.FAILED]: (payload: any, state: any) => {
    return {...state, currentContractStatus: status.error(payload)}
  },[DASH_LIKE_A_HOG.UPDATE_CONTRACT.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentContractStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.UPDATE_CONTRACT.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentContractStatus: status.loaded, currentContract: {...payload, id: payload._id}}
  },
  [DASH_LIKE_A_HOG.UPDATE_CONTRACT.FAILED]: (payload: any, state: any) => {
    return {...state, currentContractStatus: status.error(payload)}
  },[DASH_LIKE_A_HOG.DELETE_CONTRACT.REQUESTED]: (payload: any, state: any) => {
    return {...state, currentContractStatus: status.loading}
  },
  [DASH_LIKE_A_HOG.DELETE_CONTRACT.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, currentContractStatus: status.loaded, currentContract: null, contracts: [...payload.map((value : any) => ({id: value._id, ...value}))]}
  },
  [DASH_LIKE_A_HOG.DELETE_CONTRACT.FAILED]: (payload: any, state: any) => {
    return {...state, currentContractStatus: status.error(payload)}
  },
  [DASH_LIKE_A_HOG.CURRENT_CONTRACT.RESET]: (_: any, state: any) => {
    return {...state, currentContractStatus: status.default, currentContract: null}
  },
  [DASH_LIKE_A_HOG.GET_CONTRACTORS.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, contractors: [...payload.map((value : any) => ({id: value._id, ...value}))]}
  },
  [DASH_LIKE_A_HOG.GET_CUSTOMERS.SUCCEEDED]: (payload: any, state: any) => {
    return {...state, customers: [...payload.map((value : any) => ({id: value._id, ...value}))]}
  },
  [DASH_LIKE_A_HOG.GET_CONTRACTORS.RESET]: (_: any, state: any) => {
    return {...state, contractors: []}
  },
  [DASH_LIKE_A_HOG.GET_CUSTOMERS.RESET]: (_: any, state: any) => {
    return {...state, customers: []}
  },


}

export function DashLikeAHogReducer(state = DashLikeAHogInitialState, action: any) {
  return reducingFunction<DashLikeAHogState>(
    actionReducers,
    state,
    action,
  );
}


