import { Component, OnInit, Input } from '@angular/core';
import {SportsService} from '../../Services/sports.service';
import {Sports} from '../../Models/Sports';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  data: Sports[];
  EditName: string;
  isEdit:boolean=false;

  constructor(private sportService: SportsService) { }

  ngOnInit() {  
    this.getSports();
  }
  getSports(){
    this.sportService.getSports().subscribe(Sports =>{
      this.data = Sports;    
  });
  }

  saveSport(SportName: string): void{
    var newSport : Sports = {sportId: 0, SportName: SportName,isEdit:false}
    this.sportService.saveSport((newSport) as Sports).subscribe(
      (sport) =>{              
        this.ngOnInit(); 
    }    
    );
  }
  
  DeleteSport(sport)
  {
    this.sportService.deleteSport(sport).subscribe(
      (sport) =>{
        this.ngOnInit();
      }
    );   
  }
 
  EditSport(sport: Sports, Editsport:string){
    sport.SportName=Editsport; 
    this.sportService.updateSport((sport) as Sports).subscribe(
      (sport) =>{
        this.ngOnInit();            
      }      
    );
  }

}
