import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopContainerComponent } from './top-container.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [TopContainerComponent, NavigationComponent],
  imports: [CommonModule],
  exports: [TopContainerComponent, NavigationComponent],
})
export class TopContainerModule {}
