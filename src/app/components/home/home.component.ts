import { Component, Input, Output, signal, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string = "Henriques Ombisa";
  counter = signal(0);
  @Input() items!: string[];
  @Input() userAge!: number;
  @Input() userName!: string;
  @Output() send = new EventEmitter<string>();
  

  incrementCounter(): void {
    this.counter.update(v => v + 1);
  }

  sendMessage(): void {
    const message = `Olá ${this.userName}, você tem ${this.userAge} anos!`;
    this.send.emit(message);
  }

  updateField(event: Event): void {
    const inputElement = event.target?.addEventListener('input', (e: any) => {
      this.name = e.target.value;
    });
  }
}
