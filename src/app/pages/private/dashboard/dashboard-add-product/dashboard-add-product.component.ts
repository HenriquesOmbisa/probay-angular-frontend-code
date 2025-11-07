import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlusCircle, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-dashboard-add-product',
  imports: [ReactiveFormsModule, LucideAngularModule],
  templateUrl: './dashboard-add-product.component.html',
  styleUrl: './dashboard-add-product.component.css'
})
export class DashboardAddProductComponent {
  icons = { PlusCircle };
form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      image: [''],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    this.loading = true;
    setTimeout(() => {
      alert('Produto adicionado com sucesso!');
      this.router.navigate(['/dashboard']);
    }, 1000);
  }
}
