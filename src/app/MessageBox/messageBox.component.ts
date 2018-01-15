import {Component, OnInit, Input} from "@angular/core";
import {MessageService} from "../Message/message.service";
import {Message} from "../Message/message";
import {Observable} from "rxjs";
import {UserService} from "../User/user.service";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {setInterval} from "timers";


@Component({
  selector: 'message-box',
  templateUrl: './messageBox.component.html',
  styleUrls: ['./messageBox.component.css']
})
export class MessageBoxComponent implements OnInit{

  message = new Message('','');
  @Input() user: string;
  messages: Observable<Message[]>;
  disp: "";
  i = 0;
   constructor(private messageService: MessageService) {
     setInterval(() => { this.update(); }, 500 * 10);
  }

  ngOnInit(): void {
    this.messages = this.messageService.getAllMessages();
  }

  sendMessage(text: string) {
    this.message.userName = this.user;
    this.message.text = text;
    this.messageService.sendMessage(this.message);
    this.update();
  }


  private update() {
    this.disp = "";
    this.messages = this.messageService.getAllMessages();
    this.messages.subscribe(
      data => {data.forEach((message) => {
        this.disp += message['userName'] + ": " + message['text'] + "\n";
      })}
    )
  }
}
