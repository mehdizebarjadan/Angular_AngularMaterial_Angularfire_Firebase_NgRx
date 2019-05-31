import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule],
  exports: [MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule]
})
export class MaterialModule {}
