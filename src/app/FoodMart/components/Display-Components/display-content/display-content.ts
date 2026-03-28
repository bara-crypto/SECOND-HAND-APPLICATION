import { Component , Input } from '@angular/core';
import { Item } from '../../../../interfaces/item-cart-interface/ItemFetchOrder.model';

@Component({
  selector: 'app-display-content',
  imports: [],
  templateUrl: './display-content.html',
  styleUrl: './display-content.css'
})
export class DisplayContent 
{
   @Input() items!: Item[];
}
