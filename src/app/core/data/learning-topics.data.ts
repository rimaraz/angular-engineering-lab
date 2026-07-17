import { LearningTopic, NavigationItem } from '../../shared/models/learning-topic.model';

export const learningTopics: LearningTopic[] = [
  {
    path: 'signals',
    title: 'Signals',
    icon: 'bolt',
    description: 'Practice Angular Signals primitives, derived state, and template reactivity patterns.',
    difficulty: 'Intermediate',
    progress: 18,
    concepts: ['signal()', 'computed()', 'effect()', 'Signal-based inputs', 'Template reactivity'],
    exercises: [
      {
        title: 'Signal State Sandbox',
        objective: 'Sketch a small local state model using writable and derived signals.',
        concepts: ['Writable signals', 'Computed signals'],
        difficulty: 'Beginner',
        todo: 'TODO: Design the state shape before implementing any interactive example.',
      },
      {
        title: 'Reactive View Model',
        objective: 'Plan a component view model driven entirely by signals and computed values.',
        concepts: ['Component architecture', 'Derived state'],
        difficulty: 'Intermediate',
        todo: 'TODO: Define the read model and placeholder UI states.',
      },
      {
        title: 'Effects Review',
        objective: 'Identify where effects are appropriate versus when computed state is enough.',
        concepts: ['effect()', 'Side effects'],
        difficulty: 'Intermediate',
        todo: 'TODO: Capture the trade-offs before wiring any side effects.',
      },
    ],
    interviewQuestions: [
      'When would you prefer a signal over an RxJS stream in a component?',
      'How do computed signals differ from imperative state updates?',
      'What are the risks of overusing effects in Angular?'
    ],
  },
  {
    path: 'rxjs',
    title: 'RxJS',
    icon: 'sync',
    description: 'Explore streams, operators, multicasting, and Angular integration patterns.',
    difficulty: 'Advanced',
    progress: 12,
    concepts: ['Observables', 'Subjects', 'Mapping operators', 'Error handling', 'Subscription management'],
    exercises: [
      {
        title: 'Stream Mapping Lab',
        objective: 'Outline a comparison between switchMap, concatMap, mergeMap, and exhaustMap.',
        concepts: ['Higher-order mapping', 'Stream composition'],
        difficulty: 'Intermediate',
        todo: 'TODO: Add comparison notes and sample scenarios without implementing them yet.',
      },
      {
        title: 'Multicasting Notes',
        objective: 'Capture when to use shareReplay and when to avoid caching emissions.',
        concepts: ['Subjects', 'shareReplay'],
        difficulty: 'Advanced',
        todo: 'TODO: Prepare placeholder diagrams for cold versus hot observables.',
      },
      {
        title: 'Subscription Cleanup Checklist',
        objective: 'Plan safe teardown strategies for component-bound subscriptions.',
        concepts: ['takeUntilDestroyed', 'Lifecycle'],
        difficulty: 'Beginner',
        todo: 'TODO: Add cleanup examples once the lesson implementation begins.',
      },
    ],
    interviewQuestions: [
      'How do higher-order mapping operators differ in cancellation behavior?',
      'What makes an observable hot or cold?',
      'How would you prevent memory leaks in RxJS-heavy components?'
    ],
  },
  {
    path: 'components',
    title: 'Components',
    icon: 'widgets',
    description: 'Practice standalone components, composition, inputs, outputs, and content projection.',
    difficulty: 'Beginner',
    progress: 28,
    concepts: ['Standalone components', 'Inputs and outputs', 'Content projection', 'Host bindings', 'Change detection'],
    exercises: [
      {
        title: 'Presentational Component Blueprint',
        objective: 'Draft a small reusable UI component API focused on inputs and outputs.',
        concepts: ['Component API design', 'Standalone components'],
        difficulty: 'Beginner',
        todo: 'TODO: Define the public interface and placeholder examples.',
      },
      {
        title: 'Projection Playground',
        objective: 'Plan a component that uses multiple ng-content slots.',
        concepts: ['Content projection', 'Template structure'],
        difficulty: 'Intermediate',
        todo: 'TODO: Add slot responsibilities before building the component.',
      },
      {
        title: 'Change Detection Review',
        objective: 'Compare how smart and dumb components should communicate in Angular.',
        concepts: ['OnPush', 'Component boundaries'],
        difficulty: 'Intermediate',
        todo: 'TODO: Document boundaries and responsibilities first.',
      },
    ],
    interviewQuestions: [
      'Why are standalone components useful in modern Angular?',
      'What makes a component a good presentational component?',
      'How does content projection influence component API design?'
    ],
  },
  {
    path: 'forms',
    title: 'Forms',
    icon: 'assignment',
    description: 'Prepare for template-driven and reactive forms, validation, and user feedback patterns.',
    difficulty: 'Intermediate',
    progress: 8,
    concepts: ['Reactive forms', 'Template-driven forms', 'Validation', 'Form state', 'Custom controls'],
    exercises: [
      {
        title: 'Validation Strategy Board',
        objective: 'Outline validation states and error messages for a sample form.',
        concepts: ['Form validation', 'UX feedback'],
        difficulty: 'Beginner',
        todo: 'TODO: Add placeholder validation matrix and edge cases.',
      },
      {
        title: 'Reactive Form Plan',
        objective: 'Design a typed form model for a future exercise without wiring controls.',
        concepts: ['Typed forms', 'FormBuilder'],
        difficulty: 'Intermediate',
        todo: 'TODO: Document the expected shape and validators only.',
      },
      {
        title: 'Custom Control Notes',
        objective: 'Identify the interface requirements for a future ControlValueAccessor exercise.',
        concepts: ['ControlValueAccessor', 'Reusable inputs'],
        difficulty: 'Advanced',
        todo: 'TODO: Capture responsibilities before implementation.',
      },
    ],
    interviewQuestions: [
      'When would you choose reactive forms over template-driven forms?',
      'How do you keep form error states understandable for users?',
      'What problem does ControlValueAccessor solve?'
    ],
  },
  {
    path: 'routing',
    title: 'Routing',
    icon: 'alt_route',
    description: 'Work with route configuration, child routes, guards, data, and navigation UX.',
    difficulty: 'Intermediate',
    progress: 22,
    concepts: ['Route trees', 'Lazy loading', 'Route data', 'Guards', 'Navigation patterns'],
    exercises: [
      {
        title: 'Route Tree Sketch',
        objective: 'Map a nested route tree for a future feature section.',
        concepts: ['Child routes', 'URL design'],
        difficulty: 'Beginner',
        todo: 'TODO: Finalize the route hierarchy before implementing behavior.',
      },
      {
        title: 'Guard Decision Table',
        objective: 'List scenarios where a guard or resolver would be appropriate.',
        concepts: ['Guards', 'Resolvers'],
        difficulty: 'Intermediate',
        todo: 'TODO: Add examples and trade-offs instead of functional code.',
      },
      {
        title: 'Navigation UX Review',
        objective: 'Plan how active states, redirects, and fallback routes should behave.',
        concepts: ['RouterLinkActive', 'Fallback routes'],
        difficulty: 'Intermediate',
        todo: 'TODO: Record desired UX states and edge cases.',
      },
    ],
    interviewQuestions: [
      'What benefits do lazy-loaded routes provide?',
      'How do route guards differ from resolvers?',
      'How would you design a route structure for long-term maintainability?'
    ],
  },
  {
    path: 'dependency-injection',
    title: 'Dependency Injection',
    icon: 'hub',
    description: 'Review Angular injectors, provider scopes, tokens, and dependency boundaries.',
    difficulty: 'Advanced',
    progress: 6,
    concepts: ['inject()', 'Provider scopes', 'InjectionToken', 'Tree-shakable providers', 'Testing with DI'],
    exercises: [
      {
        title: 'Provider Scope Matrix',
        objective: 'Compare root, platform, and component-level provider behavior.',
        concepts: ['Provider scope', 'Injector hierarchy'],
        difficulty: 'Intermediate',
        todo: 'TODO: Add scope comparison notes before coding examples.',
      },
      {
        title: 'Injection Token Design',
        objective: 'Draft the shape of a configurable token-based dependency.',
        concepts: ['InjectionToken', 'Configuration patterns'],
        difficulty: 'Advanced',
        todo: 'TODO: Document usage scenarios without creating concrete services yet.',
      },
      {
        title: 'DI Testing Checklist',
        objective: 'Plan how TestBed overrides could be used in a future exercise.',
        concepts: ['TestBed', 'Provider overrides'],
        difficulty: 'Intermediate',
        todo: 'TODO: Capture testing strategies only.',
      },
    ],
    interviewQuestions: [
      'How does Angular resolve dependencies across injector boundaries?',
      'When should you use an InjectionToken?',
      'What are the trade-offs of component-scoped providers?'
    ],
  },
  {
    path: 'http-and-apis',
    title: 'HTTP and APIs',
    icon: 'cloud_download',
    description: 'Prepare for client-server communication, interceptors, error handling, and data mapping.',
    difficulty: 'Intermediate',
    progress: 10,
    concepts: ['HttpClient', 'Interceptors', 'Error handling', 'DTO mapping', 'Loading states'],
    exercises: [
      {
        title: 'API Contract Review',
        objective: 'Describe the data shapes and loading states for a future HTTP exercise.',
        concepts: ['API contracts', 'DTO mapping'],
        difficulty: 'Beginner',
        todo: 'TODO: Add placeholder request and response examples only.',
      },
      {
        title: 'Interceptor Planning',
        objective: 'List responsibilities for authentication-free interceptors like logging or timing.',
        concepts: ['Interceptors', 'Cross-cutting concerns'],
        difficulty: 'Intermediate',
        todo: 'TODO: Capture which concerns belong in interceptors versus components.',
      },
      {
        title: 'Resilience Checklist',
        objective: 'Plan how retry, fallback, and error states should be displayed.',
        concepts: ['Error UX', 'Retry strategies'],
        difficulty: 'Advanced',
        todo: 'TODO: Keep this as a design note until API exercises are requested.',
      },
    ],
    interviewQuestions: [
      'Where should HTTP mapping and transformation live in Angular apps?',
      'What belongs in an interceptor and what does not?',
      'How would you model loading, success, and error states for API requests?'
    ],
  },
  {
    path: 'state-management',
    title: 'State Management',
    icon: 'account_tree',
    description: 'Study local state, shared state, and architectural trade-offs without adding external libraries.',
    difficulty: 'Advanced',
    progress: 4,
    concepts: ['Local component state', 'Service-based state', 'Signals versus RxJS', 'Derived state', 'State boundaries'],
    exercises: [
      {
        title: 'State Boundary Audit',
        objective: 'Decide what should stay local, shared, or route-scoped in a sample feature.',
        concepts: ['State ownership', 'Architecture'],
        difficulty: 'Intermediate',
        todo: 'TODO: Document ownership rules before implementing a store-like pattern.',
      },
      {
        title: 'Derived State Notes',
        objective: 'Compare how derived state would be expressed with signals and RxJS.',
        concepts: ['Derived state', 'Composition'],
        difficulty: 'Advanced',
        todo: 'TODO: Add comparison notes rather than executable examples.',
      },
      {
        title: 'Service Store Placeholder',
        objective: 'Plan a simple service-based state container without adding NgRx.',
        concepts: ['Services', 'Encapsulation'],
        difficulty: 'Intermediate',
        todo: 'TODO: Keep the implementation area empty until explicitly requested.',
      },
    ],
    interviewQuestions: [
      'How do you decide whether state belongs in a component or a service?',
      'What trade-offs come with avoiding external state libraries?',
      'How can derived state reduce bugs in Angular applications?'
    ],
  },
  {
    path: 'testing',
    title: 'Testing',
    icon: 'bug_report',
    description: 'Practice unit, integration, and component testing strategies for modern Angular apps.',
    difficulty: 'Intermediate',
    progress: 16,
    concepts: ['TestBed', 'Component testing', 'Service testing', 'Mocking', 'Confidence-focused assertions'],
    exercises: [
      {
        title: 'Test Strategy Canvas',
        objective: 'List what should be covered by unit, integration, and UI-level tests.',
        concepts: ['Testing pyramid', 'Scope'],
        difficulty: 'Beginner',
        todo: 'TODO: Add scenario notes before writing any test implementations.',
      },
      {
        title: 'Component Spec Blueprint',
        objective: 'Plan the setup and assertions for a standalone component test.',
        concepts: ['Standalone testing', 'Assertions'],
        difficulty: 'Intermediate',
        todo: 'TODO: Keep this focused on structure instead of concrete behavior.',
      },
      {
        title: 'Mocking Checklist',
        objective: 'Capture how to mock dependencies without over-coupling tests.',
        concepts: ['Fakes', 'Spies', 'Dependency isolation'],
        difficulty: 'Intermediate',
        todo: 'TODO: Add examples only when the related feature exists.',
      },
    ],
    interviewQuestions: [
      'What makes a component test valuable rather than brittle?',
      'How do you choose between a mock, fake, and spy?',
      'What testing strategy fits a standalone Angular application?'
    ],
  },
  {
    path: 'performance',
    title: 'Performance',
    icon: 'speed',
    description: 'Investigate rendering performance, lazy loading, diagnostics, and efficient UI updates.',
    difficulty: 'Advanced',
    progress: 5,
    concepts: ['Change detection cost', 'Deferrable views', 'trackBy / @for tracking', 'Bundle strategy', 'Profiling'],
    exercises: [
      {
        title: 'Rendering Audit',
        objective: 'Identify the signals of an inefficient component tree.',
        concepts: ['Rendering cost', 'Profiling'],
        difficulty: 'Intermediate',
        todo: 'TODO: Add placeholder observations before measuring a real feature.',
      },
      {
        title: 'List Performance Plan',
        objective: 'Outline how tracking and pagination might improve large lists.',
        concepts: ['@for tracking', 'UI scalability'],
        difficulty: 'Intermediate',
        todo: 'TODO: Keep this as a planning area until a list exercise is requested.',
      },
      {
        title: 'Lazy Loading Review',
        objective: 'Record where route-level code splitting gives the most value.',
        concepts: ['Code splitting', 'Bundle size'],
        difficulty: 'Beginner',
        todo: 'TODO: Revisit after adding more feature implementations.',
      },
    ],
    interviewQuestions: [
      'What Angular features help reduce unnecessary rendering?',
      'How would you approach investigating a slow Angular page?',
      'What is the role of lazy loading in runtime performance?'
    ],
  },
  {
    path: 'interview-preparation',
    title: 'Interview Preparation',
    icon: 'quiz',
    description: 'Collect practice prompts, architecture discussions, and review topics for Angular interviews.',
    difficulty: 'Intermediate',
    progress: 14,
    concepts: ['Concept review', 'System design prompts', 'Trade-off analysis', 'Communication practice', 'Revision planning'],
    exercises: [
      {
        title: 'Concept Review Board',
        objective: 'List Angular concepts that need deeper revision before mock interviews.',
        concepts: ['Revision planning', 'Knowledge gaps'],
        difficulty: 'Beginner',
        todo: 'TODO: Add personal revision priorities here later.',
      },
      {
        title: 'Architecture Prompt Bank',
        objective: 'Prepare future discussion prompts around routing, state, and component design.',
        concepts: ['Architecture', 'Trade-offs'],
        difficulty: 'Intermediate',
        todo: 'TODO: Add prompts without drafting full answers yet.',
      },
      {
        title: 'Whiteboard Exercise Placeholder',
        objective: 'Reserve space for future live-coding or system design practice.',
        concepts: ['Communication', 'Problem solving'],
        difficulty: 'Intermediate',
        todo: 'TODO: Keep the implementation space empty until interview practice begins.',
      },
    ],
    interviewQuestions: [
      'How would you explain Angular change detection clearly in an interview?',
      'What Angular architectural trade-offs come up most often in interviews?',
      'How can you communicate uncertainty while still showing strong reasoning?'
    ],
  },
];

export const navigationItems: NavigationItem[] = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: 'space_dashboard',
    description: 'Overview of the learning lab',
    exact: true,
  },
  ...learningTopics.map((topic) => ({
    path: `/${topic.path}`,
    label: topic.title,
    icon: topic.icon,
    description: topic.description,
  })),
];

export function getLearningTopic(path: string): LearningTopic {
  const topic = learningTopics.find((item) => item.path === path);

  if (!topic) {
    throw new Error(`Unknown learning topic: ${path}`);
  }

  return topic;
}
