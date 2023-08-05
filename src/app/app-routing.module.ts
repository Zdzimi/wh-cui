import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './module/stats/stats.component';
import { CommodityComponent } from './module/commodity/commodity.component';
import { PageNotFoundComponent } from './module/page-not-found/page-not-found.component';
import { HomeComponent } from './module/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'warehouse/d/:days/l/:lessThan/m/:moreThan',
    component: StatsComponent
  },
  {
    path: 'commodity/d/:days/l/:lessThan/m/:moreThan/:id',
    component: CommodityComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
