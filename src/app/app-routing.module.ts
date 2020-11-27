import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesComponent } from './services/services.component'
import { QuoteComponent } from './quote/quote.component';
import { CompanyComponent } from './company/company.component'

const routes: Routes = [
  { path: 'quote', component: QuoteComponent },
  { path: '', component: HomePageComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'services', component: ServicesComponent }
  // { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
