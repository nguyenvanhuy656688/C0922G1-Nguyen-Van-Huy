import { Component, OnInit } from '@angular/core';
import {Quiz} from '../../model/quiz';
import {QuizService} from '../../service/quiz.service';
import {Route, Router} from '@angular/router';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-result-screen',
  templateUrl: './result-screen.component.html',
  styleUrls: ['./result-screen.component.css']
})
export class ResultScreenComponent implements OnInit {
  quizList: Quiz[] = [];
  quizComplete: Quiz[] = [];
  count: number = 0;


  constructor(private quizService:QuizService , private router:Router) { }

  ngOnInit(): void {
    debugger
    this.quizList = this.quizService.getQuizListWithTime()
  }


  playAgain() {
    this.router.navigateByUrl("/")
  }
}
