import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss']
})
export class InfoSectionComponent implements OnInit {
  @Input() imagePath: string;
  @Input() subHead: string;
  @Input() sectTitle: string;
  @Input() sectOrientation: string;
  @Input() themeColor: string;

  constructor() { }

  ngOnInit(): void {
    console.log('imagePath :' + this.imagePath);
  }

}
