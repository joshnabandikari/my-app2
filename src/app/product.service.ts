import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products:any=[
    {name:'anil',price:100,quantity:10,rating:4},
    {name:'raj',price:200,quantity:20,rating:5},
    {name:'ravi',price:300,quantity:30,rating:3},
    {name:'kiran',price:400,quantity:40,rating:2},
    {name:'pavan',price:500,quantity:50,rating:1}

   
  
  ]

  

  constructor() { }
}
