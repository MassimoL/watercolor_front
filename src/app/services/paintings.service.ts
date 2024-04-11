import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Paintings } from '../interfaces/paintings.interface';

@Injectable({
  providedIn: 'root',
})
export class PaintingsService {

  private http = inject(HttpClient);
  public baseUrl = 'http://localhost:3000';

  constructor() {}

  getPainting(painting: number): Observable<Paintings>{
    return this.http.get<Paintings>(`${this.baseUrl}/paintings/${painting}`)
  }

  getAllPaintings(): Observable<Paintings[]> {
    return this.http.get<Paintings[]>(`${this.baseUrl}/paintings`);
  }

  deletePainting(painting: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/paintings/${painting}`).pipe(
      catchError((err) => of(false)),
      map((resp) => true)
    );
  }

  addPainting(painting: FormData): Observable<FormData> {
    return this.http.post<FormData>(`${this.baseUrl}/paintings`, painting);
  }
}
