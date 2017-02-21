import {Component, OnInit} from '@angular/core';
import {AppSingletonService} from "../app.singletonservice";
import {Task} from '../task';
import {Router} from "@angular/router";

@Component ({
  moduleId: module.id,
  selector: 'show',
  templateUrl: './showtask.component.html',
  styleUrls: ['']
})

export class ShowTaskComponent implements OnInit {
  myTasks: Task[];

  constructor(private service: AppSingletonService, private router: Router) {
  }

  ngOnInit() {
    this.myTasks = this.service.tasks;
    this.service.showTask().subscribe(data => {
      this.myTasks = data;
    }, error => {
      alert(error)
    });
  }

  deleteTask(id: string) {
    this.service.delete(id).subscribe((data:any) => {
      alert("Deleted Successfully!")
    }, error => {
      alert(error)
    });
    location.reload();
  }
    /*deleteTask(i: number) {
     this.service.delete(i)
     }*/


    /*goToEdit(i: number) {
     this.router.navigate(['edit',i])
     }*/
}
