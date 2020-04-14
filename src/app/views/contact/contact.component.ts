import { Component, OnInit } from '@angular/core';
import { GroupedObservable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { ConnectionService } from '../../services/connection-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    reason: new FormControl(''),
  });

  constructor(private connectionService: ConnectionService) {
   }


  ngOnInit(): void {
  }

   onClickSubmit() {
     console.log('On Click Submission: ' + this.contactForm.value + '\n\n\n\n');
     this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      console.log('Your message has been sent.');
      this.contactForm.reset();
     });
   }

}
