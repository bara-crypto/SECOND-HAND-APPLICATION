import { Component , Input } from '@angular/core';
import { CallConnectionModel } from '../../../../interfaces/call-connection/call-connection.model';

@Component({
  selector: 'app-call-connection-card',
  imports: [],
  templateUrl: './call-connection-card.html',
  styleUrl: './call-connection-card.css'
})
export class CallConnectionCard 
{
  @Input() public CallConnection!: CallConnectionModel;

  
}
