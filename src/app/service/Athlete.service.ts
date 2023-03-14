import { Injectable } from '@angular/core';
import { AthleteData } from '../model/AthleteData';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})

export class AthleteService {



  constructor(
    private apiRequestService: ApiRequestService,
  ) {

  }


  public getAllAthlete() {
    return this.apiRequestService.GET('athlete/getAllAthlete');
  }

  public saveAthlete(atthleteData: AthleteData) {
    return this.apiRequestService.POST(atthleteData, 'athlete/saveAthlete');
  }
  
}