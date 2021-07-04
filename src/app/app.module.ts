import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { InspirationsComponent } from './content/inspirations/inspirations.component';
import { MeilleuresComponent } from './content/product-list/meilleures/meilleures.component';
import { NouveautesComponent } from './content/product-list/nouveautes/nouveautes.component';
import { BonsComponent } from './content/product-list/bons/bons.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './content/product-list/product-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    InspirationsComponent,
    MeilleuresComponent,
    NouveautesComponent,
    BonsComponent,
    FooterComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },
      {
        path: 'nouveautes',
        component: NouveautesComponent
      },
      {
        path: 'meilleures',
        component: MeilleuresComponent
      },
      {
        path: 'bons',
        component: BonsComponent
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
