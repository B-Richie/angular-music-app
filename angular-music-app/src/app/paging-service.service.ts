import { Injectable } from '@angular/core';
import {Pager} from './pager';

@Injectable({
  providedIn: 'root'
})
export class PagingService {

  constructor() { }
  pager: Pager;

  getPagerInfo(totalItems: number, currentPage: number, pageSize: number):Pager{
    debugger;
    this.pager = new Pager();
    this.pager.TotalItems = totalItems;
    this.pager.CurrentPage = currentPage;
    this.pager.StartIndex = (currentPage -1) * pageSize;
    this.pager.EndIndex = Math.min(this.pager.StartIndex + pageSize -1, totalItems - 1);
    this.pager.PageSize = pageSize;
    return this.pager;   

  }
}
