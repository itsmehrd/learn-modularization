import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MasterHeaderComponent } from './master-header/master-header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { PortfolioModalsComponent } from './portfolio-modals/portfolio-modals.component';
import { PortfolioModalComponent } from './portfolio-modals/portfolio-modal/portfolio-modal.component';
import { TopContainerModule } from './top-container/top-container.module';

@NgModule({
  declarations: [
    AppComponent,
    // NavigationComponent,
    MasterHeaderComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    CopyrightComponent,
    PortfolioModalsComponent,
    PortfolioModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
