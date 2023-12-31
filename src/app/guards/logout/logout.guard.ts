import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    const tgUser = sessionStorage.getItem('tgUser');
    if (tgUser != null || tgUser != '') {
      this.router.navigate(['internal/dashboard']);
      return false;
    } else {
      this.router.navigate(['full']);
    }
    return true;
  }
  
}
