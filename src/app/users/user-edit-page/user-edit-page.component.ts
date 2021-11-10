import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {DashLikeAHogSelectors} from "../../Core/Store/dash-like-a-hog/selectors";
import {DashLikeAHogActions} from "../../Core/Store/dash-like-a-hog/actions";
import {Observable} from "rxjs";
import {Specialization, User} from "../../types";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']
})
export class UserEditPageComponent implements OnInit, OnDestroy {
  user$: Observable<User>;
  specializationList$: Observable<Specialization[]>;

  user: User | null = null;
  mode: 'Edit' | 'Create' = 'Edit';
  specializationList: Specialization[] = [];

  form: FormGroup = new FormGroup({
    Name: new FormControl(),
    PhoneNumber: new FormControl(),
    Email: new FormControl('', Validators.email),
    SpecializationIds: new FormControl()
  })
  constructor(
    private store: Store) {

    // @ts-ignore
    this.user$ = this.store.select(DashLikeAHogSelectors.user);
    this.user$.subscribe(user => {

      this.mode = user?.id ? 'Edit' : 'Create';
      this.user = user;
      user && this.form.patchValue({
        Name: user.name,
        PhoneNumber: user.phoneNumber,
        Email: user.email,
        SpecializationIds: [...user.specializationIds]
      })
    })
    // @ts-ignore
    this.specializationList$ = this.store.select(DashLikeAHogSelectors.specializations);
    this.specializationList$.subscribe(list => {
      this.specializationList = [...list];
    })
    this.store.dispatch(new DashLikeAHogActions.GetSpecializationsRequest(''));

    const id = location.href.split('/').pop();
    if (id !== '0'){
      this.mode = 'Edit';
      this.store.dispatch(new DashLikeAHogActions.GetUserRequest(id))
    } else {
      this.user = {} as User;
      this.mode = 'Create'
    }

  }

  ngOnInit(): void {

  }

  save() {
    const a = {
      name: this.form.get('Name')?.value,
      email: this.form.get('Email')?.value,
      phoneNumber: this.form.get('PhoneNumber')?.value,
      specializationIds: [...this.form.get('SpecializationIds')?.value]
    }
    if(this.mode === 'Create'){
      this.store.dispatch(new DashLikeAHogActions.CreateUserRequest(a))
    } else {
      this.store.dispatch(new DashLikeAHogActions.UpdateUserRequest({...this.user, ...a }));
    }
  }

  ngOnDestroy() {
    this.store.dispatch(new DashLikeAHogActions.ResetCurrentUser(''));
  }

  public get isSaveEnabled () {
    return this.form.valid && this.form.get('Name')?.value && this.form.get('Email')?.value && this.form.get('PhoneNumber')?.value;
  }

}
