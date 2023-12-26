import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AboutMeViewModel } from '../view-models/about-me-view-model';
import { IPortfolioListViewModel } from '../view-models/portfolio-list-view-model';
import { ABOUT_ME_DATA, PORTFOLIO_LIST } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public getAboutMeData(): Observable<AboutMeViewModel> {
    return of(ABOUT_ME_DATA);
  }

  public getPortfolioList(): Observable<IPortfolioListViewModel> {
    return of(PORTFOLIO_LIST);
  }
}
