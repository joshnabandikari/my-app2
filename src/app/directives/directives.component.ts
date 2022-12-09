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
    {name:'Anil',age:20,package:10},
    {name:'Anil2',age:21,package:11},
    {name:'Anil3',age:22,package:12},
    {name:'Anil4',age:23,package:13},
    
  ];
  public time:number=14;

}
