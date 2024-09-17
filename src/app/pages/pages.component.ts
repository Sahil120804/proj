import { Component } from '@angular/core';
import { CardComponent } from '../units/card/card.component';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {

}
