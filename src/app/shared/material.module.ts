import {
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule
  } from '@angular/material';
  import { NgModule } from '@angular/core';

  @NgModule({
      exports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatMenuModule,
        MatListModule,
        MatTabsModule
      ],
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatTabsModule
      ]
    })
  export class MaterialModule {}
