import { Component } from '@angular/core';
import {Product} from '../../interfaces/product';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private http: HttpClient, private userService: UserService) {}
  myDDL:any;
  id:number=0;
  name:string="";
  manufacturer:string="";
  style:string="";
  purchasePrice:string="";
  qtyOnHand:number=0;
  commissionPercentage:string="";
  ngOnInit() {
    this.userService.getAllProducts()
      .subscribe((resp: Product[]) => {
        this.myDDL=resp;
      });
  }
  getSelected({retData}: { retData: any }) {
    this.id=retData.id;
    this.name=retData.name;
    this.manufacturer=retData.manufacturer;
    this.style=retData.style;
    this.purchasePrice=retData.purchasePrice;
    this.qtyOnHand=retData.qtyOnHand;
    this.commissionPercentage=retData.commissionPercentage;
  }
  Update(updateForm: NgForm): void {
    const retData = {
      "id": this.id ? this.id : 0,
      "name": this.name ? this.name : "",
      "manufacturer": this.manufacturer ? this.manufacturer : "",
      "style": this.style  ? this.style : "",
      "purchasePrice": this.purchasePrice ? this.purchasePrice : "",
      "qtyOnHand": this.qtyOnHand ? this.qtyOnHand : "",
      "commissionPercentage": this.commissionPercentage ? this.commissionPercentage : ""
    };
    this.userService.updateProduct({pBody: retData});

  }

  reloadPage() {
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }
}
