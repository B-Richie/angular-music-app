import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
//import {ModalService} from 'angular-bootstrap-modal'
//import {PagingService} from './paging-service.service';


import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';
import { TracksComponent } from './tracks/tracks.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { TrackDetailsComponent } from './track-details/track-details.component';
import {ArtistDetailsComponent} from './artist-details/artist-details.component';
import { AppRoutingModule } from './/app-routing.module';
import {DataTablesModule} from 'angular-datatables';
import {ReactiveFormsModule} from '@angular/forms';
import {GlobalArtist} from './global-artist';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    AlbumsComponent,
    TracksComponent,
    AlbumDetailsComponent,
    TrackDetailsComponent,
    ArtistDetailsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    AppRoutingModule,
    DataTablesModule,
    NgbModule.forRoot(),
    //ModalService
  ],
  providers: [GlobalArtist],
  bootstrap: [AppComponent]
})
export class AppModule { }
