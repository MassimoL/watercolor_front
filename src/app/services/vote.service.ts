import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private http = inject(HttpClient);
  private baseUrl: string = 'http://localhost:3000';

  constructor() { }

  public hasUserVoted(user_id: number, painting_id: number):Observable<any>{
   return this.http.get<boolean>(`${this.baseUrl}/hasvoted?user_id=${user_id}&painting_id=${painting_id}`);
  }

  public updateVotes(painting_id: number, value: number):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/paintings/updatevotes`, { painting_id: painting_id, votevalue: value });
  }

  public vote(user_id: number, painting_id: number):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/vote`, {user_id, painting_id});
  }
}
