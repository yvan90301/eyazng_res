import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddplatComponent } from './addplat/addplat.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/homepage', 
    pathMatch: 'full',
  },
  {
    path:'list',
    component: ListComponent
  },
  {
    path:'details/:id',
    component: DetailsComponent
  },
  {
    component: HomepageComponent,
    path:'homepage'
  },
  {
    component: AddplatComponent,
    path:'addplat'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
