import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material'

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
  ],
})
export class MaterialModule {}
