export type TopicDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface LearningExercise {
  title: string;
  objective: string;
  concepts: string[];
  difficulty: TopicDifficulty;
  todo: string;
}

export interface LearningTopic {
  path: string;
  title: string;
  icon: string;
  description: string;
  difficulty: TopicDifficulty;
  progress: number;
  concepts: string[];
  exercises: LearningExercise[];
  interviewQuestions: string[];
}

export interface NavigationItem {
  path: string;
  label: string;
  icon: string;
  description?: string;
  exact?: boolean;
}
