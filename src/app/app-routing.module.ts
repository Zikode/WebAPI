import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SportsComponent} from './Components/sports/sports.component';
import { CountryComponent } from './Components/country/country.component';
import { TournamentsComponent } from './Components/tournaments/tournaments.component';
import { EventComponent } from './Components/event/event.component';
import { BetTypeComponent } from './Components/bet-type/bet-type.component';
import { MarketComponent } from './Components/market/market.component';


const routes: Routes = [
  {path:'sports', component:SportsComponent},
  {path:'country', component:CountryComponent},
  {path:'tournaments', component:TournamentsComponent},
  {path:'event', component:EventComponent}  ,
  {path:'bettype', component:BetTypeComponent}  ,
  {path:'market', component:MarketComponent}  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
