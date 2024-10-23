


import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TableParams {
  pageSizeOptions: number[] = [10, 25, 50, 100];
  constructor() { }



  getParams(tableParams:any) {

    let params =
    `?page=${tableParams.currentPage}&per_page=${tableParams.pageSize}`+
    `${(tableParams.searchTerm && tableParams.searchTerm !=='') ? `&search=${tableParams.searchTerm}` : ''}`+
    `${(tableParams.sortValue && tableParams.sortValue !=='') ? `&sort=${tableParams.sortValue}:${tableParams.sortDirection}` : ''}`;

    return params;
  }



}
