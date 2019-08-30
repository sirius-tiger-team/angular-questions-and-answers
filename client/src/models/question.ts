export interface Question {
  question: string;
  questionCode?: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  tags: string[];
  difficultyLevel: number;
}
