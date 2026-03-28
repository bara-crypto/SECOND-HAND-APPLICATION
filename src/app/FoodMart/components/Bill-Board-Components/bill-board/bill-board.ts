import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-bill-board',
  imports: [],
  templateUrl: './bill-board.html',
  styleUrl: './bill-board.css'
})
export class BillBoard 
{
  @Input() top!: String;
  @Input() topCenter!: String;
  @Input() title!: String;
  @Input() anchor!: String;


}
