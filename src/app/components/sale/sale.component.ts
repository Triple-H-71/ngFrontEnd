import { Component } from '@angular/core';
import {Sale} from '../../interfaces/sale';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import { NgForm } from '@angular/forms'
import {salesperson} from "../../interfaces/salesperson";
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent {
  constructor(private http: HttpClient, private userService: UserService) {}
  myDDL:any;
  id:number=0;
  productID:number=0;
  salesPersonID:number=0;
  customerID:number=0;
  salesDate:string="";
  ngOnInit() {
    this.userService.getAllSales()
      .subscribe((resp: Sale[]) => {
        this.myDDL=resp;
      });


  }
  getSelected({retData}: { retData: any }) {
    /*this.id=retData.id;
    this.productID=retData.productId;
    this.salesPersonID=retData.salesPersonId;
    this.customerID=retData.customerId;
    this.salesDate=retData.salesDate;*/
  }
  CreateSale(updateForm: NgForm): void {
    /*const myBody = {
      "id": 0,
      "productId": 0,
      "salesPersonId": 0,
      "customerId": 0,
      "salesDate": "2023-02-12T20:41:40.677Z"
    }*/
    const retData = {
      "id": this.id ? Number(this.id) : 0,
      "productId": this.productID ? Number(this.productID) : 0,
      "salesPersonId": this.salesPersonID ? Number(this.salesPersonID) : 0,
      "customerId": this.customerID ? Number(this.customerID) : 0,
      "salesDate": this.salesDate ? this.salesDate : ""
    };
    this.userService.createSale({pBody: retData });

  }

  reloadPage() {
    setTimeout(()=>{
      //window.location.reload();
      window.location.href = "http://localhost:4200/sale"
    }, 100);
  }
}
