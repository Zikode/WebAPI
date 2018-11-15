import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { SportsComponent } from './Components/sports/sports.component';
import { HttpClientModule } from '@angular/common/http';
import { SportsService } from './Services/sports.service';
import { CountryComponent } from './Components/country/country.component';
import { TournamentsComponent } from './Components/tournaments/tournaments.component';
import { EventComponent } from './Components/event/event.component';
import { BetTypeComponent } from './Components/bet-type/bet-type.component';
import { MarketComponent } from './Components/market/market.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SportsComponent,
    CountryComponent,
    TournamentsComponent,
    EventComponent,
    BetTypeComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
