import { Component } from '@angular/core';
import { CardComponent } from '../../units/card/card.component';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
$item: any;
  constructor(private api:ApiService){}
  product:any=""
  ngOnInit()
  {
    this.api.getProducer().subscribe((data:any)=>{this.product=data})
  }

}
