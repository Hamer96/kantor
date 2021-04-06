
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HTTPService } from './serwisy/http.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [HTTPService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
