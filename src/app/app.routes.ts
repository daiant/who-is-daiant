import { Route, Routes } from '@angular/router';
import { WorkData, WorkDetail } from '../lib/work.data';

type WebRoute = Route & {
  data?: { work?: WorkDetail };
};

export const routes: WebRoute[] = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  ...Object.keys(WorkData).map((key) => {
    return {
      path: key,
      loadComponent: () =>
        import('./work/work.component').then((m) => m.WorkComponent),
      data: {
        work: WorkData[key],
      },
    };
  }),
];
