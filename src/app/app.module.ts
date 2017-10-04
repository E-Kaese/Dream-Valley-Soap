import { BathAndBodyComponent } from './bathAndBody/bathAndBody.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FAQComponent } from './faq/faq.component';
import { TraditionalSoapComponent } from './traditional-soap/traditional-soap.component';
import { CardComponent } from './card/card.component';
import { ProductsComponent } from './products/products.component';
import { CoconutAndClayComponent } from './coconutAndClay/coconutAndClay.component';
import { BalmsComponent } from './balms/balms.component';

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
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FAQComponent,
    TraditionalSoapComponent,
    CardComponent,
    BathAndBodyComponent,
    ProductsComponent,
    CoconutAndClayComponent,
    BalmsComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
