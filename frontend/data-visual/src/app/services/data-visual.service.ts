import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class DataVisualService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  public getData(): Observable<any> {
    return this.http.get('http://localhost:4000/visualdata');
  }
}
