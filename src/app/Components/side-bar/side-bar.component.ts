import { Component, OnInit } from '@angular/core';
import { SportService } from 'src/app/Services/sport.service';
import { CountryService } from 'src/app/Services/country.service';
import { Sport } from 'src/app/Models/Sport';
import{Country} from '../../Models/Country';
import { TournamentService } from 'src/app/Services/tournament.service';
import { Tournament } from 'src/app/Models/Tournament';
import { EventService } from 'src/app/Services/event.service';
import * as $ from 'jquery';
import { BetTypeService } from 'src/app/Services/bet-type.service';
import { BetType } from 'src/app/Models/BetType';
import { MarketService } from 'src/app/Services/market.service';
import { Market } from 'src/app/Models/Market';
import { UsersService } from 'src/app/Services/users.service';
import { Users } from 'src/app/Models/Users';
import { BetService } from 'src/app/Services/bet.service';
import { Bet } from 'src/app/Models/Bet';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  Sports : Sport[];
  Countries: Country[];
  Tournaments: Tournament[];
  Events:Event[];
  sportId:number;
  countryId:number;
  tournamentId:number;
  eventId:number;
  sportSelected: number;
  currentTabName:string;
  betType:BetType[];
  eventSelected:boolean=false;
  betTypeId:number;
  markets:boolean=false;
  market:Market[];
  user:Users;
  username:string;
  odd:number;
  bet:Bet;
  message:string;
  userId:number;
  stake:number;
  logged:boolean=true;
  loggedOut:boolean=false;

  constructor(private userService:UsersService,private sportService: SportService,private countryService: CountryService,private tournamentService: TournamentService,private eventService: EventService,private betTypeService:BetTypeService,private marketService:MarketService,private betService:BetService) { }

  ngOnInit() {
    this.getSports();
    this.user = this.user
  }

  getSports(){
    this.sportService.getSports().subscribe(Sports =>{this.Sports = Sports;});
  }

GetSportId(sportId)
{ 
this.sportId = sportId;
this.getAllCountriesById(sportId);

return sportId;
}

GetCountryId(countryId)
{
  this.countryId = countryId; 
  this.GetAllTournamentsById(countryId);
}

getAllCountriesById(countryId)
{
  this.countryId = countryId;
this.countryService.getCountryById(countryId).subscribe(country=>{this.Countries = country;});
}

GetTournamentId(tournamentId)
{
  this.tournamentId = tournamentId;

  this.getAllEvents(tournamentId);
}

GetAllTournamentsById(tournamentId)
{
this.tournamentService.GetTournamentById(tournamentId).subscribe(tournament=>{this.Tournaments = tournament;});
}

GetEventId(eventId)
{ 
this.eventId = eventId;
this.getAllBetTypeById(eventId);
return eventId;
}

getAllEvents(eventId)
{
  this.eventService.GetEventById(eventId).subscribe(event=>{this.Events = event});
}

GetBetTypeId(betTypeId)
{
this.betTypeId = betTypeId;
this.getMarketsById(betTypeId);
return betTypeId;
}

getAllBetTypeById(betTypeId)
{ 
  this.betTypeService.getBetTypeById(betTypeId).subscribe(betType =>{this.betType = betType
  });
}

getMarketsById(marketId)
{
  this.marketService.getMarketById(marketId).subscribe(market=>{this.market = market
  });  
}

Login(Username:string,password:string )
{
  this.userService.Login(Username,password).subscribe(
    user=>{
    this.user = user   
    });
    this.logged = false;
    this.loggedOut = true;
  }

    AddUser(NewUsername:string,Newpassword:string )
    {   
      this.userService.registerUser({userID:0,username:NewUsername,Password:Newpassword}as Users).subscribe(
         () =>{this.Login(NewUsername,Newpassword)         
        });             
    }

    GetOdd(odd)
    {
    this.odd = odd;
    return odd
    }

    LogOut()
    {
      this.logged = true;
    this.loggedOut = false;
    this.user = null;
    }

    AddBet(userId:number,marketId:number,Stake:number,Odds:number)
    {
      this.userId = userId;
      this.stake = Stake;
      
      this.betService.addBet({betId:0,sportId:this.sportId,countryId:this.countryId,tournamentId:this.tournamentId,eventId:this.eventId,betTypeId:this.betTypeId,marketId:marketId,userID:userId,stake:Stake,Resulted:false,PotentialPayout:0,Odds:Odds} as Bet)
      .subscribe(
         bet=> {
           this.bet = bet
           this.UpdateUserBalance(this.user,this.stake);
         });
    }

    UpdateUserBalance(User:Users,stake:number)
    {
    this.userId = User.userID;
    stake =  User.balance - this.stake;
    User.balance = stake;
     this.userService.updateUserBalance((User) as Users).subscribe();
    }
  
}
  
