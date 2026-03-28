import { Component , Input} from '@angular/core';
import { ServiceGivenCardInterface } from '../../../../interfaces/Service-Given-Card-interface/service-given-card.model';

@Component({
  selector: 'app-service-given-card',
  imports: [],
  templateUrl: './service-given-card.html',
  styleUrl: './service-given-card.css'
})
export class ServiceGivenCard 
{
  @Input() ServiceGivenCard! : ServiceGivenCardInterface;
}
