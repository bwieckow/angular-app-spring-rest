import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./User/user.service";
import {MessageBoxComponent} from "./MessageBox/messageBox.component";
import {MessageService} from "./Message/message.service";


@NgModule({
  declarations: [
    AppComponent,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
