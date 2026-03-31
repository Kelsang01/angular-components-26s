import { Component, signal } from '@angular/core';
import { PizzaToppings } from './pizza-toppings/pizza-toppings';
import { ThamiltonRollD20 } from './thamilton-roll-d20/thamilton-roll-d20';
import { CbaresDiceRoll } from './cbares-dice-roll/cbares-dice-roll';
import { TsteeleMultiplication } from './tsteele-multiplication/tsteele-multiplication';
import { ZsmuckerbryanChecklist } from './zsmuckerbryan-checklist/zsmuckerbryan-checklist';

@Component({
  selector: 'app-root',
  imports: [
    PizzaToppings,
    ThamiltonRollD20,
    ZsmuckerbryanChecklist,
    TsteeleMultiplication,
    CbaresDiceRoll,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-components');
}
