import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'quote-generator';
  public quote: Quote = {
      quoteText: '',
      quoteAuthor: '',
      quoteGenre: ''
  };

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.getRandomQuote();
  }

  getRandomQuote() {
    this.apiService.getRandomQuotes().subscribe((data)=>{
      this.quote = data;
    });
  }

  backToList() {
    this.apiService.hasAuthor = false;
  }

}
