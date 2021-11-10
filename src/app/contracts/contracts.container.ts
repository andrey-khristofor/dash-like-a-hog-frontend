import {Component, OnDestroy, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Contract} from "../types";
import {Store} from "@ngrx/store";
import {DashLikeAHogSelectors} from "../Core/Store/dash-like-a-hog/selectors";
import {DashLikeAHogActions} from "../Core/Store/dash-like-a-hog/actions";
import {DashLikeAHogState} from "../Core/Store/dash-like-a-hog/reducers";


@Component({
  selector: 'app-contracts',
  template: `
    <app-contracts-page
      [contracts]="$any(contracts$ | async)"
      (delete)="deleteContract($event)"
      >
    </app-contracts-page>
  `
})
export class ContractsContainer implements OnInit, OnDestroy{
  contracts$: Observable<Contract[]>;


  constructor(
    private store: Store
  )
  {
    // @ts-ignore
    this.contracts$ = this.store.select(DashLikeAHogSelectors.contracts);

    this.store.dispatch(new DashLikeAHogActions.GetContractsRequest(''))
  }

  ngOnDestroy() {
  }
  ngOnInit() {
  }

  deleteContract(id: string) {
    this.store.dispatch(new DashLikeAHogActions.DeleteContractRequest(id));
  }
}
