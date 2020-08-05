import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoColumnLayoutComponent } from './two-column-layout/two-column-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TwoColumnLayoutComponent],
  exports: [TwoColumnLayoutComponent],
})
export class MaterialModule {}
