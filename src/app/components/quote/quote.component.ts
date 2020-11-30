import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  @Input() quote: Quote;
  public quotes: [] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  getAuthorQuote(author) {
    this.apiService.getAuthorQuotes(author).subscribe((data)=>{
      this.quotes = data;
    });
  }

}
