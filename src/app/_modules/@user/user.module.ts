import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from '../@material/material.module';
import { SharedModule } from '../@shared/shared.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { userRoutingModule } from './user.routing.module';
import { UserDetailsComponent } from './components/user-details/user-details.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    userRoutingModule,
    SharedModule
  ],
  providers: [DatePipe]
})
export class UserModule { }
