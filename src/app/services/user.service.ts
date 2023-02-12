import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import {salesperson} from "../interfaces/salesperson";
import {Product} from "../interfaces/product";
import {Sale} from "../interfaces/sale";
import {Customer} from "../interfaces/customer";
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
//import {HttpParams} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  postId:any;
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getAllSalesPeople(): Observable<salesperson[]>{
    //return this.http.get<salesperson[]>('https://localhost:7185/SalesPeople');
    return this.http.get<salesperson[]>('https://pwebapp1-apim.azure-api.net/SalesPerson/SalesPerson');
  }
  getAllProducts(): Observable<Product[]>{
    //return this.http.get<salesperson[]>('https://localhost:7185/SalesPeople');
    return this.http.get<Product[]>('https://pwebapp1-apim.azure-api.net/Product/Product');
  }

  getAllSales(): Observable<Sale[]>{
    //return this.http.get<salesperson[]>('https://localhost:7185/SalesPeople');
    return this.http.get<Sale[]>('https://pwebapp1-apim.azure-api.net/Sale/Sale');
  }
  getAllCustomers(): Observable<Customer[]>{
    //return this.http.get<salesperson[]>('https://localhost:7185/SalesPeople');
    return this.http.get<Customer[]>('https://pwebapp1-apim.azure-api.net/Customer/Customer');
  }
  getData(): Observable<any> {
    return this.http.get('https://pwebapp1-apim.azure-api.net/Customer/Customer');
  }
  updateSalesPerson({pBody}: { pBody: any }){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'accept' : 'text/plain'
      })
    };
    this.http.put<any>('https://pwebapp1-apim.azure-api.net/SalesPerson/SalesPerson', pBody, httpOptions)
      .subscribe();
    /*this.http.put<any>('https://localhost:7185/SalesPerson', pBody, httpOptions)
      .subscribe();*/
  }

  updateProduct({pBody}: { pBody: any }){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'accept' : 'text/plain'
      })
    };
    this.http.put<any>('https://pwebapp1-apim.azure-api.net/Product/Product', pBody, httpOptions)
      .subscribe();
    /*this.http.put<any>('https://localhost:7185/Product', pBody, httpOptions)
      .subscribe();*/
  }

  updateCustomer({pBody}: { pBody: any }){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'accept' : 'text/plain'
      })
    };
    this.http.put<any>('https://pwebapp1-apim.azure-api.net/Customer/Customer', pBody, httpOptions)
      .subscribe();
    /*this.http.put<any>('https://localhost:7185/Customer', pBody, httpOptions)
      .subscribe();*/
  }
  postData(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'accept' : 'text/plain'
      })
    };
    return this.http.put<any>('https://pwebapp1-apim.azure-api.net/Customer/Customer', data, httpOptions);
  }

  createSale({pBody}: { pBody: any }){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'accept' : 'text/plain'
      })
    };

    this.http.post<any>('https://pwebapp1-apim.azure-api.net/Sale/Sale', pBody, httpOptions)
      .subscribe();
    /*this.http.post<any>('https://localhost:7185/Sale', pBody , httpOptions)
      .subscribe();*/
  }
}
