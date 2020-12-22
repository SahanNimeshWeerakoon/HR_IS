import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-on-going-projects',
  templateUrl: './on-going-projects.component.html',
  styleUrls: ['./on-going-projects.component.scss']
})
export class OnGoingProjectsComponent implements OnInit {

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.projectService.ongoingProjects()
      .subscribe(resProj => {
        console.log(resProj);
      })
  }

}
