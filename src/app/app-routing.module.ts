import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then(m => m.CreatePageModule)
  },
  {
    path: 'edit/:id', // Make sure this matches the URL pattern used in the navigation
    loadChildren: () =>
      import('./edit/edit.module').then((m) => m.EditPageModule),
  },
  {
    path: 'product-details',
    loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsPageModule)
  },
  {
    path: 'product-details/:id',
    loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsPageModule),
  },
  {
    path: 'gps',
    loadChildren: () => import('./gps/gps.module').then( m => m.GpsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
