import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,} from '@angular/router';
import { Observable } from 'rxjs';

export class UserDetailGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userHasAccess = false;
    if (!userHasAccess) {

    }
    return userHasAccess;
  }
}
