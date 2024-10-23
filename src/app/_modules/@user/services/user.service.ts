import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = '/users';
  constructor(private httpService: HttpService) { }

  getUsers(params:any) {
    return this.httpService.get(`${this.userUrl}${params}`);
  }

}
