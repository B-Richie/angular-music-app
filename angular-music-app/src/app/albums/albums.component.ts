import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album-service.service';
import { Album } from '../album';
import { map, debounceTime, distinctUntilChanged, switchMap, mapTo, filter } from '../../../node_modules/rxjs/operators';
import { Observable, Subject, Observer, of } from '../../../node_modules/rxjs';
import {PagingService} from '../paging-service.service';
import {Pager} from '../pager';
import {flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(private albumService: AlbumService, private pagingService: PagingService) { 
    this.pager = new Pager();
    this.pager.CurrentPage = 1;
    this.pager.PageSize = 10;
    
  }
  albums: Album[];
  albums$: Observable<Album[]>;
  oAlbums$: any = [];
  //albums$: Album[];
  pagedAlbums: Album[];
  pager: Pager;
  //pager = new Pager();
  //page = 1;
  previousPage: any;
  pageLength: any;
  //maxSize = 10;
  startIndex = 0;
  endIndex = 0;
  arrayLength = 0;
  private searchTerms = new Subject<string>();


  ngOnInit() {
    debugger;
    //this.pageLength = 130;
    //this.pager.CurrentPage = this.page;
    //this.pager.PageSize = this.maxSize;
    //this.pager.CurrentPage = 1;
    //this.pager.PageSize = 10;

    // const subscript = this.searchTerms.pipe(
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   switchMap((term: string) => this.albumService.searchAlbums(term)),
    // );
    //this.setPage(this.page);
    this.albums$ = this.getAlbums().take(10);


    // this.getAlbums().subscribe(_ =>{



    //   this.setPage(this.pager.CurrentPage);
    // });
    // this.getAlbums().subscribe(_ => {

    //   var startIndex = 0;
    //   var pageIndex = 0;
    //   var endIndex = 0;
    //   //var maxSize = 0;
      
    //   for (let index in this.albums){
    //     //var pg = Math.floor(((+index) / this.pageLength) + 1);
    //     if (this.page !== pageIndex){
    //       pageIndex = this.page;
    //       startIndex = +index;
    //       endIndex = +index + this.maxSize;
    //     }
    //   }

    //   this.albums = this.albums.slice(startIndex, this.maxSize);
    // });
  }

  // getAlbums(){
  //   this.albumService.getAlbums().pipe(map((albums: Observable<Album[]>) => {
      
  //     this.albums$ = albums;
      
  //   })).subscribe((a: Album[]) =>{
  //     this.arrayLength = a.length;
  //     this.setPage(this.pager.CurrentPage);
      
  //   });
  // }

  // getAlbums(): any{
  //     this.albumService.getAlbums().pipe(map((albums, i) =>
  //   { 
  //     this.arrayLength = albums.length;
  //     this.pager = this.pagingService.getPagerInfo(albums.length, this.pager.CurrentPage, this.pager.PageSize);
  //     let filteredAlbums = albums.filter((_, indx)=> indx >= this.pager.StartIndex && indx <= this.pager.EndIndex);
  //     return filteredAlbums;
     
  //   }));
  //   console.log("albums: ", this.albums$);
  //   console.log("oAlbums: ", this.oAlbums$);
  //   //console.log("indexes: ", r);
  // }

  getAlbums():any{
    this.albumService.getAlbums();
  }




  // getAlbums():Observable<void>{
  //   return this.albumService.getAlbums().pipe(map((albums) => {
  //     this.albums = albums;
  //   }));
  // }

  setPage(page: number){
    //debugger;
    if (page !== this.pager.PreviousPage){
      this.pager.PreviousPage = page;
      this.pager.CurrentPage= page;
    }
    this.getAlbums();
    //this.pager = this.pagingService.getPagerInfo(this.albums.length, this.pager.CurrentPage, this.pager.PageSize);
    //this.pager = this.pagingService.getPagerInfo(this.arrayLength, this.pager.CurrentPage, this.pager.PageSize);

    //this.startIndex = (page - 1) * this.maxSize;
    //this.endIndex = Math.min(this.startIndex + this.maxSize -1, this.albums.length -1 );
    //this.pagedAlbums = this.albums.slice(this.pager.StartIndex, this.pager.EndIndex +1);

    //this.albums$ = this.albums$.slice(this.pager.StartIndex, this.pager.EndIndex +1);
    // this.getAlbums().subscribe(_ =>{
    //   this.albums = this.albums.slice(this.startIndex, this.endIndex);
    // })
  }
  search(term: string): void{

    //this.searchTerms.next(term);
    //debugger;
  }

}
