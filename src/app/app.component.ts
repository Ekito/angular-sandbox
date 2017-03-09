import { Component, OnInit } from '@angular/core';

import { Auth, IUser } from './shared/auth';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Welcome to the geek breakfast!';

    authenticated: boolean;
    profile: IUser;

    constructor(private _auth: Auth) {

    }

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
