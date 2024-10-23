import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';


const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    // data: {
    //   title: 'Addresses',

    //   extra: [
    //     {
    //       title: 'Info',
    //       url: '/account/info'
    //     }
    //   ]
    // },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class userRoutingModule { }
