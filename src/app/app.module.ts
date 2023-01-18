import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootContainerModule } from './foot-container/foot-container.module';
import { PageContainerModule } from './page-container/page-container.module';
import { TopContainerModule } from './top-container/top-container.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopContainerModule,
    // PageContainerModule,
    // FootContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
