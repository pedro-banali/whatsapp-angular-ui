import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationListComponent } from './conversation-list.component';

describe('Conversation.ListComponent', () => {
  let component: ConversationListComponent;
  let fixture: ComponentFixture<ConversationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the attribute conversationList', () => {
  expect(component.conversationList).toBeTruthy();
  });
});
