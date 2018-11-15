import { Component, OnInit } from '@angular/core';
import { BetType } from 'src/app/Models/BetType';
import { BetTypeService } from 'src/app/Services/bet-type.service';
import { Sports } from 'src/app/Models/Sports';
import { SportsService } from 'src/app/Services/sports.service';
import { Country } from 'src/app/Models/Country';
import { Tournament } from 'src/app/Models/tournament';
import { EventService } from 'src/app/Services/event.service';
import { CountryService } from 'src/app/Services/country.service';
import { TournamentService } from 'src/app/Services/tournament.service';
import { Event } from 'src/app/Models/Event';

@Component({
  selector: 'app-bet-type',
  templateUrl: './bet-type.component.html',
  styleUrls: ['./bet-type.component.css']
})
export class BetTypeComponent implements OnInit {
betType:BetType[];
betTypeId:number;
isEdit:boolean=false;
sportId:number;
sport: Sports[];
isActive:boolean;
event:Event[];
country:Country[];
tournament:Tournament[];
countryId:number;
tournamentId:number;
SportSelected:boolean = false;
CountrySelected:boolean = false;
TournamentSelected:boolean = false;
eventSelected:boolean = false;
eventId:number;

  constructor(private betTypeService:BetTypeService,private eventService: EventService,private sportService:SportsService,private countryService: CountryService, private tournamentService: TournamentService) { }

  ngOnInit() {
    this.getAllBetTypes();
    this.getSports();
  }

  getAllBetTypes()
  {
    this.betTypeService.getBetTypes().subscribe(betType=>{this.betType = betType
    });  
  }

  getSports()
  {
  this.sportService.getSports().subscribe(
  sport=>{
    this.sport = sport; 
  });  
  }

  GetSportId(sportId)
{
this.sportId = sportId;
this.SportSelected= true;
this.getAllCountryById(sportId);
  return sportId;
}



GetisActive(isActive)
{
this.isActive = isActive;
  return isActive;
}

GetbetTypeId(betType)
{
this.betTypeId = betType;
  return betType;
}

AddBetType(betTypeName:string,isActive,sportId,countryId,tournamentId,eventId)
{    
this.betTypeService.saveBetType(({betTypeId:0, BetTypeName:betTypeName,Active:isActive,sportId:sportId,countryId:countryId,tournamentId:tournamentId,eventId:eventId,sportName:'',isEdit:false} as BetType)).subscribe((betType) =>{this.ngOnInit()
});
}

DeleteBetType(betType)
  {
    this.betTypeService.deleteBetType(betType).subscribe(
      () =>{
        this.ngOnInit();
      }
    );   
  }
  EditBetType(betType: BetType, Editbetype:string,isActive:boolean){
    betType.BetTypeName = Editbetype;
    betType.Active = isActive;

    this.betTypeService.updateBetType((betType) as BetType).subscribe(
      (betType) =>{
        this.ngOnInit();         
      }      
    );
  }



  getAllCountryById(sportId)
  {
  this.countryService.getCountryById(sportId).subscribe(country=>{this.country= country});
  }
  GetCountryId(country)
  {
     country = this.countryId;
     this.CountrySelected = true;   
   this.getAllTournamnetById(country);
    return country;
  }

  getAllTournamnetById(Country)
  {
    this.tournamentService.getTournamnetById(Country).subscribe(tournament=>{this.tournament = tournament});
  }
GetTournamnetId(tournament)
{
tournament  = this.tournamentId;
this.TournamentSelected= true;
this.getAllEventById(tournament);
return tournament;
}

getAllEventById(tournament)
{
  this.eventService.getEventById(tournament).subscribe(event=>{this.event = event});
}

GetEventId(event)
{
event  = this.eventId;
this.eventSelected = true
return event;
}

}
