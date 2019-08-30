import { Component } from '@angular/core';
import { Question } from 'src/models';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  questions$: Observable<Question[]>;

  constructor(private readonly dataService: DataService) {
    this.questions$ = this.dataService.getJSON();
  }

}
