import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  public names:string[]=['ajay','anil','bharath','chetan','david']
  public states:string[]=['AndhraPradesh','Telangana','TamilNadu','kerala']

  public users:any =[
    {name:'Anil',age:10,package:9},
    {name:'ram',age:21,package:11},
    {name:'pavan',age:22,package:12},
    {name:'kiran',age:33,package:13},
    
  ];
  public time:number=14;
  public today:any=new Date();


}
