import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'webclient';
  isMenuShowFlg = true;
  isFooterShowFlg = true;

  constructor() {
    
  }

  onOpenMenu() {
    this.isMenuShowFlg = !this.isMenuShowFlg;
  }

  onOpenFooter() {
    this.isFooterShowFlg = !this.isFooterShowFlg;
  }
}
