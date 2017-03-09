import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThingsListComponent } from './things-list.component';
import { AuthGuard } from '../shared/auth';

// Route Configuration
export const thingsRoutes: Routes = [
    {
        path: '',
        component: ThingsListComponent,
        canActivate: [AuthGuard]
    },

];

// Export routes
export const routing: ModuleWithProviders = RouterModule.forChild(thingsRoutes);
