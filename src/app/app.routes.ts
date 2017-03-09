import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './+home/home.component';

// Route Configuration
export const appRoutes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '/',
  }
];

export const appRoutingProviders: any[] = [

];

// Export routes
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
