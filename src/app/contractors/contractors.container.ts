import {Component, OnDestroy, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Contractor} from "../types";
import {Store} from "@ngrx/store";
import {DashLikeAHogSelectors} from "../Core/Store/dash-like-a-hog/selectors";
import {DashLikeAHogActions} from "../Core/Store/dash-like-a-hog/actions";
import {DashLikeAHogState} from "../Core/Store/dash-like-a-hog/reducers";


@Component({
  selector: 'app-contractors',
  template: `
    <app-contractors-page
      [contractors]="contractors$ | async"
      >
    </app-contractors-page>
  `
})
export class ContractorsContainer implements OnInit, OnDestroy{
  contractors$: Observable<Contractor[]>;


  constructor(
    private store: Store
  )
  {
    // @ts-ignore
    this.contractors$ = this.store.select(DashLikeAHogSelectors.contractors);

    this.store.dispatch(new DashLikeAHogActions.GetContractorsRequest(''))
  }

  ngOnDestroy() {
  }
  ngOnInit() {
  }
}
