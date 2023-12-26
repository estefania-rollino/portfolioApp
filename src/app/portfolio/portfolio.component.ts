import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPortfolioListViewModel } from '../view-models/portfolio-list-view-model';
import { ApiService } from '../services/api.service';
import { RouterModule } from '@angular/router';
import 'bootstrap';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public viewModel: IPortfolioListViewModel;
  constructor(private service: ApiService) {

  }

  ngOnInit(): void {
    this.service.getPortfolioList().subscribe(result => {
      this.viewModel = result;
      if(this.viewModel.portfolioItems) {
        this.viewModel.portfolioItems = this.viewModel.portfolioItems.sort((a, b) => a.title < b.title ? -1 : 1);
      }
    });
  }

}
