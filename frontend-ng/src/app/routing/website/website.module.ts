import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./routing/home/home.module') 
      .then(module=> module.HomeModule)
    },

    {
      path: 'not-found',
      loadChildren: () => import('./routing/not-found/not-found.module') 
      .then(module=> module.NotFoundModule)
    },

    {
      path: '**',
      redirectTo:'not-found'
    }

  ]

@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  providers:[]
  
})
export class WebsiteModule { }
