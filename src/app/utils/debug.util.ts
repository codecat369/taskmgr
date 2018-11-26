import { environment } from '../../environments/environment';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

import { filter, map, take, toArray } from 'rxjs/operators';


export const debug = (msg: string) => <T>(source: Observable<T>) => new Observable<T>(
    observer => {
        return source.subscribe(
            {
                next(x) {
                    if (!environment.production) {
                        console.log(msg, x);
                    }
                    observer.next(x);
                },
                error(err) {
                    if (!environment.production) {
                        console.log('ERROR>>', msg, err);
                    }
                    observer.error(err);
                },
                complete() {
                    if (!environment.production) {
                        console.log(msg, 'Complete!');
                    }
                    observer.complete();
                }
            }
        );
    }
);
