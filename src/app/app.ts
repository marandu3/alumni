import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    Toast
  ],
  templateUrl: './app.html'
})
export class App {
  menuOpen = false;

  @ViewChild('menu') menu!: ElementRef;

  toggleMenu(event: Event) {
    event.stopPropagation(); // prevent click from triggering document click
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (this.menuOpen && this.menu && !this.menu.nativeElement.contains(event.target)) {
      this.menuOpen = false;
    }
  }
}
