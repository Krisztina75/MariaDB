import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProductDetailsComponent } from './page/admin-product-details/admin-product-details.component';

const routes: Routes = [
  { path: 'show/:id', component: AdminProductDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
