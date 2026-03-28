import { Component, Input } from '@angular/core';
import { ItemInterface } from '../../../interfaces/Category-Items-Interface/Items-Interface/item-interface.model';

@Component({
  selector: 'app-aranoz-items',
  imports: [],
  templateUrl: './aranoz-items.html',
  styleUrl: './aranoz-items.css',
})
export class AranozItems {

  @Input() itemData?: ItemInterface;
  public show:boolean = false;
  public emergency_show:boolean = true;
  

}
