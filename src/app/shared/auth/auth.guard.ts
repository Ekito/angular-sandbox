import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    CanActivateChild,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { MdSnackBar } from '@angular/material';

import { Auth } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private _router: Router,
        private _auth: Auth,
        private _snackBar: MdSnackBar) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        let url: string = state.url;

        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(route, state);
    }

    checkLogin(url: string): Observable<boolean> {

        return this._auth.isAuthenticated()
            .do((authenticated) => {
                if (!authenticated) {
                    this._snackBar.open('Login required', null, {
                        duration: 1000,
                    });
                }
            })
            .first();
    }

}
