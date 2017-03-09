import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Router } from '@angular/router';

import { routing,
         appRoutingProviders }  from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './+home';

import { Auth, AuthGuard } from './shared/auth';

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
        routing
    ],
    providers: [
        appRoutingProviders,
        Auth,
        AuthGuard,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
