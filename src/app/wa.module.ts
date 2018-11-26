import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './wa-routing.module';
import { AppComponent } from './wa.component';
import { ConversationModule } from './conversation/conversation.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConversationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
