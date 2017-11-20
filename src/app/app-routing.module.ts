import { MetaGuard } from '@ngx-meta/core';
import { BalmsComponent } from './balms/balms.component';
import { CoconutAndClayComponent } from './coconutAndClay/coconutAndClay.component';
import { BathAndBodyComponent } from './bathAndBody/bathAndBody.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FAQComponent } from './faq/faq.component';
import { TraditionalSoapComponent } from './traditional-soap/traditional-soap.component';

const routes: Routes = [
    {
        path: '',
        canActivateChild: [MetaGuard],
        children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent, data: { meta: { title: 'Home' } } },
            { path: 'traditional', component: TraditionalSoapComponent, data: { meta: { title: 'Traditional Soap' } } },
            { path: 'coconutandclay', component: CoconutAndClayComponent, data: { meta: { title: 'Coconut & Clay Soap' } } },
            { path: 'bathandbody', component: BathAndBodyComponent, data: { meta: { title: 'Bath & Body' } } },
            { path: 'balms', component: BalmsComponent, data: { meta: { title: 'Balms' } } },
            { path: 'faq', component: FAQComponent, data: { meta: { title: 'FAQ\'s' } } },
            { path: '**', redirectTo: '/home', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
