import { Component } from '@angular/core';
import {
  WorkItem,
  WorkItemComponent,
} from '../components/work/work-item/work-item.component';
import { workItems } from '../../lib/work.data';
import { HeroComponent } from '../components/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [WorkItemComponent, HeroComponent],
})
export class HomeComponent {
  works: WorkItem[] = workItems;
}
