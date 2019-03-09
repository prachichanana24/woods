import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
data: any;
  constructor() { }
  
  setData(data)
  {
  this.data= data
  }
  getData()
  {
  return this.data;
  }
  getCost()  
{
let cost = 0;
for(let i = 0;i < this.data.cart.length;i++)
{
cost += this.data.cart[i].cost * this.data.cart[i].quantity;
}
return cost;
}
}

