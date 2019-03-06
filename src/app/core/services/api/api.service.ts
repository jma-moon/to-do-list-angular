import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  public getData<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

  public postData<T>(url: string, body: Object): Observable<T> {
    return this.httpClient.post<T>(url, body);
  }

  public putData<T>(url: string, body: Object): Observable<T> {
    return this.httpClient.put<T>(url, body);
  }

  public deleteData<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(url);
  }

}
