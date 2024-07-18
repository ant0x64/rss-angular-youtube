import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import {
  FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators,
} from '@angular/forms';

import {
  MatError, MatFormField, MatLabel,
} from '@angular/material/form-field';

import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { selectIsAuth } from '@/store/selectors';
import { login } from '@/store/actions';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-page-auth',
  templateUrl: 'auth.page.html',
  styleUrl: 'auth.page.scss',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    MatInputModule,
    MatFormField,
    MatLabel,
    MatError,
    ReactiveFormsModule,
    ButtonComponent,
  ],
})
export class AuthPage implements OnInit {
  form!: FormGroup;

  constructor(
    private store: Store,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  authorize() {
    this.store.dispatch(
      login({
        auth: {
          login: this.form.value.login,
          password: this.form.value.password,
        },
      }),
    );
  }

  ngOnInit() {
    this.store.select(selectIsAuth).pipe().subscribe((isAuth) => {
      if (isAuth) {
        this.router.navigate(['/']);
      }
    });

    this.form = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}
