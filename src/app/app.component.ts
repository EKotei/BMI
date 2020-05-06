import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BMI2';
  centimeters: number;
  kilograms: number;
  answer: number;

  calculate(){
    this.answer = this.kilograms / Math.pow (this.centimeters/100,2);
  }
}
