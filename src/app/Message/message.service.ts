import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Message} from "./message"
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";

@Injectable()
export class MessageService {
  constructor(private httpClient: HttpClient) {
  }


  getAllMessages(): Observable<any>{
    return this.httpClient.get('http://localhost:8090/message/displayAll');
  }


  sendMessage(message: Message) {
    return this.httpClient.post('http://localhost:8090/message/sendJSON', message)
      .subscribe(
        data => {
          console.log("data");
          console.log(data);
          this.getAllMessages();
        },
        err => {
          console.log("err");
          console.log(err);
          this.getAllMessages();
        }
      )
  }

  getVehicles(){
    return Observable.interval(6000).map(i=> [{name: 'car 1'},{name: 'car 2'}])
  }
}
