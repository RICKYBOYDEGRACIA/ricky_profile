import { Component } from '@angular/core';
import personalData  from '../../data/personal-data.json'
import { CommonModule } from '@angular/common';

type Experience = {
  basics?: [
    email: string,
    label: string,
    location: [
      city: string,
      country: string,
    ],
    name: string,
    profiles: [
      {
        network: string,
        url: string,
      }
    ],
    summary: string,
  ],
  header: string,
  jobTitle: string,
  highligths: string[],
  yearStarted?: string,
  yearEnded?: string,
  combinedYear?: string,
  setup: string,
}
@Component({
  imports: [
    CommonModule
  ],
  selector: 'app-experiences-page',
  styleUrl: './experiences-page.css',
  templateUrl: './experiences-page.html',
})
export class ExperiencesPage {

  myData = personalData;
  basics = this.myData.basics;
  constructor(
  ){
    console.log(this.myData)
  }

  experiences : Experience[] = this.myData.experience.map((item) => ({
    header: item.position
    .trim()
    .split(/\s+/)   
    .slice(0,2) // Split by space(s)
    .map(word => word.charAt(0)) // Take first letter of each word
    .join('') // Combine into a single string ("RB")
    .toUpperCase(),
    jobTitle: item.position,
    highligths: item.highlights,
    yearStarted: item.startDate,
    yearEnded: item.endDate,
    combinedYear: `${item.startDate} - ${item.endDate}`,
    setup: item.setup,
  }))
}
