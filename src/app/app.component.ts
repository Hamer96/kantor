import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit  } from '@angular/core';
import {Rate} from './rate';
import { HTTPService } from './serwisy/http.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],

})
export class AppComponent implements OnInit {
 public rate: Rate[] = [];
constructor(private httpCurrency: HTTPService){}
  // tslint:disable-next-line: typedef
  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.httpCurrency.getCurrency().subscribe(
      data => this.rate = data);


  }

}



