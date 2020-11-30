import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Quote } from './quote';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getRandomQuotes(){
    return this.httpClient.get<Quote>('https://quote-garden.herokuapp.com/api/v2/quotes/random').pipe(
      map((data: any) => {
          return data.quote;
      })
    );
  }

  public getAuthorQuotes(author){
    const params = new HttpParams()
            .set('author', author);

    return this.httpClient.get<Quote>('https://quote-garden.herokuapp.com/api/v2/authors/' + {params} + '?page=1&limit=10').pipe(
      map((data: any) => {
          console.log(data.quotes)
          return data.quotes;
      })
    );
  }
}
