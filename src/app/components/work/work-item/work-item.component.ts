import { NgStyle } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

export type WorkItem = {
  title: string;
  href: string;
  color: `#${string}`;
  icon: string;
};

@Component({
  selector: 'app-work-item',
  standalone: true,
  templateUrl: './work-item.component.html',
  styleUrl: './work-item.component.css',
  imports: [RouterLink, NgStyle],
})
export class WorkItemComponent {
  router = inject(Router);
  work = input.required<WorkItem>();
  handleRouterChange() {
    this.router.navigate([this.work().href]);
  }
}
