import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
 
import { Album } from './album';
import {handleError} from './error-handling';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({ providedIn: 'root' })
export class AlbumService {
 
  private ablumUrl = 'api/album';
 
  constructor(
    private http: HttpClient) { }
 

  getAlbums (): Observable<Album[]> {
    return this.http.get<Album[]>(this.ablumUrl)
      .pipe(
        
        catchError(handleError('getAlbums', []))
      );
  } 

  getAlbum(id: number): Observable<Album> {
    const url = `${this.ablumUrl}/${id}`;
    return this.http.get<Album>(url).pipe(
      
      catchError(handleError<Album>(`getAlbum id=${id}`))
    );
  }
 
  searchAlbums(term: string): Observable<Album[]> {
    if (!term.trim()) {

      return of([]);
    }
    return this.http.get<Album[]>(`${this.ablumUrl}/?name=${term}`).pipe(
      
      catchError(handleError<Album[]>('searchAlbums', []))
    );
  }
 
  addAlbum (album: Album): Observable<Album> {
    return this.http.post<Album>(this.ablumUrl, album, httpOptions).pipe(
      
      catchError(handleError<Album>('addAlbum'))
    );
  }
 

  deleteAlbum (album: Album | number): Observable<Album> {
    const id = typeof album === 'number' ? album : album.id;
    const url = `${this.ablumUrl}/${id}`;
 
    return this.http.delete<Album>(url, httpOptions).pipe(
      
      catchError(handleError<Album>('deleteAlbum'))
    );
  }
 
  updateAlbum (album: Album): Observable<any> {
    return this.http.put(this.ablumUrl, album, httpOptions).pipe(
      
      catchError(handleError<any>('updateAlbum'))
    );
  }
 
  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
 
  //     console.error(error); 
      
  //     return of(result as T);
  //   };
  //}
}