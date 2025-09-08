import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Housing } from '../housing';
import { HousingLocation } from '../housinglocation';
@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housing = inject(Housing);
  
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housing.getHousingLocationById(housingLocationId);
  }
}
