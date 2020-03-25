import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-quote',
  templateUrl: './testimonial-quote.component.html',
  styleUrls: ['./testimonial-quote.component.scss']
})
export class TestimonialQuoteComponent implements OnInit {
  @Input() themeColor: string;
  @Input() authorName: string;
  @Input() authorTitle: string;
  @Input() imagePath: string;

  constructor() { }

  ngOnInit(): void {
  }

}
