import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() pageTitle: string;
  @Input() subHead: string;
  @Input() sectionImage: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
