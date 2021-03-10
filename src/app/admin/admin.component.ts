import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../assets/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isSubmitted: Boolean;
  displayName: any;
  pageTitle: string;

  constructor(private router: Router, private authService: AuthService) {
    this.isSubmitted = true;
    this.displayName = localStorage.getItem('displayname');
    this.pageTitle = `Welcome back ${this.displayName}!`;
  }

  ngOnInit(): void {    
  }

  // logging out user, clear all localstorage then take user to login page
  logout(){
    this.isSubmitted = false;
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}
