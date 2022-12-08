import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  public age:number =20;
  public name:string='joshna';
  public isindian:boolean=true;
  public phone:number=9494949494;
  test(){
    alert("submit clicked");
  }
  test2(){
    alert("cancel double clicked");
  }
  test3(){
    alert("key pressed");
  }
  test4(){
    alert("mouse entered in button");
  }
  test5(){
    alert("mouse leave from button");
  }
  

  

}
