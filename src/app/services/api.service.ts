import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AboutMeViewModel } from '../view-models/about-me-view-model';
import { IPortfolioListViewModel, IPortfolioViewModel, PORTFOLIO_ITEMS } from '../view-models/portfolio-list-view-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public getAboutMeData(): Observable<AboutMeViewModel> {
    let model: AboutMeViewModel = {
      name: "Jess Evans",
      title: "Software Developer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      showProfileImage: true,
      githubLink: "https://github.com/",
      linkedinLink: "https://linkedin.com",
      downloadLink: ""
    };
    return of(model);
  }

  public getPortfolioList(): Observable<IPortfolioListViewModel> {
    let model: IPortfolioListViewModel = {
      portfolioItems: PORTFOLIO_ITEMS
    };
    return of(model);
  }
}
