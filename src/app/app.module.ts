import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LightboxModule } from 'angular2-lightbox';

import { AppComponent } from './app.component';
import { BalmsComponent } from './balms/balms.component';
import { BathAndBodyComponent } from './bathAndBody/bathAndBody.component';
import { CardComponent } from './card/card.component';
import { CoconutAndClayComponent } from './coconutAndClay/coconutAndClay.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FAQComponent } from './faq/faq.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { TraditionalSoapComponent } from './traditional-soap/traditional-soap.component';

import { AppRoutingModule } from './app-routing.module';
import { DatabaseService } from './database.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyAZ9y2T1lYy3_j1JSYikPswA3WfBmEbhYo',
  authDomain: 'dvsoap.firebaseapp.com',
  databaseURL: 'https://dvsoap.firebaseio.com',
  projectId: 'dvsoap',
  storageBucket: 'dvsoap.appspot.com',
  messagingSenderId: '699302150733'
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    LightboxModule,
  ],
  declarations: [
    AppComponent,
    BalmsComponent,
    BathAndBodyComponent,
    CardComponent,
    CoconutAndClayComponent,
    HomeComponent,
    FAQComponent,
    FooterComponent,
    NavbarComponent,
    ProductsComponent,
    TraditionalSoapComponent,
],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
