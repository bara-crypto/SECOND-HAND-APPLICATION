import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID  } from '@angular/core';
import { NgxSliderModule, Options } from 'ngx-slider-v2';
import { NgSelectModule } from '@ng-select/ng-select'
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AranozItems } from "../../Aranoz-Items/aranoz-items/aranoz-items";
import { ItemInterface } from '../../../interfaces/Category-Items-Interface/Items-Interface/item-interface.model';

@Component({
  selector: 'app-aranoz-layout',
  standalone: true,
  imports: [NgxSliderModule, NgSelectModule, CommonModule, AranozItems],
  templateUrl: './aranoz-layout.html',
  styleUrl: './aranoz-layout.css',
  animations: []
})


export class AranozLayout implements AfterViewInit, OnInit
{
  


  public showSearch = false;
  public sortSelectedBool: any;
  public sortSelect = "Select";
  public selectedCar: any;
  public minValue: number = 5000;
  public maxValue: number = 10000;
  public sortKey: string = 'Select';
  public filteredData: ItemInterface[] = [];
  public itemData: ItemInterface[] = [
    {
      id: 1,
      name: "Apple iPhone 15 Pro Max",
      price: 5000,
      Description: "Apple’s flagship smartphone with titanium design, A17 Pro chip, and advanced triple-camera system.",
      Spec: {ton: 4, star: 4, year_of_use: 4},
      Image: `assets/aranoz-img/Washing-Machine-PNG-File.png`,
      IsViewAble: true,
      IsImageExists: true,
    },
    {
      id: 2,
      name: "Sony WH-1000XM5 Headphones",
      price: 10000,
      Description: "Premium wireless noise-cancelling headphones with industry-leading sound quality and comfort.",
      Spec: {ton: 4, star: 4, year_of_use: 4},
      Image: "i:turn0image60",
      IsViewAble: true,
      IsImageExists: false,
    },
    {
      id: 3,
      name: "Dell XPS 15 Laptop",
      price: 18990,
      Description: "High-performance laptop with stunning OLED display, powerful Intel processor, and sleek design.",
      Spec: {ton: 4, star: 4, year_of_use: 4},
      Image: "i:turn0image1",
      IsViewAble: true,
      IsImageExists: true,
    },
    {
      id: 4,
      name: "Nike Air Jordan 1 Retro High OG",
      price: 18000,
      Description: "Iconic basketball sneakers blending heritage style with modern comfort.",
      Spec: {ton: 4, star: 4, year_of_use: 4},
      Image: "i:turn0image205",
      IsViewAble: true,
      IsImageExists: true,
    },
    {
      id: 5,
      name: "Samsung Galaxy S24 Ultra",
      price: 13990,
      Description: "Samsung’s AI-powered flagship smartphone with advanced camera and S-Pen support.",
      Spec: {ton: 4, star: 4, year_of_use: 4},
      Image: "i:turn0image115",
      IsViewAble: true,
      IsImageExists: true,
    },
    {
      id: 6,
      name: "Bose QuietComfort Ultra Earbuds",
      price: 25000,
      Description: "Wireless earbuds with spatial audio, adaptive noise cancellation, and premium comfort.",
      Spec: {ton: 4, star: 4, year_of_use: 4},
      Image: "i:turn0image175",
      IsViewAble: true,
      IsImageExists: true,
    },
    {
      id: 7,
      name: "Apple MacBook Air M3",
      price: 14990,
      Description: "Ultra-thin laptop powered by Apple’s M3 chip, delivering speed and efficiency.",
      Spec: {ton: 4, star: 4, year_of_use: 4},
      Image: "i:turn0image90",
      IsViewAble: true,
      IsImageExists: true,
    },
    {
      id: 8,
      name: "Canon EOS R6 Camera",
      price: 24990,
      Description: "Professional mirrorless camera with advanced autofocus and 4K video recording.",
      Spec: {ton: 4, star: 4, year_of_use: 4},
      Image: "i:turn0image145",
      IsViewAble: true,
      IsImageExists: true,
    },
    {
      id: 9,
      name: "PlayStation 5 Console",
      price: 4099,
      Description: "Sony’s next-gen gaming console with lightning-fast load times and immersive gameplay.",
      Spec: {ton: 4, star: 4, year_of_use: 4},
      Image: "i:turn0image94",
      IsViewAble: true,
      IsImageExists: true,
    },
    {
      id: 10,
      name: "Adidas Ultraboost 22 Shoes",
      price: 20000,
      Description: "High-performance running shoes designed for comfort and energy return.",
      Spec: {ton: 4, star: 4, year_of_use: 4},
      Image: "i:turn0image219",
      IsViewAble: true,
      IsImageExists: true,
    }
  ];
  public cars = [
    {id:1, name: "Price"}, 
    {id:2, name: "Star"}  
  ]
  public options: Options = {
    floor: 5000,
    ceil: 25000,
    step: 1000,
    translate: (value: number): string => {
      return String(value);
    }
  };




  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngAfterViewInit(): void {
    // We use a small timeout to ensure the HTML is fully rendered
    if (isPlatformBrowser(this.platformId)) 
    {
      setTimeout(() => {
       ($('.owl-carousel') as any).owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          autoplay: true,
          navText: [
            "<div class='fw-bold'>Previous</div>", // Custom HTML for Previous
            "<div class='fw-bold'>Next</div>" // Custom HTML for Next
          ],
          responsive: {
            0: { items: 2 },
            576:{ item: 2},
            768: { items: 3 },
            992: {items: 4},
            1200: { items: 4 }
          }
        });
      }, 50);
    }
    
    
  }

  ngOnInit() 
  {
    this.filteredData = [...this.itemData];
  }





  
  public onFilterChange(): void {
    console.log(`Filtering from ${this.minValue} to ${this.maxValue}`);
  }

  public SortDropDown(value: any) : void
  {
    this.sortSelectedBool = value.name;

    console.log(this.sortSelectedBool)

    this.itemData.sort((a, b) => {
      if (this.sortSelectedBool === 'Price') 
      {
        return a.price - b.price;
      } 
      else if (this.sortSelectedBool === 'Star') 
      {
        return b.Spec.star - a.Spec.star;
      }
      return 0;
    });

    console.log(this.itemData)
  }

  public toggleSearch()
  {
    this.showSearch = !this.showSearch;
  }

  onSortChange(event: any) {
    const criteria = event.target.value;

    this.itemData.sort((a, b) => {
      if (criteria === 'Price') 
      {
        return a.price - b.price;
      } 
      else if (criteria === 'Star') 
      {
        return b.Spec.star - a.Spec.star;
      }
      return 0;
    });

    console.log(this.itemData)
  }


  // onSearch(event: any) {
  //   const searchTerm = event.target.value.toLowerCase();

  //   if (!searchTerm) 
  //   {
  //     this.filteredData = [...this.itemData];
  //     return;
  //   }

  //   this.filteredData = this.itemData.filter(item => 
  //   {
  //     const nameMatch = item.name.toLowerCase().includes(searchTerm);
  //     const descMatch = item.Description.toLowerCase().includes(searchTerm);
      
  //     return nameMatch || descMatch;
  //   });
  // }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    const searchTerm = input.value.trim().toLowerCase();

    

    if (!searchTerm) {
      this.filteredData = [...this.itemData]; // Reset if empty
    } else {
      // this.filteredData = this.itemData.filter(item => item.name.toLowerCase().includes(searchTerm));
      this.filteredData = this.itemData.filter(item => item.name.toLowerCase().startsWith(searchTerm));
      console.log(this.filteredData)
    }


}


  applyPriceFilter() {
    this.filteredData = this.itemData.filter(item => {
      return item.price >= this.minValue && item.price <= this.maxValue;
    });
  }


}





