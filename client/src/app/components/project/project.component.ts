import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  onGoing: any[];
  finished: any[];
  notFinished: any[];
  constructor(
    private router: Router,
    private projectSerivce: ProjectService
  ) { }

  ngOnInit(): void {
    //fetch ongoing
    this.projectSerivce.ongoingProjects()
      .subscribe(res => {
        this.onGoing = res;
      });
    
    //fetch finished
    this.projectSerivce. finishedProjects()
      .subscribe(res => {
        this.finished = res;
      });
    
    //fetch notfinished
    this.projectSerivce.unfinishedProjects()
      .subscribe(res => {
        this.notFinished = res;
      });
  }
  

}
