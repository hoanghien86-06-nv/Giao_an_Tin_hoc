
export enum GradeLevel {
  Grade3 = '3',
  Grade4 = '4',
  Grade5 = '5',
}

export interface LessonInput {
  grade: GradeLevel;
  mainTopic: string;
  subTopic: string;
  lessonName: string;
  periodCount: number;
  week: number;
  date: string;
  sections?: string[];
  planStructure?: string[];
}

export interface GeneratedImage {
  url: string;
  prompt: string;
}

export interface GeneratedContent {
  htmlContent: string;
  illustrations?: GeneratedImage[];
}
