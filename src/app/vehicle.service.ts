import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpclient:HttpClient) 
  { }
getVehicles():Observable<any>{
  return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
}
getVehicle(id:any):Observable<any>{
  return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
}
getFilteredVehicles(term:any):Observable<any>{
  return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term)
}
getSortedVehicles(coloumn:string,order:string):Observable<any>{
  return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+coloumn+"&order="+order);
}
getPagedVehicles(page:number):Observable<any>{
  return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page="+page);
}
deleteVehicles(id:string):Observable<any>{
  return this._httpclient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);


}

}



