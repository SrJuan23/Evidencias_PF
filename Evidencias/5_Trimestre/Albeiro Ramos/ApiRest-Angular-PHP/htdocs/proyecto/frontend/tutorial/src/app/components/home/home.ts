import { Component, inject } from '@angular/core';
import { housingLocationComponent } from "../housing-location/housing-location";
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { Housing } from '../housing';

@Component({
  selector: 'app-home',
  imports: [CommonModule, housingLocationComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation [] = [];

  Housing:Housing = inject(Housing);

  constructor(
  ) {
    this.housingLocationList = this.Housing.getAllHousingLocations();
  }
}

 