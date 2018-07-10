import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
import { Artist } from './artist';
//import {handleError} from './error-handling';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({ providedIn: 'root' })
export class ArtistService {
 
  private artistUrl = 'api/artists';
 
  constructor(
    private http: HttpClient) { }
 

  getArtists (): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artistUrl)
      .pipe(
        
        catchError(this.handleError('getArtists', []))
      );
  } 

  getArtist(id: number): Observable<Artist> {
    const url = `${this.artistUrl}/${id}`;
    return this.http.get<Artist>(url).pipe(
      
      catchError(this.handleError<Artist>(`getArtist id=${id}`))
    );
  }
 
  searchArtist(term: string): Observable<Artist[]> {
    if (!term.trim()) {

      return of([]);
    }
    return this.http.get<Artist[]>(`${this.artistUrl}/?name=${term}`).pipe(
      
      catchError(this.handleError<Artist[]>('searchArtist', []))
    );
  }
 
  addArtist (artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.artistUrl, artist, httpOptions).pipe(
      
      catchError(this.handleError<Artist>('addArtist'))
    );
  }
 

  deleteArtist (artist: Artist | number): Observable<Artist> {
    const id = typeof artist === 'number' ? artist : artist.id;
    const url = `${this.artistUrl}/${id}`;
 
    return this.http.delete<Artist>(url, httpOptions).pipe(
      
      catchError(this.handleError<Artist>('deleteArtist'))
    );
  }
 
  updateArtist (artist: Artist): Observable<any> {
    return this.http.put(this.artistUrl, artist, httpOptions).pipe(
      
      catchError(this.handleError<any>('updateArtist'))
    );
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      console.error(error); 
      
      return of(result as T);
    };
  }

}
