import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../assets/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  pageTitle: string;

  constructor(private authService: AuthService, private router: Router) {
    this.pageTitle = 'Let\'s log you in!';
  }

  ngOnInit(): void {
  }

  signIn(valUsername: any, valPassword: any): void {
    if (valUsername !== '' && valPassword !== '') {
      // signing in user using the AuthService
      this.authService.signIn(valUsername, valPassword);

      // redirect users to /admin for successful attempt
      this.router.navigateByUrl('/admin');
    } else {

      // Generic
      alert('You\'re missing something, please try again!');
    }
  }
}
