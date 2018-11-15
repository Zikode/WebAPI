import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/app/Services/tournament.service';
import{Tournament} from '../../Models/tournament';
import { Sports } from 'src/app/Models/Sports';
import { SportsService } from 'src/app/Services/sports.service';
import { Country } from 'src/app/Models/Country';
import { CountryService } from 'src/app/Services/country.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {
tournament: Tournament[];
sport:Sports[];
country:Country[];
sportId:number;
countryId:number;
sportSelected: boolean = false;
countrySelected: boolean = false;
isEdit:boolean=false;


  constructor(private tournamentService: TournamentService,private sportService: SportsService,private countryService: CountryService) { }

  ngOnInit() {
    this.getAllSports();
    this. getAllTournaments();
  }

  getAllSports()
  {
    this.sportService.getSports().subscribe(sport=>{this.sport = sport});
  }

  getAllCountriesById(sport)
  {
    this.countryService.getCountryById(sport).subscribe(country=>{this.country= country});
  }

  getAllTournaments()
{
this.tournamentService.getTournaments().subscribe(
tournament=>{
this.tournament = tournament;
});
}

GetCountryId(country)
{
this.countryId = country;
this.countrySelected = true;
  return country;
}

GetSportId(sport)
{
this.sportId = sport;
this.sportSelected = true;
this.getAllCountriesById(sport);
  return sport;
}

AddTournament(tournamentName:string,sportId,countryId)
{    
this.tournamentService.savetournament(({tournamentId:0, tournamentName:tournamentName,sportId:sportId,countryId:countryId,sportName:'',countryName:'',isEdit:false}) as Tournament).subscribe(
  (tournament) =>{
    this.ngOnInit();
this.sportSelected = false;
this.countrySelected = false;
});
}
DeleteTournament(tournament)
  {
    this.tournamentService.deletetournament(tournament).subscribe(
      (tournament) =>{
        this.ngOnInit();
      }
    );   
  }
  EditTournament(tournament: Tournament, editTournament:string){
    tournament.tournamentName = editTournament; 
    this.tournamentService.updatetournament((tournament) as Tournament).subscribe(
      (tournament) =>{
        this.ngOnInit();         
      }      
    );
  }

}
