import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  public vehicleForm:FormGroup=new FormGroup(
    {
      Vehicle:new FormControl(),
      manufacturer:new FormControl(),
      model:new FormControl(),
      type:new FormControl(),
      fuel:new FormControl(),
      color:new FormControl(),
      image:new FormControl()

    }

  )
  constructor(private _vehicleservice:VehicleService){}

  submit(){
    console.log(this.vehicleForm.value);
  
  this. _vehicleservice.createVehicle(this.vehicleForm.value).subscribe(
    (data:any)=>{
      alert("created successfully");

    },
    (err:any)=>{
      alert("Internal  server error")
    }
  );


}
}
