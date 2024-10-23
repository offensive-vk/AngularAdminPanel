import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoadingSkeletonComponent } from './components/form-loading-skeleton/form-loading-skeleton.component';

@NgModule({
  declarations: [
    FormLoadingSkeletonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormLoadingSkeletonComponent
  ]
})
export class SharedModule { }
