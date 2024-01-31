import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'factorial';
  inputNumber: number=0;
  factorialResult: number=0;

  calculateFactorial() {
    if (this.inputNumber >= 0) {
      this.factorialResult = this.factorial(this.inputNumber);
    } else {
      this.factorialResult;
    }
  }

  private factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }
}
