import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {DashLikeAHogSelectors} from "../../Core/Store/dash-like-a-hog/selectors";
import {DashLikeAHogActions} from "../../Core/Store/dash-like-a-hog/actions";
import {Observable} from "rxjs";
import {Specialization, User} from "../../types";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-specialization-edit-page',
  templateUrl: './specialization-edit-page.component.html',
  styleUrls: ['./specialization-edit-page.component.css']
})
export class SpecializationEditPageComponent implements OnInit, OnDestroy {
  specialization$: Observable<Specialization>;

  specialization: Specialization | null = null;
  mode: 'Edit' | 'Create' = 'Edit';

  form: FormGroup = new FormGroup({
    Name: new FormControl(),
    Popularity: new FormControl(),
  })
  constructor(
    private store: Store) {

    // @ts-ignore
    this.specialization$ = this.store.select(DashLikeAHogSelectors.specialization);
    this.specialization$.subscribe(specialization => {
      this.specialization = specialization;

      this.mode = specialization?.id ? 'Edit' : 'Create';
      specialization && this.form.patchValue({
        Name: specialization.name,
        Popularity: specialization.popularity
      })
    })

    const id = location.href.split('/').pop();
    if (id !== '0'){
      this.mode = 'Edit';
      this.store.dispatch(new DashLikeAHogActions.GetSpecializationRequest(id))
    } else {
      this.specialization = {} as Specialization;
      this.mode = 'Create'
    }

  }

  ngOnInit(): void {

  }

  save() {
    const a = {
      name: this.form.get('Name')?.value,
      popularity: this.form.get('Popularity')?.value
    }
    if(this.mode === 'Create'){
      this.store.dispatch(new DashLikeAHogActions.CreateSpecializationRequest(a))
    } else {
      this.store.dispatch(new DashLikeAHogActions.UpdateSpecializationRequest({...this.specialization, ...a }));
    }
  }

  ngOnDestroy() {
    this.store.dispatch(new DashLikeAHogActions.ResetCurrentSpecialization(''));
  }

  public get isSaveEnabled () {
    return this.form.valid && this.form.get('Name')?.value && this.form.get('Popularity')?.value;
  }

}
