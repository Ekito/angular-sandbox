import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ThingsListComponent, ThingsService, ThingsHttpService } from './+things';

@NgModule({
  declarations: [
    AppComponent,
    ThingsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ThingsService,
    ThingsHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
