import { Component, inject } from '@angular/core';
import { housingLocationComponent } from "../housing-location/housing-location";
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing';

@Component({
  selector: 'app-home',
  imports: [CommonModule, housingLocationComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation [] = [];

  housingService:HousingService = inject(HousingService);

  filteredLocationList:HousingLocation [] = [];

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }

filterResults(text:string) {
    if(!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    )
  }
  
}