import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  public mails:any=[];
  constructor(private _mailservice:MailService) {
    this._mailservice.getMails().subscribe(
      (data:any)=>{
        this.mails=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

}
