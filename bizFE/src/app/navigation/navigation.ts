import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT, CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) {}

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({
      logoutParams: {
        returnTo: this.document.location.origin
      }
    });
  }
}
