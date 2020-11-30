import { Component, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {

  @Input() quote: Quote;
  @Input() showAuthor: boolean = true;

  constructor(public apiService: ApiService) { }

}
