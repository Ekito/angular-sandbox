import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThingsListComponent } from './things-list.component';

// Route Configuration
export const thingsRoutes: Routes = [
    {
        path: '',
        component: ThingsListComponent
    },

];

// Export routes
export const routing: ModuleWithProviders = RouterModule.forChild(thingsRoutes);
