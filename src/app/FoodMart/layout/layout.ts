import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Header } from '../components/Header-Components/header/header';
import { MenuBar } from '../components/Header-Components/menu-bar/menu-bar';
import { BillBoard } from '../components/Bill-Board-Components/bill-board/bill-board';
import { MainBillBoard } from "../components/Bill-Board-Components/main-bill-board/main-bill-board";
import { CategoryLayout } from "../components/Category-Components/category-layout/category-layout";
import { CategoryItems } from "../components/Category-Components/category-items/category-items";
import { DisplayTitle } from "../components/Display-Components/display-title/display-title";
import { Item } from '../../interfaces/item-cart-interface/ItemFetchOrder.model';
import { DisplayContent } from "../components/Display-Components/display-content/display-content";
import { Appliance } from '../../interfaces/appliance-category/applicance-category.model';
import { ApplianceCategoryItems } from '../components/Appliance-Category-Components/appliance-category-items/appliance-category-items';
import { CallConnectionModel } from '../../interfaces/call-connection/call-connection.model';
import { CallConnectionCard } from "../components/Call-Connection-Components/call-connection-card/call-connection-card";
import { BlogsCardInterface } from '../../interfaces/blogs-interface/blogs-card-interface.model';
import { BlogsTitles } from "../components/Blogs-Components/blogs-titles/blogs-titles";
import { MobileAppCard } from "../components/Mobile-App-Components/mobile-app-card/mobile-app-card";
import { ServiceGivenCard } from "../components/Service-Given-Components/service-given-card/service-given-card";
import { ServiceGivenCardInterface } from '../../interfaces/Service-Given-Card-interface/service-given-card.model';
import { FooterComponents } from "../components/Footer-Components/footer-components/footer-components";


@Component({
  selector: 'app-layout',
  imports: [CommonModule, Header, MenuBar, BillBoard, MainBillBoard, CategoryLayout, CategoryItems, DisplayTitle, DisplayContent, ApplianceCategoryItems, CallConnectionCard, BlogsTitles, MobileAppCard, ServiceGivenCard, FooterComponents],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  standalone: true,
})
export class Layout implements OnInit
{
  public loading = true;
  public alignment = "center";
  public spaceByWidthXHeight = {'width': '1px', 'height': '20px'}

  public Top:String = "100% Natural";
  public Center:String = "Fresh Smoothie & Summer Juice";
  public epCenter:String = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.";
  public BtnContent:String = "Shop Now";

  

  public BillBoardMap = 
  {
    'top': "20% off",
    'topCenter':'',
    'title':'Fruits & Vegetables',
    'anchor':'Shop Collection'
  }

  public items : Item[] = [
  {
    id: "1",
    isAvail: true,
    isHype: false,
    imagesrc: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e", // headphones
    isImage: true,
    title: "Wireless Headphones",
    isAC: false,
    Ton: "N/A",
    star: "4.5",
    rupee: "2999"
  },
  {
    id: "2",
    isAvail: true,
    isHype: true,
    imagesrc: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e", // sneakers
    isImage: true,
    title: "Running Sneakers",
    isAC: false,
    Ton: "N/A",
    star: "4.7",
    rupee: "4999"
  },
  {
    id: "3",
    isAvail: false,
    isHype: false,
    imagesrc: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e", // laptop
    isImage: true,
    title: "Gaming Laptop",
    isAC: false,
    Ton: "N/A",
    star: "4.8",
    rupee: "79999"
  },
  {
    id: "4",
    isAvail: true,
    isHype: true,
    imagesrc: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e", // AC unit
    isImage: true,
    title: "Split Air Conditioner",
    isAC: true,
    Ton: "1.5 Ton",
    star: "4.3",
    rupee: "35999"
  },
  {
    id: "5",
    isAvail: true,
    isHype: false,
    imagesrc: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e", // watch
    isImage: true,
    title: "Smart Watch",
    isAC: false,
    Ton: "N/A",
    star: "4.6",
    rupee: "8999"
  }];

  public products: Appliance[] = [
    {id: '1', image: 'assets/images/product-thumb-11.jpg', name: 'Amber Jar', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellendus accusantium consequuntur ab tenetur maiores aperiam consequatur impedit quia?' },
    {id: '2', image: 'assets/images/product-thumb-12.jpg', name: 'Amber Jar', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellendus accusantium consequuntur ab tenetur maiores aperiam consequatur impedit quia?' },
    {id: '3', image: 'assets/images/product-thumb-13.jpg', name: 'Amber Jar', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellendus accusantium consequuntur ab tenetur maiores aperiam consequatur impedit quia?' },
    
    // Add more items here...
  ];

  public CallCategory: CallConnectionModel[] = [
    {title : 'Upto 25% Off', name: 'Luxa Dark Chocolate', description: 'Very tasty & creamy vanilla flavour creamy muffins.', bgcolor: 'rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;', button: 'CALL NOW', image: 'assets/images/ad-image-3.png'},
    {title : 'Upto 25% Off', name: 'Luxa Dark Chocolate', description: 'Very tasty & creamy vanilla flavour creamy muffins.', bgcolor: 'rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important', button: 'CALL NOW', image: 'assets/images/ad-image-4.png'}
  ];

  public Blogs: BlogsCardInterface[] = [
  {
    name: "The Future of AI",
    description: "Exploring how artificial intelligence is shaping industries and everyday life.",
    date: "2026-02-10",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d" // AI concept
  },
  {
    name: "Healthy Living Tips",
    description: "Simple lifestyle changes to improve your health and wellbeing.",
    date: "2026-01-28",
    image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443" // fruits/healthy food
  },
  {
    name: "Travel Diaries: Japan",
    description: "A journey through Tokyo, Kyoto, and Osaka with cultural highlights.",
    date: "2026-01-15",
    image: "https://images.unsplash.com/photo-1549693578-d683be217e58" // Japan street
  },
  // {
  //   name: "Startup Success Stories",
  //   description: "Lessons learned from entrepreneurs who built thriving businesses.",
  //   date: "2025-12-20",
  //   image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" // startup team
  // },
  // {
  //   name: "Sustainable Fashion",
  //   description: "How eco-friendly clothing brands are changing the fashion industry.",
  //   date: "2025-12-05",
  //   image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47" // fashion
  // }
];

  public ServiceCard: ServiceGivenCardInterface[] = [
    {title: '1-lapis' , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, beatae atque. Hic, facilis."},
    {title: '2-Lapis' , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, beatae atque. Hic, facilis."},
    {title: '3-Lapis' , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, beatae atque. Hic, facilis."},
    {title: '4-Lapis' , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, beatae atque. Hic, facilis."},
  ];

  public SVG_Service = 
  [
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21.5 15a3 3 0 0 0-1.9-2.78l1.87-7a1 1 0 0 0-.18-.87A1 1 0 0 0 20.5 4H6.8l-.33-1.26A1 1 0 0 0 5.5 2h-2v2h1.23l2.48 9.26a1 1 0 0 0 1 .74H18.5a1 1 0 0 1 0 2h-13a1 1 0 0 0 0 2h1.18a3 3 0 1 0 5.64 0h2.36a3 3 0 1 0 5.82 1a2.94 2.94 0 0 0-.4-1.47A3 3 0 0 0 21.5 15Zm-3.91-3H9L7.34 6H19.2ZM9.5 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1Zm8 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1Z"></path></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21.5 15a3 3 0 0 0-1.9-2.78l1.87-7a1 1 0 0 0-.18-.87A1 1 0 0 0 20.5 4H6.8l-.33-1.26A1 1 0 0 0 5.5 2h-2v2h1.23l2.48 9.26a1 1 0 0 0 1 .74H18.5a1 1 0 0 1 0 2h-13a1 1 0 0 0 0 2h1.18a3 3 0 1 0 5.64 0h2.36a3 3 0 1 0 5.82 1a2.94 2.94 0 0 0-.4-1.47A3 3 0 0 0 21.5 15Zm-3.91-3H9L7.34 6H19.2ZM9.5 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1Zm8 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1Z"></path></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21.5 15a3 3 0 0 0-1.9-2.78l1.87-7a1 1 0 0 0-.18-.87A1 1 0 0 0 20.5 4H6.8l-.33-1.26A1 1 0 0 0 5.5 2h-2v2h1.23l2.48 9.26a1 1 0 0 0 1 .74H18.5a1 1 0 0 1 0 2h-13a1 1 0 0 0 0 2h1.18a3 3 0 1 0 5.64 0h2.36a3 3 0 1 0 5.82 1a2.94 2.94 0 0 0-.4-1.47A3 3 0 0 0 21.5 15Zm-3.91-3H9L7.34 6H19.2ZM9.5 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1Zm8 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1Z"></path></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21.5 15a3 3 0 0 0-1.9-2.78l1.87-7a1 1 0 0 0-.18-.87A1 1 0 0 0 20.5 4H6.8l-.33-1.26A1 1 0 0 0 5.5 2h-2v2h1.23l2.48 9.26a1 1 0 0 0 1 .74H18.5a1 1 0 0 1 0 2h-13a1 1 0 0 0 0 2h1.18a3 3 0 1 0 5.64 0h2.36a3 3 0 1 0 5.82 1a2.94 2.94 0 0 0-.4-1.47A3 3 0 0 0 21.5 15Zm-3.91-3H9L7.34 6H19.2ZM9.5 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1Zm8 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1Z"></path></svg>'
  ]

  ngOnInit(): void 
  {
    setTimeout(() => {this.loading = false;}, 2000)
  }

}
