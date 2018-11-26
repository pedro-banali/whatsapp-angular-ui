import { ConversationListService } from './conversation-list/conversation-list.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationListComponent } from './conversation-list/conversation-list.component';


@NgModule({
  declarations: [ConversationListComponent],
  imports: [
    CommonModule
  ],
  providers: [ConversationListService],
  exports: [ConversationListComponent]
})
export class ConversationModule { }
