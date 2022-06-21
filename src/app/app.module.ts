import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from  '@angular/common/http';


import { AppComponent } from './app.component';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageCatalogComponent } from './pages/page-catalog/page-catalog.component';
import { PageAuthComponent } from './pages/page-auth/page-auth.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { CardProductComponent } from './components/card-product/card-product.component';

@NgModule({
  declarations: [
    AppComponent,
    PageMainComponent,
    PageErrorComponent,
    HeaderComponent,
    FooterComponent,
    PageCatalogComponent,
    PageAuthComponent,
    PageRegisterComponent,
    CardProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
