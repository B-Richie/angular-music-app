import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
import { Track } from './track';
import {handleError} from './error-handling';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({ providedIn: 'root' })
export class TrackService {
 
  private tracksUrl = 'api/tracks';
 
  constructor(
    private http: HttpClient) { }
 

  getTracks (): Observable<Track[]> {
    return this.http.get<Track[]>(this.tracksUrl)
      .pipe(
        
        catchError(handleError('getTracks', []))
      );
  } 

  getTrack(id: number): Observable<Track> {
    const url = `${this.tracksUrl}/${id}`;
    return this.http.get<Track>(url).pipe(
      
      catchError(handleError<Track>(`getTrack id=${id}`))
    );
  }
 
  searchTracks(term: string): Observable<Track[]> {
    if (!term.trim()) {

      return of([]);
    }
    return this.http.get<Track[]>(`${this.tracksUrl}/?name=${term}`).pipe(
      
      catchError(handleError<Track[]>('searchTracks', []))
    );
  }
 
  addTrack (track: Track): Observable<Track> {
    return this.http.post<Track>(this.tracksUrl, track, httpOptions).pipe(
      
      catchError(handleError<Track>('addTrack'))
    );
  }
 

  deleteTrack (track: Track | number): Observable<Track> {
    const id = typeof track === 'number' ? track : track.TrackID;
    const url = `${this.tracksUrl}/${id}`;
 
    return this.http.delete<Track>(url, httpOptions).pipe(
      
      catchError(handleError<Track>('deleteTrack'))
    );
  }
 
  updateTrack (track: Track): Observable<any> {
    return this.http.put(this.tracksUrl, track, httpOptions).pipe(
      
      catchError(handleError<any>('updateTrack'))
    );
  } 

}
