import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {DashLikeAHogState} from "./reducers";
import {Store} from "@ngrx/store";
import {DASH_LIKE_A_HOG} from "./constants";
import {switchMap, map, catchError, concatMap} from "rxjs/operators";
import {EMPTY, from} from "rxjs";
import {Contractor} from "../../../types";
import {DashLikeAHogActions} from "./actions";
import {AppState} from "../root-reducer";

@Injectable()
export class DashLikeAHogEffects {
  @Effect() getContractors$ = this.actions$.pipe(
    ofType<DashLikeAHogActions.GetContractorsRequest>(DASH_LIKE_A_HOG.GET_CONTRACTORS.REQUESTED),
    switchMap(() => {
      return from(fetch('https://dash-like-a-hog-be.herokuapp.com/api/contractors/').then(response => response.json())).pipe(
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
