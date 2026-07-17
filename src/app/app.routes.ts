import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/main-layout/main-layout').then((module) => module.MainLayout),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        title: 'Dashboard | Angular Engineering Lab',
        loadComponent: () =>
          import('./features/dashboard/pages/dashboard-page/dashboard-page').then(
            (module) => module.DashboardPage,
          ),
      },
      {
        path: 'signals',
        title: 'Signals | Angular Engineering Lab',
        loadComponent: () =>
          import('./features/signals/pages/signals-page/signals-page').then(
            (module) => module.SignalsPage,
          ),
      },
      {
        path: 'rxjs',
        title: 'RxJS | Angular Engineering Lab',
        loadComponent: () => import('./features/rxjs/pages/rxjs-page/rxjs-page').then((module) => module.RxjsPage),
      },
      {
        path: 'components',
        title: 'Components | Angular Engineering Lab',
        loadComponent: () =>
          import('./features/components/pages/components-page/components-page').then(
            (module) => module.ComponentsPage,
          ),
      },
      {
        path: 'forms',
        title: 'Forms | Angular Engineering Lab',
        loadComponent: () => import('./features/forms/pages/forms-page/forms-page').then((module) => module.FormsPage),
      },
      {
        path: 'routing',
        title: 'Routing | Angular Engineering Lab',
        loadComponent: () =>
          import('./features/routing/pages/routing-page/routing-page').then(
            (module) => module.RoutingPage,
          ),
      },
      {
        path: 'dependency-injection',
        title: 'Dependency Injection | Angular Engineering Lab',
        loadComponent: () =>
          import(
            './features/dependency-injection/pages/dependency-injection-page/dependency-injection-page'
          ).then((module) => module.DependencyInjectionPage),
      },
      {
        path: 'http-and-apis',
        title: 'HTTP and APIs | Angular Engineering Lab',
        loadComponent: () =>
          import('./features/http/pages/http-page/http-page').then((module) => module.HttpPage),
      },
      {
        path: 'state-management',
        title: 'State Management | Angular Engineering Lab',
        loadComponent: () =>
          import('./features/state-management/pages/state-management-page/state-management-page').then(
            (module) => module.StateManagementPage,
          ),
      },
      {
        path: 'testing',
        title: 'Testing | Angular Engineering Lab',
        loadComponent: () =>
          import('./features/testing/pages/testing-page/testing-page').then(
            (module) => module.TestingPage,
          ),
      },
      {
        path: 'performance',
        title: 'Performance | Angular Engineering Lab',
        loadComponent: () =>
          import('./features/performance/pages/performance-page/performance-page').then(
            (module) => module.PerformancePage,
          ),
      },
      {
        path: 'interview-preparation',
        title: 'Interview Preparation | Angular Engineering Lab',
        loadComponent: () =>
          import(
            './features/interview-preparation/pages/interview-preparation-page/interview-preparation-page'
          ).then((module) => module.InterviewPreparationPage),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
