import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const things = [
    'Thing 1',
    'Thing 2',
    'Thing 3',
    'Thing 4',
    'Thing 5'
];

@Injectable()
export class ThingsService {

    all(): Observable<Array<string>> {
        return Observable.of(things);
    }
}