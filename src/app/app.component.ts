import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-primeiro-app';
  userName = 'Paulo';
  userAge = 25;
  items: string[] = ['home', 'about', 'services', 'contact'];
  receivedMessage: string = '';

  onReceivedMessage(msg: string) {
    this.receivedMessage = msg;
    console.log('Message received from HomeComponent:', msg);
  }

}
