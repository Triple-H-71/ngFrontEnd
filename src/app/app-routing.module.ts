import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SalespersonComponent } from './components/salesperson/salesperson.component';
import {ProductComponent} from "./components/product/product.component";
import {SaleComponent} from "./components/sale/sale.component";
import {CustomerComponent} from "./components/customer/customer.component";

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'salesperson', component: SalespersonComponent },
  { path: 'product', component: ProductComponent },
  { path: 'sale', component: SaleComponent },
  { path: 'customer', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
