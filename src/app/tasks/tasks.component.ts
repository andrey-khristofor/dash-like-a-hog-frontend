import {Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter, Output} from '@angular/core';
import {from} from "rxjs";
import {ITask} from "../types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnChanges {

  @Input() tasks: ITask[] = [];
  @Output() delete = new EventEmitter()

  displayedColumns = ['price', 'deadline', 'description', 'actions']


  constructor(private _router: Router) {
  }

  openEditor(task: ITask) {
    this._router.navigateByUrl(`task/${task.id}`);
  }

  createTask(){
    this._router.navigateByUrl(`task/0`);
  }

  onDelete(task: ITask) {
    this.delete.emit(task.id);
  }



  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
  }

}
