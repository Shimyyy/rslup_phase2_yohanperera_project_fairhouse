import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fairhouse';

  housingLocationList: HousingLocation[] = [
    {
      name: "Colombo City Center",
      city: "Colombo",
      state: "WP",
      photo: "../assets/housing-1.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: "Galle City Center",
      city: "Galle",
      state: "SP",
      photo: "../assets/housing-2.jpg",
      availableUnits: 3,
      wifi: true,
      laundry: true,
    },
    {
      name: "Kandy City Center",
      city: "Kandy",
      state: "CP",
      photo: "../assets/housing-3.jpg",
      availableUnits: 1,
      wifi: true,
      laundry: true,
    },
  ];

  selectedLocation: HousingLocation | undefined;
  updateSelectedLocation(location: HousingLocation){
    this.selectedLocation= location;
  }
}


