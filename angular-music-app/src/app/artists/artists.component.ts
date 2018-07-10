import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArtistService } from '../artist-service.service';
import {Artist} from '../artist';
import { Subject } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artists: Artist[];
  constructor(private artistService: ArtistService, private router: Router) { }

  
  
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  ngOnInit() {
    //debugger;
    this.dtOptions = {
      //paging: true,
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthChange: false,
      //ordering: false     
      
    }

    this.getArtists();
    
    
    //var x = this.artists;
    //debugger;
  }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }


  getArtists(): void {
    //debugger;
    this.artistService.getArtists()
    .subscribe(artists => 
      {
        this.artists = artists;
        this.dtTrigger.next();
      
      });
  }

  addArtist(ArtistName: string): void {    
    
    this.artistService.addArtist({ArtistName} as Artist)
      .subscribe(artist => {
        this.artists.push(artist);
      });
  }
 
  // addArtist(artist: Artist): void {    
    
  //   this.artistService.addArtist(artist)
  //     .subscribe(artist => {
  //       this.artists.push(artist);
  //     });
  // }
 
  deleteArtist(artist: Artist): void {
    this.artists = this.artists.filter(a => a !== artist);
    this.artistService.deleteArtist(artist).subscribe();
  }

  selectRow(id: number): void{
    debugger;
    this.router.navigate([`./artist-details/${id}`]);

  }

}
