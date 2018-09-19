import {
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatSelectModule
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
        MatTabsModule,
        MatSelectModule
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
        MatTabsModule,
        MatSelectModule
      ]
    })
  export class MaterialModule {}
