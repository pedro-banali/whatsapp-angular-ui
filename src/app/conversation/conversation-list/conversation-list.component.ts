import { ConversationListService } from './conversation-list.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wa-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.scss']
})
export class ConversationListComponent implements OnInit {
  conversationList: Subscription;
  constructor(public conversationListService: ConversationListService) { }

  ngOnInit() {
    this.conversationListService.conversations().subscribe( data => this.conversationList = data);
  }

}
