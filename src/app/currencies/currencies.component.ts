import {Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter, Output} from '@angular/core';
import {from} from "rxjs";
import {Currency} from "../types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-currencies-page',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit, OnChanges {

  @Input() currencies: Currency[] = [];
  @Output() delete = new EventEmitter()

  displayedColumns = ['name', 'currencyToUsd', 'actions']


  constructor(private _router: Router) {
  }

  openEditor(currency: Currency) {
    this._router.navigateByUrl(`currency/${currency.id}`);
  }

  createCurrency(){
    this._router.navigateByUrl(`currency/0`);
  }

  onDelete(currency: Currency) {
    this.delete.emit(currency.id);
  }



  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
  }

}
