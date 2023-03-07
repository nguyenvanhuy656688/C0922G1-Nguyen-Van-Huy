import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: any = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  calculator(numberFirst: any, operator: any, numberSecond: any):number {
    switch (operator) {
      case "+":
        return this.result = parseInt(numberFirst) + parseInt(numberSecond)
      case "-":
        return this.result = parseInt(numberFirst) - parseInt(numberSecond)
      case "*":
        return this.result = parseInt(numberFirst) * parseInt(numberSecond)
      case "/":
        return this.result = parseInt(numberFirst) / parseInt(numberSecond)
      default:
        return 0

    }

  }
}
