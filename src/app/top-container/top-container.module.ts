import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { TopContainerComponent } from './top-container.component';

@NgModule({
  declarations: [TopContainerComponent, NavigationComponent],
  imports: [CommonModule],
  exports: [TopContainerComponent],
})
export class TopContainerModule {}
