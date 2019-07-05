import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email = '';
  title = 'gama-angular-exercicios';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');

    if (token) {
      this.authService.verifyToken(token).subscribe((v: any) => {
        this.authService.setUser({
          email: v.users[0].email,
        });
      });
    }
    this.authService.currentUser.subscribe((v) => {
      console.log(v)
      if (v !== null) {
        this.email = v.email;
      } else {
        this.email = '';
      }
    });
    console.log(this.email)
  }

  logout() {
  }
}
