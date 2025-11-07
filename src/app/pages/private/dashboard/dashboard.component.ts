import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, BarChart2, Package, ShoppingBag, PlusCircle } from 'lucide-angular';

@Component({
  selector: 'app-dashboard',
  imports: [LucideAngularModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  icons = { BarChart2, Package, ShoppingBag, PlusCircle };
  visits = 0;
  today = new Date();

  ngOnInit() {
    // Simula contagem de visitas (poderia vir de API)
    const randomVisits = Math.floor(Math.random() * 500) + 100;
    this.animateCount(randomVisits);
  }

  animateCount(target: number) {
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      this.visits += step;
      if (this.visits >= target) {
        this.visits = target;
        clearInterval(interval);
      }
    }, 30);
  }
}
