import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.loading = true;

    // Simula criação de conta
    setTimeout(() => {
      this.loading = false;
      alert('Conta criada com sucesso!');
      this.router.navigate(['/login']);
    }, 1000);
  }
}
