import { Component, OnInit } from '@angular/core';

import { Auth, IUser } from './shared/auth';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    profile: IUser;

    constructor(private _auth: Auth) {
    }

    ngOnInit() {
        this._auth.getProfile()
            .subscribe((profile) => this.profile = profile);
    }

}
