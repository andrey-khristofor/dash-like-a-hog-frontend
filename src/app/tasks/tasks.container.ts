import {Component, OnDestroy, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {ITask} from "../types";
import {Store} from "@ngrx/store";
import {DashLikeAHogSelectors} from "../Core/Store/dash-like-a-hog/selectors";
import {DashLikeAHogActions} from "../Core/Store/dash-like-a-hog/actions";
import {DashLikeAHogState} from "../Core/Store/dash-like-a-hog/reducers";


@Component({
  selector: 'app-tasks',
  template: `
    <app-tasks-page
      [tasks]="$any(tasks$ | async)"
      (delete)="deleteTask($event)"
      >
    </app-tasks-page>
  `
})
export class TasksContainer implements OnInit, OnDestroy{
  tasks$: Observable<ITask[]>;


  constructor(
    private store: Store
  )
  {
    // @ts-ignore
    this.tasks$ = this.store.select(DashLikeAHogSelectors.tasks);

    this.store.dispatch(new DashLikeAHogActions.GetTasksRequest(''))
  }

  ngOnDestroy() {
  }
  ngOnInit() {
  }

  deleteTask(id: string) {
    this.store.dispatch(new DashLikeAHogActions.DeleteTaskRequest(id));
  }
}
