import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyrightComponent } from './copyright/copyright.component';
import { FootContainerComponent } from './foot-container.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [FootContainerComponent, FooterComponent, CopyrightComponent],
  imports: [CommonModule],
  exports: [FootContainerComponent],
})
export class FootContainerModule {}
