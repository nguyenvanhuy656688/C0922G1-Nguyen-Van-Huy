import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {

  private countdown:number
   startI:boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  startQuiz() {
    this.countdown = 3;
    this.startCountdown();
  }

  startCountdown(): void {
    if (this.countdown > 0) {
      Swal.fire({
        title: 'Start after...',
        text: `${this.countdown} seconds remaining`,
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        }
      }).then(() => {
        this.countdown--;
        this.startCountdown();
      });
    } else {
      this.router.navigateByUrl('/question');
    }
  }

  start() {
    this.startI = true
  }

  noStart() {
    this.startI = false
  }
}
