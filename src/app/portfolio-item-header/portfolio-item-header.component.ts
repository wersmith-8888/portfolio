import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-item-header',
  templateUrl: './portfolio-item-header.component.html',
  styleUrls: ['./portfolio-item-header.component.scss']
})
export class PortfolioItemHeaderComponent implements OnInit {
  @Input() pageTitle: string;
  @Input() themeColor: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
