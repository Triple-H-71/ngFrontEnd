import { Component } from '@angular/core';
import {salesperson} from '../../interfaces/salesperson';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-salesperson',
  templateUrl: './salesperson.component.html',
  styleUrls: ['./salesperson.component.css']
})
export class SalespersonComponent {
  constructor(private http: HttpClient, private userService: UserService) {}
  myDDL:any;
  id: number = 0;
  firstName: String = "";
  lastName: String = "";
  address: String = "";
  phone: String = "";
  startDate: String = "";
  termDate: String = "";
  manager: String = "";
  ngOnInit() {
    this.userService.getAllSalesPeople()
        .subscribe((resp: salesperson[]) => {
          this.myDDL=resp;
          //this.value=this.myDDL[0]
          //console.log(resp);
        });


  }
  getSelected({retData}: { retData: any }) {
    this.id = retData.id;
    this.firstName = retData.firstName;
    this.lastName = retData.lastName;
    this.address = retData.address;
    this.phone = retData.phone;
    this.startDate = retData.startDate;
    this.termDate = retData.terminationDate;
    this.manager = retData.manager;
  }
  Update(updateForm: NgForm): void {
    const retData = {
      "id": this.id ? this.id : 0,
      "firstName": this.firstName ? this.firstName : "",
      "lastName": this.lastName ? this.lastName : "",
      "address": this.address ? this.address : "",
      "phone": this.phone ? this.phone : "",
      "startDate": this.startDate ? this.startDate : "",
      "terminationDate": this.termDate ? this.termDate : "",
      "manager": this.manager ? this.manager : ""
    };
    this.userService.updateSalesPerson({pBody: retData});

  }
  reloadPage() {
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }
}
