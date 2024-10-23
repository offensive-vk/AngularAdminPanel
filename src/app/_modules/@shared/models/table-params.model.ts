export class TableParamsModel {
  currentPage: number = 1;
  status: string = "";
  type?: string;
  searchTerm: string = "";
  pageSize: number = 10;
  sortValue: string = "";
  sortDirection?: number = 1;
}
