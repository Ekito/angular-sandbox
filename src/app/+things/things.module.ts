import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { routing } from './things.routes';
import { ThingsListComponent } from './things-list.component';
import { ThingsService } from './things.service';
import { ThingsHttpService } from './things-http.service';


@NgModule({
    declarations: [
        ThingsListComponent,
    ],
    exports: [
        ThingsListComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        routing,
    ],
    providers: [
        ThingsHttpService,
        ThingsService
    ]
})

export class ThingsModule { }
