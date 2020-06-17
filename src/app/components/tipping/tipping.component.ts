import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipping',
  templateUrl: './tipping.component.html',
  styleUrls: ['./tipping.component.css']
})
export class TippingComponent implements OnInit {

  tipPercentage = .2;
  billAmount = 0;
  totalToBePaid = 0;
  tipAmount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  changeTipPercentage(amount: number) {
    this.tipPercentage = amount;
    this.updateUi();
  }

  calculate(amount: HTMLInputElement) {
    // do the math
    this.billAmount = amount.valueAsNumber;
    this.updateUi();
    amount.focus();
  }

  updateUi() {
    this.billAmount = this.billAmount;
    this.tipAmount = this.billAmount * this.tipPercentage;
    this.totalToBePaid = this.billAmount + this.tipAmount;
  }

}
