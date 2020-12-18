import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  formatDate(date) {

    const newDate = new Date(date);
    
    var year = newDate.getFullYear();
    var month = (newDate.getMonth()+1)+"";
    month = month.length < 2 ? "0" + month : month;
    var formatedDate = newDate.getDate()+"";
    formatedDate = formatedDate.length < 2 ? "0"+formatedDate : formatedDate;

    var dateString = year + '-' + month + '-' + formatedDate;

    return dateString;
  }
}
