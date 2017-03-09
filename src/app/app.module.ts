import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { routing,
         appRoutingProviders }  from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './+home';
import { ThingsModule } from './+things';

import { Auth } from './shared/auth';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        FlexLayoutModule,
        routing,
        ThingsModule
    ],
    providers: [
        appRoutingProviders,
        Auth
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
