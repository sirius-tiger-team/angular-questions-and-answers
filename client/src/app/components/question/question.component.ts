import { Component, Input } from '@angular/core';
import { Question } from 'src/models';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Input() question: Question;
  selectedAnswer: number;

  get accent(): string {
    if (this.selectedAnswer === undefined || this.question === undefined) {
      return 'info';
    } else {
      return this.selectedAnswer === this.question.correctAnswerIndex ? 'success' : 'danger';
    }
  }

}
