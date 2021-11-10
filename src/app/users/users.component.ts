import {Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter, Output} from '@angular/core';
import {from} from "rxjs";
import {User} from "../types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users-page',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnChanges {

  @Input() users: User[] = [];
  @Output() delete = new EventEmitter()

  displayedColumns = ['name', 'phone', 'rating', 'actions']


  constructor(private _router: Router) {
  }

  openEditor(user: User) {
    this._router.navigateByUrl(`user/${user.id}`);
  }

  createUser(){
    this._router.navigateByUrl(`user/0`);
  }

  onDelete(user: User) {
    this.delete.emit(user.id);
  }



  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
  }

}
