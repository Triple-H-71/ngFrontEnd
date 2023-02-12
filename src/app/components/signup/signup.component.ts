import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private http: HttpClient, private userService: UserService) {}
  myDDL:any;
  value:any;
  gTestValue:any;
  ngOnInit() {
    this.userService.getUsers()
      .subscribe((resp: User[]) => {
        this.myDDL=resp;
        this.value=this.myDDL[0]
        //console.log(resp);
      });
  }
  // DROP DOWN LIST
  Register(signupForm: NgForm): void {
    this.gTestValue=signupForm.value.ddlName.name;
    console.log(signupForm.value.ddlName.name);
  }
}
