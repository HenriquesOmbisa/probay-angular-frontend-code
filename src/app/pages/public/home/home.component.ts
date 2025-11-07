import { Component } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = [
    { name: 'Camiseta Azul', price: 29.9, image: '' },
    { name: 'Tênis Branco', price: 89.9, image: '' },
    { name: 'Boné Preto', price: 19.9, image: '' },
  ] as { name: string; price: number; image: string }[];

  addProductToCart(product: any) {
    console.log('Adicionado ao carrinho:', product.name);
    // Aqui podes integrar com CartService mais tarde
  }
}
