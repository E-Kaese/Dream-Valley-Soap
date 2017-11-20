import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LightboxModule } from 'angular2-lightbox';
import { MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';

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

export function metaFactory(): MetaLoader {
  return new MetaStaticLoader({
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: 'Dream Valley Soap',
    defaults: {
      author: 'Ernst Kaese',
      title: 'Dream Valley Soap',
      // tslint:disable-next-line:max-line-length
      description: 'Dream Valley Soap makes soap, balms and creams. All our products are carefully handcrafted with quality natural oils and ingredients sourced locally.',
      // tslint:disable-next-line:max-line-length
      'og:image': 'https://firebasestorage.googleapis.com/v0/b/dvsoap.appspot.com/o/Images%2FDV-Logo-Rectangle.png?alt=media&token=03c51d87-e030-4ba6-b37c-489ae661e1c0',
      'og:type': 'website',
      'og:locale': 'en',
      // tslint:disable-next-line:max-line-length
      keywords: 'Dream Valley Soap, Handmade, Natural, South Africa, Worcester, Groenstoor, Greenstore, Western Cape, Soap, Traditional Soap, Coconut and Clay Soap'
    }
  });
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    LightboxModule,
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: (metaFactory)
    })
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
