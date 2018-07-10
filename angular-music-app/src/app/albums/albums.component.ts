import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album-service.service';
import { Album } from '../album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(private albumService: AlbumService) { }
  albums: Album[];

  ngOnInit() {

    this.getAlbums();
  }

  getAlbums():void{
    this.albumService.getAlbums().subscribe(albums => this.albums = albums);
  }

}
