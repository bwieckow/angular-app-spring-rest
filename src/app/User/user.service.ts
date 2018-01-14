import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./User";

@Injectable()
export class UserService {
  user: User = new User('','publicName','','');
  users: string[];
  constructor(private httpClient: HttpClient) {
  }

  getUsers(){
    this.httpClient.get('http://localhost:8090/api/all')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      )
  }

  getSingleUser(name: string): Observable<any> {
    return this.httpClient.get('http://localhost:8090/api/get', {
      params: new HttpParams().set("name", name)
    })

  }

  storeUsers(users: User) {
    return this.httpClient.post('http://localhost:8090/api/addJSON', users)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }
}
