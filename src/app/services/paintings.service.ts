import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { PaintingsInterface } from '../interfaces/paintings.interface';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/paintings/';
  }

  getListPaintings(): Observable<PaintingsInterface[]> {
    return this.http.get<PaintingsInterface[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deletePainting(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  savePainting(painting: PaintingsInterface): Observable<PaintingsInterface> {
    return this.http.post<PaintingsInterface>(`${this.myAppUrl}${this.myApiUrl}`, painting);
  }

  getPainting(id: number): Observable<PaintingsInterface> {
    return this.http.get<PaintingsInterface>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updatePainting(id: number, painting: PaintingsInterface): Observable<PaintingsInterface> {
    return this.http.put<PaintingsInterface>(`${this.myAppUrl}${this.myApiUrl}${id}`, painting);
  }
}