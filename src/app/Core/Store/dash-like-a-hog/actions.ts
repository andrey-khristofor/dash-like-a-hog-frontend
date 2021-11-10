import {Action} from "@ngrx/store";
import {DASH_LIKE_A_HOG} from "./constants";

export namespace DashLikeAHogActions {
  export class GetUsersRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_USERS.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class GetUsersSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_USERS.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class GetUsersFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_USERS.FAILED;

    constructor(public payload: any) {
    }
  }

  export class GetUserRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_USER.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class GetUserSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_USER.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class GetUserFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_USER.FAILED;

    constructor(public payload: any) {
    }
  }

  export class CreateUserRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.CREATE_USER.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class CreateUserSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.CREATE_USER.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class CreateUserFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.CREATE_USER.FAILED;

    constructor(public payload: any) {
    }
  }

  export class UpdateUserRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.UPDATE_USER.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class UpdateUserSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.UPDATE_USER.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class UpdateUserFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.UPDATE_USER.FAILED;

    constructor(public payload: any) {
    }
  }

  export class DeleteUserRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.DELETE_USER.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class DeleteUserSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.DELETE_USER.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class DeleteUserFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.DELETE_USER.FAILED;

    constructor(public payload: any) {
    }
  }

  export class ResetCurrentUser implements Action {
    readonly type = DASH_LIKE_A_HOG.CURRENT_USER.RESET;

    constructor(public payload: any) {
    }
  }

  export class GetSpecializationsRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_SPECIALIZATIONS.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class GetSpecializationsSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_SPECIALIZATIONS.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class GetSpecializationsFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_SPECIALIZATIONS.FAILED;

    constructor(public payload: any) {
    }
  }

  export class GetSpecializationRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_SPECIALIZATION.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class GetSpecializationSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_SPECIALIZATION.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class GetSpecializationFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_SPECIALIZATION.FAILED;

    constructor(public payload: any) {
    }
  }

  export class CreateSpecializationRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.CREATE_SPECIALIZATION.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class CreateSpecializationSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.CREATE_SPECIALIZATION.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class CreateSpecializationFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.CREATE_SPECIALIZATION.FAILED;

    constructor(public payload: any) {
    }
  }

  export class UpdateSpecializationRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.UPDATE_SPECIALIZATION.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class UpdateSpecializationSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.UPDATE_SPECIALIZATION.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class UpdateSpecializationFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.UPDATE_SPECIALIZATION.FAILED;

    constructor(public payload: any) {
    }
  }

  export class DeleteSpecializationRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.DELETE_SPECIALIZATION.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class DeleteSpecializationSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.DELETE_SPECIALIZATION.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class DeleteSpecializationFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.DELETE_SPECIALIZATION.FAILED;

    constructor(public payload: any) {
    }
  }

  export class ResetCurrentSpecialization implements Action {
    readonly type = DASH_LIKE_A_HOG.CURRENT_SPECIALIZATION.RESET;

    constructor(public payload: any) {
    }
  }

  export class GetCurrenciesRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CURRENCIES.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class GetCurrenciesSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CURRENCIES.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class GetCurrenciesFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CURRENCIES.FAILED;

    constructor(public payload: any) {
    }
  }

  export class GetCurrencyRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CURRENCY.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class GetCurrencySucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CURRENCY.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class GetCurrencyFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CURRENCY.FAILED;

    constructor(public payload: any) {
    }
  }

  export class CreateCurrencyRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.CREATE_CURRENCY.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class CreateCurrencySucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.CREATE_CURRENCY.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class CreateCurrencyFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.CREATE_CURRENCY.FAILED;

    constructor(public payload: any) {
    }
  }

  export class UpdateCurrencyRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.UPDATE_CURRENCY.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class UpdateCurrencySucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.UPDATE_CURRENCY.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class UpdateCurrencyFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.UPDATE_CURRENCY.FAILED;

    constructor(public payload: any) {
    }
  }

  export class DeleteCurrencyRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.DELETE_CURRENCY.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class DeleteCurrencySucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.DELETE_CURRENCY.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class DeleteCurrencyFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.DELETE_CURRENCY.FAILED;

    constructor(public payload: any) {
    }
  }

  export class ResetCurrentCurrency implements Action {
    readonly type = DASH_LIKE_A_HOG.CURRENT_CURRENCY.RESET;

    constructor(public payload: any) {
    }
  }

  export class GetTasksRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_TASKS.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class GetTasksSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_TASKS.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class GetTasksFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_TASKS.FAILED;

    constructor(public payload: any) {
    }
  }

  export class GetTaskRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_TASK.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class GetTaskSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_TASK.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class GetTaskFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_TASK.FAILED;

    constructor(public payload: any) {
    }
  }

  export class CreateTaskRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.CREATE_TASK.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class CreateTaskSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.CREATE_TASK.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class CreateTaskFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.CREATE_TASK.FAILED;

    constructor(public payload: any) {
    }
  }

  export class UpdateTaskRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.UPDATE_TASK.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class UpdateTaskSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.UPDATE_TASK.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class UpdateTaskFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.UPDATE_TASK.FAILED;

    constructor(public payload: any) {
    }
  }

  export class DeleteTaskRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.DELETE_TASK.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class DeleteTaskSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.DELETE_TASK.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class DeleteTaskFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.DELETE_TASK.FAILED;

    constructor(public payload: any) {
    }
  }

  export class ResetCurrentTask implements Action {
    readonly type = DASH_LIKE_A_HOG.CURRENT_TASK.RESET;

    constructor(public payload: any) {
    }
  }

  export class GetContractsRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CONTRACTS.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class GetContractsSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CONTRACTS.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class GetContractsFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CONTRACTS.FAILED;

    constructor(public payload: any) {
    }
  }

  export class GetContractRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CONTRACT.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class GetContractSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CONTRACT.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class GetContractFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CONTRACT.FAILED;

    constructor(public payload: any) {
    }
  }

  export class CreateContractRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.CREATE_CONTRACT.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class CreateContractSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.CREATE_CONTRACT.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class CreateContractFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.CREATE_CONTRACT.FAILED;

    constructor(public payload: any) {
    }
  }

  export class UpdateContractRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.UPDATE_CONTRACT.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class UpdateContractSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.UPDATE_CONTRACT.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class UpdateContractFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.UPDATE_CONTRACT.FAILED;

    constructor(public payload: any) {
    }
  }

  export class DeleteContractRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.DELETE_CONTRACT.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class DeleteContractSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.DELETE_CONTRACT.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class DeleteContractFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.DELETE_CONTRACT.FAILED;

    constructor(public payload: any) {
    }
  }

  export class ResetCurrentContract implements Action {
    readonly type = DASH_LIKE_A_HOG.CURRENT_CONTRACT.RESET;

    constructor(public payload: any) {
    }
  }

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

  export class ResetContractors implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CONTRACTORS.RESET;

    constructor(public payload: any) {
    }
  }

  export class GetCustomersRequest implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CUSTOMERS.REQUESTED;

    constructor(public payload: any) {
    }
  }

  export class GetCustomersSucceeded implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CUSTOMERS.SUCCEEDED;

    constructor(public payload: any) {
    }
  }

  export class GetCustomersFailed implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CUSTOMERS.FAILED;

    constructor(public payload: any) {
    }
  }

  export class ResetCustomers implements Action {
    readonly type = DASH_LIKE_A_HOG.GET_CUSTOMERS.RESET;

    constructor(public payload: any) {
    }
  }
}
