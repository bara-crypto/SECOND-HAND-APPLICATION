import { Component , Input} from '@angular/core';
import { BlogsCardInterface } from '../../../../interfaces/blogs-interface/blogs-card-interface.model';

@Component({
  selector: 'app-blogs-titles',
  imports: [],
  templateUrl: './blogs-titles.html',
  styleUrl: './blogs-titles.css'
})
export class BlogsTitles 
{
  @Input() blogs!: BlogsCardInterface;
}
