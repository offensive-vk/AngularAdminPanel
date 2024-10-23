import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {  MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';


@NgModule({
    exports: [
        MatIconModule,
        MatProgressBarModule,
        MatButtonModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatCardModule,
        MatDialogModule,
        MatExpansionModule,
        MatTableModule,
        MatMenuModule,
        MatToolbarModule,
        MatSortModule,
        MatAutocompleteModule,
        MatButtonToggleModule,
        MatPaginatorModule,
        ScrollingModule
    ],
    imports: [
      MatIconModule,
        MatProgressBarModule,
        MatButtonModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatDialogModule,
        MatCardModule,
        MatExpansionModule,
        MatTableModule,
        MatMenuModule,
        MatToolbarModule,
        MatSortModule,
        MatAutocompleteModule,
        MatButtonToggleModule,
        MatPaginatorModule,
        ScrollingModule
    ],
    providers: [
      { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
    ]
  })
  export class MaterialModule { }
