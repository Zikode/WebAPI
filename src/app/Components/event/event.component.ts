import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Services/event.service';
import { SportsService } from 'src/app/Services/sports.service';
import { CountryService } from 'src/app/Services/country.service';
import { TournamentService } from 'src/app/Services/tournament.service';
import { Sports } from 'src/app/Models/Sports';
import { Tournament } from 'src/app/Models/tournament';
import { Country } from 'src/app/Models/Country';
import { Event } from 'src/app/Models/Event';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
event:Event[];
sport: Sports[];
country:Country[];
tournament:Tournament[];
sportId:number;
countryId:number;
tournamentId:number;
SportSelected:boolean = false;
CountrySelected:boolean = false;
TournamentSelected:boolean = false;
isEdit: Boolean = false;

  constructor(private eventService: EventService,private sportService:SportsService,private countryService: CountryService, private tournamentService: TournamentService) { }

  ngOnInit() {
    this.getAllSports();
    this.getAllEvents();
  }

  getAllEvents()
  {
    this.eventService.getEvents().subscribe(event=>{this.event = event});
  }
  
  getAllCountries()
  {
    this.countryService.getCountries().subscribe(country =>{this.country = country;});
  }

  getAllSports()
  {
    this.sportService.getSports().subscribe(sport=>{this.sport = sport});
  }

  getAllCountryById(sport)
  {
    this.countryService.getCountryById(sport).subscribe(country=>{this.country= country});
  }

  getAllTournamnetById(Country)
  {
    this.tournamentService.getTournamnetById(Country).subscribe(tournament=>{this.tournament = tournament});
  }

GetCountryId(country)
{
   country = this.countryId;
 this.getAllTournamnetById(country);
 this.CountrySelected = true;   
  return country;
}

GetSportId(sport)
{
sport = this.sportId;
this.SportSelected= true;
this.getAllCountryById(sport);
  return sport;
}

GetTournamnetId(tournament)
{
this.TournamentSelected= true;
tournament  = this.tournamentId;
return tournament;
}

AddEvent(eventName:string,countryId,tournamentId,eventDate:Date,sportId)
{    
this.eventService.saveEvent(({eventId:0, EventName:eventName,EventDate:eventDate,CountryId:countryId,TournamentId:tournamentId,SportId:sportId}) as Event).subscribe((event) =>{this.ngOnInit();
  this.SportSelected = false;
  this.CountrySelected = false;
  this.TournamentSelected= false;
});
}

DeleteEvent(event)
  {
    this.eventService.deleteEvent(event).subscribe((event) =>{this.ngOnInit(); });   
  }

  EditEvent(event: Event, editEvent:string,eventDate:Date){
    event.EventName = editEvent; 
    event.EventDate = eventDate;
    this.eventService.updateEvent((event) as Event).subscribe((event) =>{this.ngOnInit()});
  }
}
