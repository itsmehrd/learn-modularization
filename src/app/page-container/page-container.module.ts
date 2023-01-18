import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MasterHeaderComponent } from './master-header/master-header.component';
import { PageContainerComponent } from './page-container.component';
import { PortfolioModalsModule } from './portfolio-modals/portfolio-modals.module';
import { PortfolioModule } from './portfolio/portfolio.module';

@NgModule({
  declarations: [
    PageContainerComponent,
    MasterHeaderComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    PortfolioModule,
    PortfolioModalsModule,
  ],
  exports: [PageContainerComponent],
})
export class PageContainerModule {}
