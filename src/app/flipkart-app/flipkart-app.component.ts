import { Component } from '@angular/core';
import { FlipkartAppService } from '../flipkart-app.service';

@Component({
  selector: 'app-flipkart-app',
  templateUrl: './flipkart-app.component.html',
  styleUrls: ['./flipkart-app.component.css']
})
export class FlipkartAppComponent {
  public flipkartapps:any=[];
  constructor(private _flipkartappservice:FlipkartAppService){
    this._flipkartappservice.getFlipkartApps().subscribe(
      (data:any)=>{
        this.flipkartapps=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

}
