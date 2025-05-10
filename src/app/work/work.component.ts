import { Component, OnInit, inject, signal } from '@angular/core';
import {
  WorkItem,
  WorkItemComponent,
} from '../components/work/work-item/work-item.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WorkDetail, workItems } from '../../lib/work.data';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  imports: [RouterLink, WorkItemComponent],
})
export class WorkComponent implements OnInit {
  work: WorkDetail | undefined;
  relatedWorks: WorkItem[] = [];

  route = inject(ActivatedRoute);
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.work = data['work'];
      this.relatedWorks = workItems.filter(
        (wi) =>
          wi.title.toLowerCase() !== (this.work?.title ?? '').toLowerCase()
      );
    });
  }

  isImage(description: string | { href: string; footer: string }) {
    return typeof description !== 'string';
  }
}
