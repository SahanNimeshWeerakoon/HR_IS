import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  message: any;  

  constructor(private _testService: TestService) { }

  ngOnInit(): void {
    this._testService.getHello()
      .subscribe((data:any) => {
        this.message = data.data;
        console.log(data);
      })
      
  }

}
