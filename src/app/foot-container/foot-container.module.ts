import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootContainerComponent } from './foot-container.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';

@NgModule({
  declarations: [FootContainerComponent, FooterComponent, CopyrightComponent],
  imports: [CommonModule],
  exports: [FootContainerComponent, FooterComponent, CopyrightComponent],
})
export class FootContainerModule {}
