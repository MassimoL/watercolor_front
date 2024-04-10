import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { BehaviorSubject, empty, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);
  private baseUrl: string = 'http://localhost:3000';
  public currentUser = signal<User>({
    user_id: 0,
    user_name:'',
    email: '',
    password: '',
    accessToken: ''
  });



  
  constructor() {
  }



  public register(user: User){
    return firstValueFrom(
      this.http.post<User>(`${this.baseUrl}/register`, user)
    );
  }

  public login(user: User) {
    return firstValueFrom(
      this.http.post<User>(`${this.baseUrl}/login`, user)
    );
  }



  async isMailRegistered(email: string) {
    try {
      const user: User[] = await firstValueFrom(
      this.http.get<User[]>(`${this.baseUrl}/users/${email}`));

      
      let userArray: any[] = [];
      if (Array.isArray(user) === false){
        userArray.push(user);
      };
      const isRegistered = userArray.length > 0;
      return isRegistered;
    } catch (error) {
      console.log(error);
      throw new Error('Error verifying email:' + error);
    }
  }

  isLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

}
