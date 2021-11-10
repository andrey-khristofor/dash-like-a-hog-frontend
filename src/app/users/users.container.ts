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
    <app-users-page
      [users]="$any(users$ | async)"
      (delete)="deleteUser($event)"
      >
    </app-users-page>
  `
})
export class UsersContainer implements OnInit, OnDestroy{
  users$: Observable<User[]>;


  constructor(
    private store: Store
  )
  {
    // @ts-ignore
    this.users$ = this.store.select(DashLikeAHogSelectors.users);

    this.store.dispatch(new DashLikeAHogActions.GetUsersRequest(''))
  }

  ngOnDestroy() {
  }
  ngOnInit() {
  }

  deleteUser(id: string) {
    this.store.dispatch(new DashLikeAHogActions.DeleteUserRequest(id));
  }
}
