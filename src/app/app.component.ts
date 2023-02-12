import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  //constructor(private http: HttpClient, private userService: UserService) {}
  constructor() {}
  title = "Hunter Hoyt's";

  ngOnInit() { }

}
