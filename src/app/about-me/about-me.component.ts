import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AboutMeViewModel } from '../view-models/about-me-view-model';
import { ApiService } from '../services/api.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  public viewModel: AboutMeViewModel;
  constructor(private service: ApiService) {

  }

  ngOnInit(): void {
    this.service
    .getAboutMeData()
    .subscribe(result => {
      this.viewModel = result;
    });
  }


}
