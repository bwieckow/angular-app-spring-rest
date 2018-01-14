import { Component } from '@angular/core';
import {User} from "./User/User";
import {UserService} from "./User/user.service";
import {Message} from "./Message/message";
import {MessageService} from "./Message/message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User('', '','','');
  isLoggedIn = false;
  constructor(private userService: UserService, private messageService: MessageService) {

  }

  login(name: string) {
    console.log("LOGIN...");
    this.userService.getSingleUser(this.user.name)
      .subscribe( data => {
        if (data['name'] === this.user.name) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      });
  }

  click() {
    console.log("app component msg changed");
  }



}
