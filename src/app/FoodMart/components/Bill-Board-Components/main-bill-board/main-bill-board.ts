import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-bill-board',
  imports: [],
  templateUrl: './main-bill-board.html',
  styleUrl: './main-bill-board.css'
})
export class MainBillBoard 
{
    @Input() Top!: String;
    @Input() Center!: String;
    @Input() epCenter!: String;
    @Input() BtnContent!: String;
}
