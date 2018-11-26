import { TestBed } from '@angular/core/testing';

import { ConversationListService } from './conversation-list.service';

describe('ConversationListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConversationListService = TestBed.get(ConversationListService);
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    const service: ConversationListService = TestBed.get(ConversationListService);
    const conversationListFunc = (data) => {
      console.log(data);
      expect(data).toEqual([{id: 1,
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
       }]);
    };

    service.conversations().subscribe(conversationListFunc).unsubscribe();
  });
});
