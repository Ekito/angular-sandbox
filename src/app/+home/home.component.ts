
import { Component, OnInit } from '@angular/core';

import { Auth, IUser } from '../shared/auth';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

    title = 'Welcome to the geek breakfast!';

    authenticated: boolean;
    profile: IUser;


    constructor(private _auth: Auth) { }

    ngOnInit() {
        this._auth.isAuthenticated()
            .subscribe((authenticated) => {
                this.authenticated = authenticated;
            });

        this._auth.getProfile()
            .subscribe((profile) => this.profile = profile);
    }

    login() {
        this._auth.login();
    }

    logout() {
        this._auth.logout();
    }
}
