import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-subhead',
  templateUrl: './page-subhead.component.html',
  styleUrls: ['./page-subhead.component.scss']
})
export class PageSubheadComponent implements OnInit {
  @Input() copy: string;
  @Input() themeColor: string;

  constructor() { }

  ngOnInit(): void {
  }

}
