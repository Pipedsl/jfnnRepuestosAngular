import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { LoginRequest } from '@root/auth/interface/auth.interface';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule],
  providers: [MessageService] ,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router){}

  login() {
    const loginRequest: LoginRequest = { email: this.email, password: this.password };
    this.authService.login(loginRequest).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        console.log({'its work': response});
        this.router.navigate(['/dashboard']);
      }
    );
  }
}
