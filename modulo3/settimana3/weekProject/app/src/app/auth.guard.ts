import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,} from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from './Authservices/auth.service';


export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):| Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
    | boolean | UrlTree {
        return this.authService.isLoggedIn$.pipe(
            take(1), map((isLoggedIn) => {

              if (isLoggedIn) {

                return true;

              }

              return false;

            })

          );

      }

}
