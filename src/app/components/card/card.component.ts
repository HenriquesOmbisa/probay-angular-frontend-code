import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule, ImageOff, ShoppingBag } from 'lucide-angular';
@Component({
  selector: 'app-card',
  imports: [LucideAngularModule, CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  icons = { ImageOff, ShoppingBag };
  @Input() product!: { name: string; price: number; image: string };
  @Output() addToCart = new EventEmitter<void>();

  handleAddToCart() {
    this.addToCart.emit();
  }
}
