﻿import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthService} from "../services/auth.service";

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private router: Router,
              private auth: AuthService,) {
  }

  canActivate() {
    if (this.auth.isAdmin()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
