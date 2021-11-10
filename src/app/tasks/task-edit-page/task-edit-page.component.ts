import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {DashLikeAHogSelectors} from "../../Core/Store/dash-like-a-hog/selectors";
import {DashLikeAHogActions} from "../../Core/Store/dash-like-a-hog/actions";
import {Observable} from "rxjs";
import {Specialization, ITask, Currency} from "../../types";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-task-edit-page',
  templateUrl: './task-edit-page.component.html',
  styleUrls: ['./task-edit-page.component.css']
})
export class TaskEditPageComponent implements OnInit, OnDestroy {
  task$: Observable<ITask>;
  specializationList$: Observable<Specialization[]>;
  currenciesList$: Observable<Currency[]>

  task: ITask | null = null;
  mode: 'Edit' | 'Create' = 'Edit';
  specializationList: Specialization[] = [];
  currenciesList: Currency[] = [];


  form: FormGroup = new FormGroup({
    Price: new FormControl(),
    CurrencyId: new FormControl(),
    Deadline: new FormControl(null),
    SpecializationId: new FormControl(),
    Description: new FormControl(),
    PhotoUrl: new FormControl()
  })
  constructor(
    private store: Store) {

    // @ts-ignore
    this.task$ = this.store.select(DashLikeAHogSelectors.task);
    this.task$.subscribe(task => {
      this.task = task;
      this.mode = task?.id ? 'Edit' : 'Create';
      task && this.form.patchValue({
        Price: task.price,
        CurrencyId: task.currencyId,
        Deadline: new Date(task.deadline),
        SpecializationId: task.specializationId,
        Description: task.description,
        PhotoUrl: task.photoUrl?.length ? task.photoUrl?.reduce((acc, curr) => `${acc};${curr}`) : ''
      })
    })
    // @ts-ignore
    this.specializationList$ = this.store.select(DashLikeAHogSelectors.specializations);
    this.specializationList$.subscribe(list => {
      this.specializationList = [...list];
    })
    this.store.dispatch(new DashLikeAHogActions.GetSpecializationsRequest(''));

    // @ts-ignore
    this.currenciesList$ = this.store.select(DashLikeAHogSelectors.currencies);
    this.currenciesList$.subscribe(list => {
      this.currenciesList = [...list];
    })
    this.store.dispatch(new DashLikeAHogActions.GetCurrenciesRequest(''));

    const id = location.href.split('/').pop();
    if (id !== '0'){
      this.mode = 'Edit';
      this.store.dispatch(new DashLikeAHogActions.GetTaskRequest(id))
    } else {
      this.task = {} as ITask;
      this.mode = 'Create'
    }

  }

  ngOnInit(): void {

  }

  save() {
    const a = {
      price: this.form.get('Price')?.value,
      currencyId: this.form.get('CurrencyId')?.value,
      deadline: this.form.get('Deadline')?.value.toString(),
      specializationId: this.form.get('SpecializationId')?.value,
      description: this.form.get('Description')?.value,
      photoUrl: [...this.form.get('PhotoUrl')?.value.split(';')]
    }
    if(this.mode === 'Create'){
      this.store.dispatch(new DashLikeAHogActions.CreateTaskRequest(a))
    } else {
      this.store.dispatch(new DashLikeAHogActions.UpdateTaskRequest({...this.task, ...a }));
    }
  }

  ngOnDestroy() {
    this.store.dispatch(new DashLikeAHogActions.ResetCurrentTask(''));
  }
  public get isSaveEnabled () {
    return this.form.valid && this.form.get('Price')?.value && this.form.get('CurrencyId')?.value && this.form.get('Deadline')?.value && this.form.get('SpecializationId')?.value&& this.form.get('Description')?.value;
  }

}
