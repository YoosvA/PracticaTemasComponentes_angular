import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { cssComponent } from './css/css.component';
import { htmlComponent } from './html/html.component';
import { tsComponent } from './ts/ts.component';

@NgModule({
  declarations: [
    AppComponent,
    cssComponent,
    htmlComponent,
    tsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
