import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Quiz} from '../model/quiz';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizCompleteList:Quiz[] = []
  quizList:Quiz[] = []
  private apiUrl = 'https://opentdb.com/api.php';


  constructor(private httpClient:HttpClient) {}

  getQuizQuestions(amount: number):Observable<any> {
    const url = `${this.apiUrl}?amount=${amount}`;
    return this.httpClient.get<any>(url);
  }



  setQuizListWithTime(quizList: Quiz[]) {
    this.quizList = quizList
  }

  getQuizListWithTime() {
    return this.quizList
  }
}
