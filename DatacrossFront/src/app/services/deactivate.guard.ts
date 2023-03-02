import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardService } from './guard.service';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanActivate {
  constructor(private auth: GuardService , private router: Router){}
  canActivate( route:ActivatedRouteSnapshot , state:RouterStateSnapshot): boolean {
    if(this.auth.Deactivate()){
      // this.router.navigate(['/login']);
      alert("Would you like to Logout")
      return false;
    }
    else {
      // this.router.navigate(['/login']);
      return true;
    }
}
}
