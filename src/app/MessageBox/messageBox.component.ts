import {Component, OnInit, Output, EventEmitter, Input} from "@angular/core";
import {MessageService} from "../Message/message.service";
import {Message} from "../Message/message";
import {Observable} from "rxjs";
import {User} from "../User/user";
import {UserService} from "../User/user.service";


@Component({
  selector: 'message-box',
  templateUrl: './messageBox.component.html',
  styleUrls: ['./messageBox.component.css']
})
export class MessageBoxComponent implements OnInit{

  message = new Message('','');

  @Output() messageEvent = new EventEmitter<string>();
  //@Output messageChanged = new EventEmitter<string>();  //TODO: Pokombinowac z tymi eventami
  messages: Observable<Message[]>;
   constructor(private messageService: MessageService, private userService: UserService) {

  }

  ngOnInit(): void {
    console.log(this.messages = this.messageService.getAllMessages());
    this.messages = this.messageService.getAllMessages();
    console.log("...............");
    console.log(this.messages);
    //this.message.emit(this.messages['0']['name']);
  }



  sendMessage(text: string) {
    this.message.userName = this.user.name;
    this.message.text = text;
    this.messageService.sendMessage(this.message);
    this.messageService.getAllMessages();
  }





}
