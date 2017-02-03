import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { ThingsHttpService } from './things-http.service';

@Injectable()
export class ThingsService {

    //Initialize things with some data
    things = [
        'Thing 1',
        'Thing 2',
        'Thing 3'
    ];

    things$ = new ReplaySubject<Array<string>>(1);

    constructor(private _thingsHttpService: ThingsHttpService) {
    }

    all(): Observable<Array<string>> {
        this._thingsHttpService.all()
            .subscribe((upToDateThings) => {
                this.things$.next(upToDateThings);
            });

        this.things$.next(this.things);

        return this.things$;
    }
}