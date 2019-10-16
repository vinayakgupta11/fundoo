import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import{AuthService} from '../services/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private auth: AuthService)
  {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if ( this.auth.isLoggednIn() ){
        // Token from the LogIn is avaiable, so the user can pass to the route
        return true;
      }
      else  {
        alert("You are currently not logged in, please provide Login!")
        this.router.navigate( ["/login"] );
        return false;

      }
   

  }
}
