import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-knorbu-taxes',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormField,
    MatInputModule
  ],
  templateUrl: './knorbu-taxes.html',
  styleUrl: './knorbu-taxes.css',
})
export class KnorbuTaxes {
    protected readonly inputNmber = signal(2)
    protected readonly total = signal (4)
}
