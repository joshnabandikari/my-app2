import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  public employeeForm:FormGroup=new FormGroup(
    {
      name:new FormControl(),
      mobile:new FormControl(),
      email:new FormControl(),
      dob:new FormControl(),
      address:new FormGroup(
        {
          addressLine:new FormControl(),
          city:new FormControl(),
          state:new FormControl(),
          pincode:new FormControl(),
          location:new FormGroup(
            {
              nearBy:new FormControl(),
              landMark:new FormControl()

            }
          )
         }

      ),
      educations:new FormArray([]),
      type:new FormControl(),
      role:new FormControl(),
      
      node: new FormControl(),
      html: new FormControl(),


    }
  );
  get educationsFormArray(){
    return this.employeeForm.get('educations')as FormArray;
}
add(){
  this.educationsFormArray.push(
    new FormGroup(
      {
        qualification: new FormControl(),
        year: new FormControl(),
        percentage:new FormControl

      }
    )
  )
}
delete(i:number){
  this.educationsFormArray.removeAt(i);
}
constructor(){}

submit (){
  console.log(this.employeeForm);
}
}
