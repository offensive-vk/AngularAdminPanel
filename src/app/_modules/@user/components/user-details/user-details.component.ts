import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {


  /**
   *
   * @param dialogRef To access the instance of the current dialog.
   * @param data Received from the parent component.
   */
  constructor(
    private matDialog: MatDialog,
    private dialogRef: MatDialogRef<UserDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) { }


  /**
* Catches not found error on images.
* @param event
* @param element
*/

  public catchImageError(event: any, element: any) {
    event.target.src = '../../../../../assets/images/not-found-image.png';
  }
}
