import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly http: HttpClient) {}

  getJSON(): Observable<any> {
    return this.http.get('https://raw.githack.com/sirius-tiger-team/angular-questions-and-answers/master/data/en-gb.json');
  }
}
