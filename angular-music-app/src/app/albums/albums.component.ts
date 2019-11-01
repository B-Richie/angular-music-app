import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album-service.service';
import { Album } from '../album';
import { map, debounceTime, distinctUntilChanged, switchMap, mapTo, filter, take, subscribeOn } from '../../../node_modules/rxjs/operators';
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
  page = 1;
  previousPage: any;
  pageLength: any;
  maxSize = 10;
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
    //this.albums$ = this.getAlbums().take(10);
    //this.albums$ = this.getAlbums().pipe(take(10));
    //this.albums$.subscribe(val => console.log(val));
    //console.log("albums$", example);

    //works without method
    //this.albums$ = this.albumService.getAlbums();

    //how to slice
    //this.albums$ = this.getAlbums().pipe(map(albums => albums.slice(0, 10)));
    
    //works with method
    //this.albums$ = this.getAlbums();

    this.albumService.getAlbums().subscribe(albums =>{
      this.albums$ = of(albums);
      this.arrayLength = albums.length;
      this.setPage(this.pager.CurrentPage);      
    })
   


    //debugger;


    // //this works with pagedAlbums!
    // this.getAlbums().subscribe(_ =>{
    //   this.setPage(this.pager.CurrentPage);
    // });


//not the method i want
    // this.getAlbums().subscribe(_ => {

    //   var startIndex = 0;
    //   var pageIndex = 0;
    //   var endIndex = 0;
    //   //var maxSize = 0;
    //   debugger;
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

  // getAlbums():any{
  //   return this.albumService.getAlbums().pipe(map((albums: Observable<Album[]>) => {
  //     // debugger;
  //     this.albums$ = albums;
  //     console.log("albums$ value", this.albums$);
  //     // return this.albums$;
  //     //return albums;
  //   }));

  //   }



  // getAlbums(){
  //   this.albumService.getAlbums().pipe(map((albums: Observable<Album[]>) => {
  //     debugger;
  //     this.albums$ = albums;
  //     return this.albums$;
      
  //   })).subscribe((a: Album[]) =>{
  //     this.arrayLength = a.length;
  //     this.setPage(this.pager.CurrentPage);
      
  //   });
  // }

  // getAlbums(): any{
  //     this.albumService.getAlbums().pipe(map((albums, i) =>
  //   {
  //     debugger;       
  //     this.arrayLength = albums.length;
  //     this.pager = this.pagingService.getPagerInfo(albums.length, this.pager.CurrentPage, this.pager.PageSize);
  //     let filteredAlbums = albums.filter((_, indx)=> indx >= this.pager.StartIndex && indx <= this.pager.EndIndex);
  //     return filteredAlbums;
     
  //   }));
  //   console.log("albums: ", this.albums$);
  //   console.log("oAlbums: ", this.oAlbums$);
  //   console.log("length", this.arrayLength);
  //   //console.log("indexes: ", r);
  // }

  //this works with albums$
  getAlbums():Observable<Album[]>{
    return this.albumService.getAlbums();

  }


  ngOnDestroy(){

  }
  // //this works with pagedAlbums
  // getAlbums():Observable<void>{
  //   return this.albumService.getAlbums().pipe(map((albums) => {
  //     this.albums = albums;
  //   }));
  // }

  setPage(page: number){
    debugger;
    if (page !== this.pager.PreviousPage){
      this.pager.PreviousPage = page;
      this.pager.CurrentPage= page;
    }

    //works with pagedAlbums
    //this.pager = this.pagingService.getPagerInfo(this.albums.length, this.pager.CurrentPage, this.pager.PageSize);
    //works with pagedAlbums
    //this.pagedAlbums = this.albums.slice(this.pager.StartIndex, this.pager.EndIndex +1);

    this.pager = this.pagingService.getPagerInfo(this.arrayLength, this.pager.CurrentPage, this.pager.PageSize);




    
    // this.getAlbums().subscribe(_ =>{
    //   this.albums = this.albums.slice(this.startIndex, this.endIndex);
    // })
  }
  search(term: string): void{

    //this.searchTerms.next(term);
    //debugger;
  }

}
