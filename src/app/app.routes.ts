import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/public/register/register.component';
import { CheckoutComponent } from './pages/public/checkout/checkout.component';
import { LoginComponent } from './pages/public/login/login.component';
import { ProductComponent } from './pages/public/product/product.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './core/guards/auth.guard.service';
import { HomeComponent } from './pages/public/home/home.component';
import { DashboardAddProductComponent } from './pages/private/dashboard/dashboard-add-product/dashboard-add-product.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Rotas privadas (com guarda)
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'add-product', component: DashboardAddProductComponent },
    ]
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
