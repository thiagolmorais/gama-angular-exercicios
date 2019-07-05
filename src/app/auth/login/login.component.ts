import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = null;
  password = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.email, this.password)
      .subscribe(
        (value: any) => {
          alert('Usuário logado com sucesso');
          localStorage.setItem('token', value.idToken);

          this.authService.setUser({
            email: value.email,
          });
        },
    (error) => {
      switch (error.error.error.message) {
        case 'EMAIL_NOT_FOUND':
          alert('E-mail não encontrado');
          break;
        case 'INVALID_PASSWORD':
          alert('Senha inválida');
          break;
        default:
          alert('Houve um erro');
          break;
      }
    });
  }
}
