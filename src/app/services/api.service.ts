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
      bio: "Senior Web Software Developer with over 10 years of experience in crafting robust and scalable web applications, with exceptional problem-solving skills and passion for clean and efficient code, I have played a key role in the successful delivery of numerous high-profile projects. I am passionate about staying abreast of the latest industry trends and technologies. My curiosity and commitment to continuous learning drive me to explore emerging tools and frameworks that enhance the efficiency and functionality of web applications.",
      skills: [{
        name: "HTML",
        percentage: 90
      }, {
        name: "CSS",
        percentage: 85
      }, {
        name: "Angular",
        percentage: 80
      }, {
        name: "TypeScript",
        percentage: 50
      }, {
        name: "Bootstrap",
        percentage: 40
      }],
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
