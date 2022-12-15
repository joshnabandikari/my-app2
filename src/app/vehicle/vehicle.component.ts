import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  public vehicles:any =[];
  constructor(private _vehicleservice:VehicleService) {
    this._vehicleservice.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
      

      public term:String = "";
      filter(){
        this._vehicleservice.getFilteredVehicles(this.term).subscribe(
          (data:any)=>{
            this.vehicles=data;
          },
          (err:any)=>{
            alert("Internal server error");
          }

        )
      }
      public column:string="";
      public order:string="";
      sort(){
        this._vehicleservice.getSortedVehicles(this.column,this.order).subscribe(
          (data:any)=>{
            this.vehicles=data;
          },
          (err:any)=>{
            alert("Internal server error")
          }
        )}
        page(page:number){
          this._vehicleservice.getPagedVehicles(page).subscribe(
            (data:any)=>{
              this.vehicles=data;

            },
            (err:any)=>{
              alert("Internal server error")
            }
          )

        
      }
      delete(id:string){
        this._vehicleservice.deleteVehicles(id).subscribe(
          (data:any)=>{
            alert("deleted successfully");
            location.reload();

          },
          (err:any)=>{
            alert("Internal server error")

          }
        )
      }

    
  }


