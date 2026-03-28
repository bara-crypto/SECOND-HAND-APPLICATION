// import { Component, AfterViewInit } from '@angular/core';
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';

// Swiper.use([Navigation, Pagination]);

// @Component({
//   selector: 'app-appliance-category-items',
//   imports: [swiper-container],
//   templateUrl: './appliance-category-items.html',
//   styleUrl: './appliance-category-items.css'
// })

// export class ApplianceCategoryItems
// {

// }



import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit , Input} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Appliance } from '../../../../interfaces/appliance-category/applicance-category.model';

register();


@Component({
  selector: 'app-appliance-category-items',
  standalone: true,
  imports: [],
  templateUrl: './appliance-category-items.html',
  styleUrl: './appliance-category-items.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Required for swiper-container
})

export class ApplianceCategoryItems
{
  @Input () products!: Appliance[];
}
