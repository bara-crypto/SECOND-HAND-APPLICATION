import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { NgxImageZoomModule } from 'ngx-image-zoom';
register();




@Component({
  selector: 'app-single-items-layout',
  imports: [NgxImageZoomModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  templateUrl: './single-items-layout.html',
  styleUrl: './single-items-layout.css',
})
export class SingleItemsLayout
{

  public showSearch = false;
  public circularLens = true;

  public toggleSearch()
  {
    this.showSearch = !this.showSearch;
  }

  public paginationConfig = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<img src="${this.images[index]}" class="${className} custom-bullet-img" />`;
    },
  };


  slides = [
    { id: '1', src: "assets/aranoz-img/product/single-product/product_1.png", alt: 'Product 1' },
    { id: '2', src: "assets/aranoz-img/product/single-product/product_1.png", alt: 'Product 2' },
    { id: '3', src: "assets/aranoz-img/product/single-product/product_1.png", alt: 'Product 3' },
    { id: '4', src: "assets/aranoz-img/product/single-product/product_1.png", alt: 'Product 4' },
  ];

  images = [
    'assets/aranoz-img/Washing-Machine-PNG-File.png',
    'assets/aranoz-img/Washing-Machine-PNG-File.png',
    'assets/aranoz-img/Washing-Machine-PNG-File.png',
    'assets/aranoz-img/Washing-Machine-PNG-File.png',
  ];

}
