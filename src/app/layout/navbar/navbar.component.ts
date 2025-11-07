import { Component } from '@angular/core';
import { Home, LayoutDashboard, LogOut, LogIn, ShoppingBag, User, ShoppingCart, LucideAngularModule } from 'lucide-angular';
import { AuthService } from '../../core/services/auth.service';
import { CartComponent } from '../../components/cart/cart.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, CartComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  auth: AuthService;
  readonly icons = { Home, User, ShoppingCart, LayoutDashboard, LogOut, LogIn, ShoppingBag };
  constructor(auth: AuthService) { this.auth = auth; }
}
