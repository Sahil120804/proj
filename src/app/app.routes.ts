import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"product",component:ProductComponent},
    {path:"home",component:HomeComponent},
    {path:"contact",component:ContactComponent},
    {path:"about",component:AboutComponent},
    {path:"product/:id",component:SinglepageComponent}
    
];
