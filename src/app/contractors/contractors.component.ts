import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {from} from "rxjs";
import {Contractor} from "../types";

@Component({
  selector: 'app-contractors-page',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.scss']
})
export class ContractorsComponent implements OnInit, OnChanges {

  @Input() contractors: Contractor[] | null = null;

  constructor() {
  }


  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
  }

}
