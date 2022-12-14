import { Component } from '@angular/core';
import { BankAccountService } from '../bank-account.service';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {
  public bankaccounts:any=[];
  constructor(private _bankAccountService:BankAccountService){
    this._bankAccountService.getBankaccounts().subscribe(
      (data:any)=>{
        this.bankaccounts=data;

      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

}
