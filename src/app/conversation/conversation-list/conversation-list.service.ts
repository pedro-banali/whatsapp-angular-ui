import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConversationListService {
  private conversationList = [];
  constructor() {
      this.conversationList = [{id: 1,
        isGroup: false,
        groupName: 'N/A',
        contactName: 'John',
        lastMessage: 'Hello how are you doing',
        picture: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
       },
       {id: 2,
        isGroup: false,
        groupName: 'N/A',
        contactName: 'James',
        lastMessage: 'Can you borrow me that book?',
        picture: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
       },
       {id: 3,
        isGroup: true,
        groupName: 'The creators group',
        contactName: '',
        lastMessage: 'I like that approach',
        picture: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
       }];

       setTimeout(() => {this.conversationList.push({id: 4,
        isGroup: false,
        groupName: 'N/A',
        contactName: 'John',
        lastMessage: 'Hello how are you doing',
        picture: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
       }); }, 3000);
   }

  conversations(): Observable<any> {
    return of(this.conversationList);
  }
}
