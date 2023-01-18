import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PotfolioItemComponent } from './potfolio-item/potfolio-item.component';



@NgModule({
  declarations: [PortfolioComponent, PotfolioItemComponent],
  imports: [CommonModule],
  exports: [PortfolioComponent],
})
export class PortfolioModule {}
