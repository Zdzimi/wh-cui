import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './module/stats/stats.component';
import { CommodityComponent } from './module/commodity/commodity.component';
import { PageNotFoundComponent } from './module/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'warehouse',
    pathMatch: 'full'
  },
  {
    path: 'warehouse',
    component: StatsComponent
  },
  {
    path: 'commodity/:id',
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
