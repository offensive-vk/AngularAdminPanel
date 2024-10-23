import { OnInit, ViewChild, Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { MatSort, Sort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../services/user.service';
import { TableParams } from '../../../@shared/helper/table-params';
import { TableParamsModel } from '../../../@shared/models/table-params.model';
import { User } from '../../model/user';
import { UserDetailsComponent } from '../user-details/user-details.component';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  pageSizeOptions: number[] = [];
  dataSource!: MatTableDataSource<User[]>;
  displayedColumns: string[] = [];
  tableParamsObject = new TableParamsModel();
  isLoading: boolean = true;
  total!: number;

  /**
   * Stores the list of users.
   */
  userList: User[] = [];

  thList = [
    { name: "id", label: 'Id' },
    { name: "email", label: 'Email' },
    { name: "first_name", label: 'First name' },
    { name: "last_name", label: 'Last name' },
    { name: "avatar", label: 'Avatar' },
    { name: "action", label: 'Action' },
  ];
  subscription$!: Subscription;

  userSubscription$!: Subscription;
  userInfo!: User;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private userService: UserService,
    private tableParams: TableParams,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.displayedColumns = this.thList.map((res) => res.name);
    this.tableParamsObject.sortValue = 'createdAt';
    this.tableParamsObject.sortDirection = -1;
    this.pageSizeOptions = this.tableParams.pageSizeOptions;
    this.getData();
  }

  /**
  * Invokes endpoint get users,
  * Passes the users to the table
  */
  getData() {
    this.isLoading = true;
    let params: string = this.tableParams.getParams(this.tableParamsObject);

    this.userService.getUsers(params).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        this.dataSource = new MatTableDataSource<User[]>(res.data);
        this.total = res.total;


      },
      error: (error: any) => {
        this.isLoading = false;
        return error;
      },
    })
  }

  /**
 * Catches not found error on images.
 * @param event
 * @param element
 */
  public catchImageError(event: any, element: any) {
    event.target.src = '../../../../../assets/images/not-found-image.png';
  }

  /**
* @param event pageChange to get the entered value,
*/
  pageChange(event: any) {
    this.tableParamsObject.currentPage = event.pageIndex + 1;
    this.tableParamsObject.pageSize = event.pageSize;
    this.getData();
  }
  /**
  * Filters the list of templates.
  */
  public applyFilter(event?: Event) {
    if (event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    } else {
      this.dataSource.filter = '';

    }
  }

  /**
  * sort the list of templates.
  */
  sortTable(event: Sort) {
    this.tableParamsObject.sortValue = event.direction !== "" ? event.active : "";
    this.tableParamsObject.sortDirection = event.direction === "desc" ? -1 : 1;
    this.getData();
  }

  /**
* open user info dialog.
*/
  viewUserInfo(user: User) {
    this.matDialog
      .open(UserDetailsComponent, {
        width: "700px",
        data: user
      })
  }
}


