import { Component, HostListener, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {  
  @ViewChildren('aboutMeButton, portfolioButton')
  buttonList!: QueryList<MatButton>;

  public isTransparent = true;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isTransparent = window.scrollY <= 60;
  }
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {    
  }

  public aboutMeButtonClicked(button: HTMLButtonElement): void {
    //this.resetNavbarButtonsColor(button);
    this.router.navigate(['about-me'], { relativeTo: this.activatedRoute});
  }

  public portfolioButtonClicked(button: HTMLButtonElement): void {
    //this.resetNavbarButtonsColor(button);
    this.router.navigate(['portfolio'], { relativeTo: this.activatedRoute});
  }

  private resetNavbarButtonsColor(button: HTMLButtonElement): void {
    //this.buttonList.forEach(element => {
    //  element.color = undefined;
    //});

    //button.color = "accent";
  }
}
