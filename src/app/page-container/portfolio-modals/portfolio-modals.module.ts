import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioModalsComponent } from './portfolio-modals.component';
import { PortfolioModalComponent } from './portfolio-modal/portfolio-modal.component';

@NgModule({
  declarations: [PortfolioModalsComponent, PortfolioModalComponent],
  imports: [CommonModule],
  exports: [PortfolioModalsComponent, PortfolioModalComponent],
})
export class PortfolioModalsModule {}
