import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatToolbarModule,
  ],
})
export class MaterialModule {}
