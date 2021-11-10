import {Component, OnDestroy, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../types";
import {Store} from "@ngrx/store";
import {DashLikeAHogSelectors} from "../Core/Store/dash-like-a-hog/selectors";
import {DashLikeAHogActions} from "../Core/Store/dash-like-a-hog/actions";
import {DashLikeAHogState} from "../Core/Store/dash-like-a-hog/reducers";


@Component({
  selector: 'app-users',
  template: `
    <app-specializations-page
      [specializations]="$any(specializations$ | async)"
      (delete)="deleteSpecialization($event)"
      >
    </app-specializations-page>
  `
})
export class SpecializationsContainer implements OnInit, OnDestroy{
  specializations$: Observable<User[]>;


  constructor(
    private store: Store
  )
  {
    // @ts-ignore
    this.specializations$ = this.store.select(DashLikeAHogSelectors.specializations);

    this.store.dispatch(new DashLikeAHogActions.GetSpecializationsRequest(''))
  }

  ngOnDestroy() {
  }
  ngOnInit() {
  }

  deleteSpecialization(id: string) {
    this.store.dispatch(new DashLikeAHogActions.DeleteSpecializationRequest(id));
  }
}
