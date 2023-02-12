import { Component } from '@angular/core';
import {Customer} from '../../interfaces/customer';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import { NgForm } from '@angular/forms'
import {Router} from '@angular/router'
import {salesperson} from "../../interfaces/salesperson";
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  constructor(private http: HttpClient, private userService: UserService, private router: Router) {}
  id:number=0;
  myDDL:any;
  productId:number=0;
  firstName:string="";
  lastName:string="";
  address:string="";
  phone:string="";
  startDate:string="";
  ngOnInit() {
/*    this.userService.getAllCustomers()
      .subscribe((resp: Customer[]) => {
        this.myDDL=resp;
      });*/
    this.userService.getData()
      .subscribe(result => this.myDDL = result);
  }
  getSelected({retData}: { retData: any }) {
    this.id = retData.id;
    this.productId=retData.productId;
    this.firstName = retData.firstName;
    this.lastName = retData.lastName;
    this.address = retData.address;
    this.phone = retData.phone;
    this.startDate = retData.startDate;
  }
  Update(updateForm: NgForm): void {
    const retData = {
      "id": this.id,
      "productId": this.productId,
      "firstName": this.firstName,
      "lastName": this.lastName,
      "address": this.address,
      "phone": this.phone,
      "startDate": this.startDate
    };

    this.userService.updateCustomer({pBody: retData});

  }
  reloadPage() {
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }
}
