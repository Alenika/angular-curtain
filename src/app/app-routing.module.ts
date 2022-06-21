import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAuthComponent } from './pages/page-auth/page-auth.component';
import { PageCatalogComponent } from './pages/page-catalog/page-catalog.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';

const routes: Routes = [
  { path: '', component: PageMainComponent },
	{ path: 'error', component: PageErrorComponent },
	{ path: 'catalog', component: PageCatalogComponent },
	{ path: 'auth', component: PageAuthComponent },
	{ path: 'register', component: PageRegisterComponent },
	{ path: '**', redirectTo: '/error', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
