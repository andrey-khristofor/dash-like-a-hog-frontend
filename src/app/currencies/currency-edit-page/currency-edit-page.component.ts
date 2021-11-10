import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {DashLikeAHogSelectors} from "../../Core/Store/dash-like-a-hog/selectors";
import {DashLikeAHogActions} from "../../Core/Store/dash-like-a-hog/actions";
import {Observable} from "rxjs";
import {Specialization, Currency, LoadingStatus} from "../../types";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-currency-edit-page',
  templateUrl: './currency-edit-page.component.html',
  styleUrls: ['./currency-edit-page.component.css']
})
export class CurrencyEditPageComponent implements OnInit, OnDestroy {
  currency$: Observable<Currency>;

  currency: Currency | null = null;
  mode: 'Edit' | 'Create' = 'Edit';

  form: FormGroup = new FormGroup({
    Name: new FormControl(),
    CurrencyToUsd: new FormControl()
  })
  constructor(
    private store: Store) {

    // @ts-ignore
    this.currency$ = this.store.select(DashLikeAHogSelectors.currency);
    this.currency$.subscribe(currency => {
      console.log(currency)
      this.currency = currency;
      this.mode = currency?.id ? 'Edit' : 'Create';
      currency && this.form.patchValue({
        Name: currency.name,
        CurrencyToUsd: currency.currencyToUsd
      })
    })

    const id = location.href.split('/').pop();
    if (id !== '0'){
      this.mode = 'Edit';
      this.store.dispatch(new DashLikeAHogActions.GetCurrencyRequest(id))
    } else {
      this.currency = {} as Currency;
      this.mode = 'Create'
    }

  }

  ngOnInit(): void {

  }

  save() {
    const a = {
      name: this.form.get('Name')?.value,
      currencyToUsd: this.form.get('CurrencyToUsd')?.value
    }
    if(this.mode === 'Create'){
      this.store.dispatch(new DashLikeAHogActions.CreateCurrencyRequest(a))

    } else {
      this.store.dispatch(new DashLikeAHogActions.UpdateCurrencyRequest({...this.currency, ...a }));
    }
  }

  ngOnDestroy() {
    this.store.dispatch(new DashLikeAHogActions.ResetCurrentCurrency(''));
  }

  public get isSaveEnabled () {
    return this.form.valid && this.form.get('Name')?.value && this.form.get('CurrencyToUsd')?.value;
  }

}
