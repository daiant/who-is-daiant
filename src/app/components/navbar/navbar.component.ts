import { Component, OnInit, inject, signal } from '@angular/core';
import { NavigationStart, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [RouterLink],
})
export class NavbarComponent implements OnInit {
  router = inject(Router);
  routeSegments = signal<string[]>([]);

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.routeSegments.set(
          event.url.split('/').filter((segment) => segment !== '')
        );
      }
    });
  }
}
