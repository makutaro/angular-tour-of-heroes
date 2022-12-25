import { Component, OnInit } from '@angular/core'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  constructor(public messageService: MessageService) {}
  ngOnInit() {
  }

}
