import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs/Rx';

import { IUser } from './user.model';

const userMock = {
    name: 'John Doe',
    email: 'jdoe@ekito.fr'
}

@Injectable()
export class Auth {

    userProfile$ = new ReplaySubject<IUser>(1);

    constructor() {
        // init loggedIn status
        const profile = localStorage.getItem('profile');

        if (profile) {
            const user = JSON.parse(profile);
            this.userProfile$.next(user);
        } else {
            this.userProfile$.next(null);
        }
    }

    public login(): Promise<IUser> {

        return Promise.resolve(userMock) // Fake remote server call that should return an access token with minimal userProfile
            .then((user) => {
                localStorage.setItem('profile', JSON.stringify(user));
                this.userProfile$.next(userMock);
                return userMock;
            });
    };

    public logout(): Promise<void> {

        return Promise.resolve() // Eventually call asynchronous task to disconnect the user
            .then(() => {
                localStorage.removeItem('profile');
                this.userProfile$.next(null);
                return;
            });
    };

    public isAuthenticated(): Observable<boolean> {
        // Should also check that the token or cookie is not expired
        return this.userProfile$.map(user => !!user);
    };

    public getProfile(): Observable<IUser> {
        return this.userProfile$;
    }
}
