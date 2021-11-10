import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {DashLikeAHogState} from "./reducers";
import {Store} from "@ngrx/store";
import {DASH_LIKE_A_HOG} from "./constants";
import {switchMap, map, catchError, concatMap, pluck} from "rxjs/operators";
import {EMPTY, from} from "rxjs";
import {User} from "../../../types";
import {DashLikeAHogActions} from "./actions";
import {AppState} from "../root-reducer";

@Injectable()
export class DashLikeAHogEffects {
  @Effect() getUsers$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.GetUsersRequest>(DASH_LIKE_A_HOG.GET_USERS.REQUESTED),
    switchMap(() => {
      return from(fetch('https://dash-like-a-hog-be.herokuapp.com/api/users/').then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.GetUsersSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.GetUsersFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() getUser$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.GetUserRequest>(DASH_LIKE_A_HOG.GET_USER.REQUESTED),
    pluck('payload'),
    switchMap((id) => {
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/users/${id}`).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.GetUserSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.GetUserFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() createUser$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.CreateUserRequest>(DASH_LIKE_A_HOG.CREATE_USER.REQUESTED),
    pluck('payload'),
    switchMap((user) => {
      const request = {
        ...user,
        roles: ['User']
      }
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/users`, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.CreateUserSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.CreateUserFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() updateUser$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.UpdateUserRequest>(DASH_LIKE_A_HOG.UPDATE_USER.REQUESTED),
    pluck('payload'),
    switchMap((user) => {
      const request = {
        ...user,
        id: user.id
      }
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/users`, {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.UpdateUserSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.UpdateUserFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() deleteUser$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.DeleteUserRequest>(DASH_LIKE_A_HOG.DELETE_USER.REQUESTED),
    pluck('payload'),
    switchMap((id) => {
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/users/${id}`,{
        method: 'DELETE'
      }).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.DeleteUserSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.DeleteUserFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() getSpecializations$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.GetSpecializationsRequest>(DASH_LIKE_A_HOG.GET_SPECIALIZATIONS.REQUESTED),
    switchMap(() => {
      return from(fetch('https://dash-like-a-hog-be.herokuapp.com/api/specializations/').then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.GetSpecializationsSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.GetSpecializationsFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() getSpecialization$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.GetSpecializationRequest>(DASH_LIKE_A_HOG.GET_SPECIALIZATION.REQUESTED),
    pluck('payload'),
    switchMap((id) => {
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/specializations/${id}`).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.GetSpecializationSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.GetSpecializationFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() createSpecialization$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.CreateSpecializationRequest>(DASH_LIKE_A_HOG.CREATE_SPECIALIZATION.REQUESTED),
    pluck('payload'),
    switchMap((specialization) => {
      const request = {
        ...specialization
      }
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/specializations`, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.CreateSpecializationSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.CreateSpecializationFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() updateSpecialization$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.UpdateSpecializationRequest>(DASH_LIKE_A_HOG.UPDATE_SPECIALIZATION.REQUESTED),
    pluck('payload'),
    switchMap((specialization) => {
      const request = {
        ...specialization
      }
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/specializations`, {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.UpdateSpecializationSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.UpdateSpecializationFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() deleteSpecialization$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.DeleteSpecializationRequest>(DASH_LIKE_A_HOG.DELETE_SPECIALIZATION.REQUESTED),
    pluck('payload'),
    switchMap((id) => {
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/specializations/${id}`,{
        method: 'DELETE'
      }).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.DeleteSpecializationSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.DeleteSpecializationFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() getCurrencies$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.GetCurrenciesRequest>(DASH_LIKE_A_HOG.GET_CURRENCIES.REQUESTED),
    switchMap(() => {
      return from(fetch('https://dash-like-a-hog-be.herokuapp.com/api/currencies/').then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.GetCurrenciesSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.GetCurrenciesFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() getCurrency$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.GetCurrencyRequest>(DASH_LIKE_A_HOG.GET_CURRENCY.REQUESTED),
    pluck('payload'),
    switchMap((id) => {
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/currencies/${id}`).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.GetCurrencySucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.GetCurrencyFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() createCurrency$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.CreateCurrencyRequest>(DASH_LIKE_A_HOG.CREATE_CURRENCY.REQUESTED),
    pluck('payload'),
    switchMap((currency) => {
      const request = {
        ...currency
      }
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/currencies`, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.CreateCurrencySucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.CreateCurrencyFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() updateCurrency$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.UpdateCurrencyRequest>(DASH_LIKE_A_HOG.UPDATE_CURRENCY.REQUESTED),
    pluck('payload'),
    switchMap((currency) => {
      const request = {
        ...currency
      }
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/currencies`, {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.UpdateCurrencySucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.UpdateCurrencyFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() deleteCurrency$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.DeleteCurrencyRequest>(DASH_LIKE_A_HOG.DELETE_CURRENCY.REQUESTED),
    pluck('payload'),
    switchMap((id) => {
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/currencies/${id}`,{
        method: 'DELETE'
      }).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.DeleteCurrencySucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.DeleteCurrencyFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() getTasks$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.GetTasksRequest>(DASH_LIKE_A_HOG.GET_TASKS.REQUESTED),
    switchMap(() => {
      return from(fetch('https://dash-like-a-hog-be.herokuapp.com/api/tasks/').then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.GetTasksSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.GetTasksFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() getTask$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.GetTaskRequest>(DASH_LIKE_A_HOG.GET_TASK.REQUESTED),
    pluck('payload'),
    switchMap((id) => {
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/tasks/${id}`).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.GetTaskSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.GetTaskFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() createTask$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.CreateTaskRequest>(DASH_LIKE_A_HOG.CREATE_TASK.REQUESTED),
    pluck('payload'),
    switchMap((task) => {
      const request = {
        ...task
      }
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/tasks`, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.CreateTaskSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.CreateTaskFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() updateTask$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.UpdateTaskRequest>(DASH_LIKE_A_HOG.UPDATE_TASK.REQUESTED),
    pluck('payload'),
    switchMap((task) => {
      const request = {
        ...task
      }
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/tasks`, {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.UpdateTaskSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.UpdateTaskFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() deleteTask$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.DeleteTaskRequest>(DASH_LIKE_A_HOG.DELETE_TASK.REQUESTED),
    pluck('payload'),
    switchMap((id) => {
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/tasks/${id}`,{
        method: 'DELETE'
      }).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.DeleteTaskSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.DeleteTaskFailed(err.error));
          return EMPTY;
        })
      );
    })
  );




  @Effect() getContracts$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.GetContractsRequest>(DASH_LIKE_A_HOG.GET_CONTRACTS.REQUESTED),
    switchMap(() => {
      return from(fetch('https://dash-like-a-hog-be.herokuapp.com/api/contracts/').then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.GetContractsSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.GetContractsFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() getContract$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.GetContractRequest>(DASH_LIKE_A_HOG.GET_CONTRACT.REQUESTED),
    pluck('payload'),
    switchMap((id) => {
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/contracts/${id}`).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.GetContractSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.GetContractFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() createContract$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.CreateContractRequest>(DASH_LIKE_A_HOG.CREATE_CONTRACT.REQUESTED),
    pluck('payload'),
    switchMap((contract) => {
      const request = {
        ...contract
      }
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/contracts`, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.CreateContractSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.CreateContractFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() updateContract$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.UpdateContractRequest>(DASH_LIKE_A_HOG.UPDATE_CONTRACT.REQUESTED),
    pluck('payload'),
    switchMap((contract) => {
      const request = {
        ...contract
      }
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/contracts`, {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.UpdateContractSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.UpdateContractFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() deleteContract$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.DeleteContractRequest>(DASH_LIKE_A_HOG.DELETE_CONTRACT.REQUESTED),
    pluck('payload'),
    switchMap((id) => {
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/contracts/${id}`,{
        method: 'DELETE'
      }).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.DeleteContractSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.DeleteContractFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() getCustomers$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.GetCustomersRequest>(DASH_LIKE_A_HOG.GET_CUSTOMERS.REQUESTED),
    pluck('payload'),
    switchMap((value) => {
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/users/filter/${value}`).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.GetCustomersSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.GetCustomersFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  @Effect() getContractors$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.GetContractorsRequest>(DASH_LIKE_A_HOG.GET_CONTRACTORS.REQUESTED),
    pluck('payload'),
    switchMap((value) => {
      return from(fetch(`https://dash-like-a-hog-be.herokuapp.com/api/users/filter/${value}`).then(response => response.json())).pipe(
        map((response: any) => {
          return new DashLikeAHogActions.GetContractorsSucceeded(response)}),
        catchError(err => {
          this.store.dispatch(new DashLikeAHogActions.GetContractorsFailed(err.error));
          return EMPTY;
        })
      );
    })
  );

  constructor(private actions$: Actions,
              private store: Store<AppState>,) {

  }

}
