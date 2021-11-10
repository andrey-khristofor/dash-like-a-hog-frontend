import {Component, OnDestroy, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Currency} from "../types";
import {Store} from "@ngrx/store";
import {DashLikeAHogSelectors} from "../Core/Store/dash-like-a-hog/selectors";
import {DashLikeAHogActions} from "../Core/Store/dash-like-a-hog/actions";
import {DashLikeAHogState} from "../Core/Store/dash-like-a-hog/reducers";


@Component({
  selector: 'app-users',
  template: `
    <app-currencies-page
      [currencies]="$any(currencies$ | async)"
      (delete)="deleteCurrency($event)"
      >
    </app-currencies-page>
  `
})
export class CurrenciesContainer implements OnInit, OnDestroy{
  currencies$: Observable<Currency[]>;


  constructor(
    private store: Store
  )
  {
    // @ts-ignore
    this.currencies$ = this.store.select(DashLikeAHogSelectors.currencies);

    this.store.dispatch(new DashLikeAHogActions.GetCurrenciesRequest(''))
  }

  ngOnDestroy() {
  }
  ngOnInit() {
  }

  deleteCurrency(id: string) {
    this.store.dispatch(new DashLikeAHogActions.DeleteCurrencyRequest(id));
  }
}
