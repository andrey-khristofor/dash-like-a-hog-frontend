import {Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter, Output} from '@angular/core';
import {from} from "rxjs";
import {Contract} from "../types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contracts-page',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit, OnChanges {

  @Input() contracts: Contract[] = [];
  @Output() delete = new EventEmitter()

  displayedColumns = ['id', 'actions']


  constructor(private _router: Router) {
  }

  openEditor(contract: Contract) {
    this._router.navigateByUrl(`contract/${contract.id}`);
  }

  createContract(){
    this._router.navigateByUrl(`contract/0`);
  }

  onDelete(contract: Contract) {
    this.delete.emit(contract.id);
  }



  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
  }

}
