import { Component, OnInit } from '@angular/core';
import { MarketService } from 'src/app/Services/market.service';
import { BetTypeService } from 'src/app/Services/bet-type.service';
import { BetType } from 'src/app/Models/BetType';
import { Market } from 'src/app/Models/Market';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  market: Market[];
  betTypeId:number;
  betType:BetType[];
  isEdit:boolean = false;

  constructor(private marketService:MarketService,private betTypeService:BetTypeService) { }

  ngOnInit() {
this.getAllMarkets();
this.getAllBetTypes();
  }

  getAllMarkets()
  {
    this.marketService.getMarket().subscribe(market=>{this.market = market});  
  }

  getAllBetTypes()
  {
    this.betTypeService.getBetTypes().subscribe(betType=>{this.betType = betType
      console.log(betType);
    });  
  }

GetbetTypeId(betType)
{
this.betTypeId = betType;
  return betType;
}

AddMarket(teamA:string,teamB:string,priceA:number,priceB:number,betTypeId:number,marketName:string)
{    
this.marketService.saveMarket(({marketId:0,teamA:teamA,teamB:teamB,priceA:priceA,priceB:priceB,betTypeId:betTypeId,marketName:marketName,} as Market)).subscribe((betType) =>{this.ngOnInit()
});
}

DeleteMarket(market)
  {
    this.marketService.deleteMarket(market).subscribe(
      () =>{
        this.ngOnInit();
      }
    );   
  }

  EditMarket(market: Market, editMarket:string){
    market.marketName = editMarket;
    this.marketService.updateMarket((market) as Market).subscribe(
      () =>{
        this.ngOnInit();         
      });
  }


}
