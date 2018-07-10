import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlbumsComponent} from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { TracksComponent } from './tracks/tracks.component';
import { TrackDetailsComponent } from './track-details/track-details.component';

 
const routes: Routes = [
  { path: '', redirectTo: '/artists', pathMatch: 'full' },
  { path: '', component: ArtistsComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'artist-details/:id', component: ArtistDetailsComponent },
  { path: 'albums', component: AlbumsComponent },
  {path: 'album-details/:id', component: AlbumDetailsComponent},
  {path: 'tracks', component: TracksComponent},
  {path: 'track-details/:id', component: TrackDetailsComponent}

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}