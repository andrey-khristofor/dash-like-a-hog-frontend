import {Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter, Output} from '@angular/core';
import {from} from "rxjs";
import {Specialization, User} from "../types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-specializations-page',
  templateUrl: './specializations.component.html',
  styleUrls: ['./specializations.component.scss']
})
export class SpecializationsComponent implements OnInit, OnChanges {

  @Input() specializations: Specialization[] = [];
  @Output() delete = new EventEmitter()

  displayedColumns = ['name', 'popularity', 'actions']


  constructor(private _router: Router) {
  }

  openEditor(specialization: Specialization) {
    this._router.navigateByUrl(`specialization/${specialization.id}`);
  }

  createSpecialization(){
    this._router.navigateByUrl(`specialization/0`);
  }

  onDelete(specialization: Specialization) {
    this.delete.emit(specialization.id);
  }



  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
  }

}
