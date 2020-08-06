import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoColumnLayoutComponent } from './two-column-layout/two-column-layout.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TwoColumnLayoutComponent, ImageComponent],
  exports: [TwoColumnLayoutComponent, ImageComponent]
})
export class MaterialModule {

}
