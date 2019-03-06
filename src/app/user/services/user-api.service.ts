import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from 'src/app/core/services/api/api.service';
import {environment} from 'src/environments/environment';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private url = environment.resource;

  constructor(private apiService: ApiService) {}

  public findAll(): Observable<any> {
    return this.apiService.getData(this.usersUrl);
  }

  public findById(id: number): Observable<any> {
    return this.apiService.getData(this.buildUsersUrlById(id));
  }

  public create(user: User): Observable<any> {
    return this.apiService.postData(this.usersUrl, user);
  }

  public update(user: User, id: number): Observable<any> {
    return this.apiService.putData(this.buildUsersUrlById(id), user);
  }

  public delete(id: number): Observable<any> {
    return this.apiService.deleteData(this.buildUsersUrlById(id));
  }

  public get usersUrl(): string {
    return `${this.url}users`;
  }

  public buildUsersUrlById(id: number): string {
    return `${this.usersUrl}/${id}`;
  }
}
