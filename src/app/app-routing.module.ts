import { BalmsComponent } from './balms/balms.component';
import { CoconutAndClayComponent } from './coconutAndClay/coconutAndClay.component';
import { BathAndBodyComponent } from './bathAndBody/bathAndBody.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FAQComponent } from './faq/faq.component';
import { TraditionalSoapComponent } from './traditional-soap/traditional-soap.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'faq', component: FAQComponent},
    {path: 'traditional', component: TraditionalSoapComponent},
    {path: 'bathandbody', component: BathAndBodyComponent},
    {path: 'coconutandclay', component: CoconutAndClayComponent},
    {path: 'balms', component: BalmsComponent},
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
