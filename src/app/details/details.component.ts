import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPlats } from '../list/list';
import { PlatserviceService } from '../services/platservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  plats: IPlats | undefined 
  constructor(private  route: ActivatedRoute,  private platservice: PlatserviceService){}

  ngOnInit():void {
    const platId = this.route.snapshot.paramMap.get('id') as any;
    this.plats = this.platservice.getPlatsById(platId);
    console.log(platId)
    console.log(this.plats?.nom);
    

    // this.platservice.getPlats(). subscribe((plats: IPlats[] ) =>{
    //   this.plats = plats.find((plats : IPlats)=>plats.id == platId)!
    //   console.log(this.plats)
    // })
  }

  // this.hoteListService.getHotels().subscribe((hotels: IHotel[]) => {
  //   this.hotel = hotels.find((hotel:IHotel)=>hotel.id == i )!;
  //   console.log('hotel: ', this.hotel)})
  
}
