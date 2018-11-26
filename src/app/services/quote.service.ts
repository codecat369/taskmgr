import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { Quote } from '../domain/quote.model';
import { debug} from '../utils/debug.util';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: Http, @Inject('BASE_CONFIG') private config) {

  }
  getQuote(): Observable<Quote> {
    const uri = `${this.config.apiUri}/quotes/${Math.floor(Math.random() * 10)}`;
    return this.http.get(uri).pipe(
      debug('QuoteService'),
      map(res => res.json() as Quote)
    );
  }
}

