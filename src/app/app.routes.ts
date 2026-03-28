//export const routes: Routes = [];
import { Routes } from '@angular/router';

/*
import { LandingPage } from './components/landing-page/landing-page'; 
import { InsertWashingMachineDetails } from './components/insert-washing-machine-details/insert-washing-machine-details';
import { SearchPage } from './components/search-page/search-page';

*/


import {Layout} from './FoodMart/layout/layout';
import { AranozLayout } from './Aranoz/Aranoz-Layout/aranoz-layout/aranoz-layout';
import { SingleItemsLayout } from './SingleProduct/Single-Items-Layout/single-items-layout/single-items-layout';
import { UploadData } from './Admin/Upload-Data/upload-data/upload-data';
import { InsertWashingMachineDetails } from './components/insert-washing-machine-details/insert-washing-machine-details';
import { SearchPage } from './components/search-page/search-page';
import { LandingPage } from './components/landing-page/landing-page';

export const routes: Routes = 
[
    {path:'', component: Layout},
    {path:'mainpage', component: AranozLayout},
    {path: 'singleitem',component: SingleItemsLayout},
    {path: 'upload', component: UploadData},
    {path: 'AdminPage', component: InsertWashingMachineDetails},
    
    // {path:'', component: LandingPage},
    // {path: 'landingPage', component: LandingPage},
    // {path: 'AdminPage', component: InsertWashingMachineDetails},
    // {path: 'SearchPage', component: SearchPage},
    // {path: '', component: },
];