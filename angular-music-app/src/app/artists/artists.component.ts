import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { ArtistService } from '../artist-service.service';
import {Artist} from '../artist';
import { Subject, Observable } from 'rxjs';
import {Router} from '@angular/router';
import {GlobalArtist} from '../global-artist';
import { DataTableDirective } from 'angular-datatables';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
  //providers: [GlobalArtist]
})
export class ArtistsComponent implements OnInit, OnDestroy {
  artists: Artist[];
  oArtists: Observable<Artist[]>;
  gArtist: Artist;
  @ViewChild(DataTableDirective)
  //private datatableElement: DataTableDirective;
  
  
  private datatableElement: DataTableDirective;
  constructor(private artistService: ArtistService, private router: Router, private globalArtist: GlobalArtist) { this.gArtist = globalArtist.dirtyArtist;  }

  
  
  // dtOptions: DataTables.Settings = {};
  dtOptions: any = {};
  dtTrigger = new Subject();
  

  ngOnInit() {
    //debugger;
    this.dtOptions = {
      //paging: true,
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthChange: false,
      select: true
      //stateSave: true,
      //displayStart: 0
      //ordering: false     
      
    }

    //this.artists = this.getArtists();
    this.getArtists().subscribe(_ => {
      console.log('global artist: ',this.gArtist);
      if (this.gArtist != null){
        var startIndex = 0;
          var pageIndex = 0;
        for (let index in this.artists){         

          var pg = Math.floor(((+index) / this.dtOptions.pageLength) +1);
          //console.log('pg: ', pg);
          //console.log('startIndex: ', startIndex);
          //console.log('pageIndex: ', pageIndex);

          if (pg !== pageIndex){
            //debugger;
            pageIndex = pg;
            startIndex = +index;
            //console.log('Changed startIndex: ', startIndex);
            //console.log('Changed pageIndex: ', pageIndex);
          }
          if (this.artists[index].ArtistName === this.gArtist.ArtistName){
            debugger;
            //console.log('New Artist pgindex: ', pageIndex);
            //console.log('New Artist startIndex: ', startIndex);
            this.dtOptions.displayStart = startIndex;
            //this.dtOptions.selectRow = true;
            
          }
        }
      }
    });
    //this.setTable();
    
    
    //var x = this.artists;
    //debugger;
  }

  // ngAfterViewInit(): void {
  //   debugger;
  //   this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //     dtInstance
  //       .on('user-select', function (e, dt, type, cell, originalEvent) {
  //         debugger;
  //         if ($(originalEvent.target).index() === 0) {
  //           e.preventDefault();
  //         }
  //       });
  //       var d = dtInstance.data().each((item, ind) => {console.log('item:', item); console.log('index:', ind);});
  //       debugger;

  //   });
  // }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
    
  }


  getArtists(): Observable<void> {
    //debugger;
    return this.artistService.getArtists().pipe(map((artists) => {this.artists = artists; this.dtTrigger.next()}));
  }

  addArtist(ArtistName: string): void {    
    
    this.artistService.addArtist({ArtistName} as Artist)
      .subscribe(artist => {
        this.artists.push(artist);
        //this.globalArtist.dirtyArtist = artist;
        //debugger;
      });
  }

  // dtInstanceCallBack(datatableElement: DataTableDirective): void{
  //   debugger;
  // }
 
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
    //debugger;
    this.router.navigate([`./artist-details/${id}`]);

  }

  // setTable(): void{
  //   debugger;
  //   if (this.gArtist != null){
  //     if (this.datatableElement.dtInstance != null)
  //     {
  //       this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>{
  //         debugger;
  //         var tableData = dtInstance.data().each((item, indx) => {
    
  //         });
  //       });
  //     }
  //     else{
  //       // this.artists.forEach(a => {
  //       //   if (a.ArtistName === this.gArtist.ArtistName){
  //       //     debugger;
  //       //     this.dtOptions.displayStart = a.id;
  //       //   }
  //       //   else{
  //       //     debugger;
  //       //     this.dtOptions.displayStart = 0;
  //       //   }
  //       // });
        
  //     }
  //   }

  // }

}
