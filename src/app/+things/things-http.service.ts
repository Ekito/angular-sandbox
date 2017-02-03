import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ThingsHttpService {

    all() {
        //Fake http service with 2 seconds delayed response
        const things = [
            'Thing 1',
            'Thing 2',
            'Thing 3',
            'Thing 4',
            'Thing 5'
        ];
        return Observable.timer(2000)
            .map(() => {
                return things;
            });
    }
}