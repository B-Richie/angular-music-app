import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
 
import { Album } from './album';


//import {handleError} from './error-handling';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({ providedIn: 'root' })
export class AlbumService {
 
  private ablumUrl = 'api/albums';
 
  constructor(
    private http: HttpClient) { }
 

            // //this works with albums$ (observable) must return value
            // getAlbums (): Observable<Album[]> {
            //   return this.http.get<Album[]>(this.ablumUrl)
            //     .pipe(map((albums: Observable<Album[]>) => { return albums; }),
                  
            //       catchError(this.handleError('getAlbums', []))
            //     );
            // }


    //this works with pagedAlbums and albums$ (array and observable)
    getAlbums (): Observable<Album[]> {
      return this.http.get<Album[]>(this.ablumUrl)
        .pipe(map((albums) => { return albums}),
          
          catchError(this.handleError('getAlbums', []))
        );
    }

  // getAlbums (): Observable<Album[]> {
  //   return this.http.get<Album[]>(this.ablumUrl)
  //     .pipe(
  //       catchError(this.handleError('getAlbums', []))
  //     );
  // } 

  getAlbum(id: number): Observable<Album> {
    const url = `${this.ablumUrl}/${id}`;
    return this.http.get<Album>(url).pipe(
      
      catchError(this.handleError<Album>(`getAlbum id=${id}`))
    );
  }
 
  searchAlbums(term: string): Observable<Album[]> {
    if (!term.trim()) {

      return of([]);
    }
    return this.http.get<Album[]>(`${this.ablumUrl}/?AlbumName=${term}`).pipe(
      
      catchError(this.handleError<Album[]>('searchAlbums', []))
    );
  }
 
  addAlbum (album: Album): Observable<Album> {
    return this.http.post<Album>(this.ablumUrl, album, httpOptions).pipe(
      
      catchError(this.handleError<Album>('addAlbum'))
    );
  }
 

  deleteAlbum (album: Album | number): Observable<Album> {
    const id = typeof album === 'number' ? album : album.AlbumID;
    const url = `${this.ablumUrl}/${id}`;
 
    return this.http.delete<Album>(url, httpOptions).pipe(
      
      catchError(this.handleError<Album>('deleteAlbum'))
    );
  }
 
  updateAlbum (album: Album): Observable<any> {
    return this.http.put(this.ablumUrl, album, httpOptions).pipe(
      
      catchError(this.handleError<any>('updateAlbum'))
    );
  }
 
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      console.error(error); 
      
      return of(result as T);
    };
  }
}