import { Component, OnInit } from '@angular/core';
import{CountryService} from '../../Services/country.service';
import{Country} from '../../Models/Country';
import { SportsService } from 'src/app/Services/sports.service';
import { Sports } from 'src/app/Models/Sports';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  country: Country[]; 
  sport: Sports[];
  sportId:number;
  isSelected:boolean=false;
  isModify:boolean=true;
  isEdit:boolean=false;
  sportName: string;

  constructor(private countryService: CountryService, private sportService: SportsService) { }

  ngOnInit() {
  this.getAllCountries();
  this.getSports();
  }

  getSports()
  {
this.sportService.getSports().subscribe(
  sport=>{
    this.sport = sport; 
  });  
  }

getAllCountries()
{
this.countryService.getCountries().subscribe(
country=>{
this.country = country;
this.sportName = this.sportName;
});
}

AddCountry(countryName:string,sportId)
{    
this.countryService.saveCountry({countryId:0, countryName:countryName,sportId:sportId,sportName:'',isEdit:false} as Country).subscribe(
  () =>{  
    this.ngOnInit();
  });
this.isSelected = false;
this.isModify = true;
}

GetSportId(sport)
{
this.sportId = sport;
this.isModify = false;
this.isSelected = true;

  return sport;
}

DeleteCountry(country)
  {
    this.countryService.deleteCountry(country).subscribe(
      (country) =>{
        this.ngOnInit();
      }
    );   
  }

  EditCountry(country: Country, editCountry:string){
    country.countryName = editCountry; 
    console.log(editCountry);
    this.countryService.updateCountry((country) as Country).subscribe(
      (country) =>{
        this.ngOnInit();   
        this.isModify=true;
      }      
    );
  }
}
