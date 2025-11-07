import { CurrencyPipe } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { LucideAngularModule, X, ShoppingBag } from 'lucide-angular';

@Component({
  selector: 'app-cart',
  imports: [LucideAngularModule, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  isOpen = false;
  icons = { X, ShoppingBag };

  cartItems = [
    { name: 'Camiseta Azul', price: 29.9 },
    { name: 'Tênis Branco', price: 89.9 },
  ];

  toggleCart() {
    this.isOpen = !this.isOpen;
  }

  closeCart() {
    this.isOpen = false;
  }

  get total() {
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeCart();
  }
}