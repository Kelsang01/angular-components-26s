import { Component, signal } from '@angular/core';
import { PizzaToppings } from './pizza-toppings/pizza-toppings';
import { TsteeleMultiplication } from './tsteele-multiplication/tsteele-multiplication';

@Component({
  selector: 'app-root',
  imports: [
    PizzaToppings,
    TsteeleMultiplication,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-components');
}
