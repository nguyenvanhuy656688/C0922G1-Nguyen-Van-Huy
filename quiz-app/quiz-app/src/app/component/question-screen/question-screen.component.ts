import {Component, OnInit} from '@angular/core';
import {QuizService} from '../../service/quiz.service';
import {Quiz} from '../../model/quiz';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.css']
})
export class QuestionScreenComponent implements OnInit {
  quizList: Quiz[] = [];
  quiz: Quiz | undefined;
  countdown: number = 20;
  count: number = 0;
  countdownInterval: any;
  selectedAnswer: string;
  quizComplete: any[] = [];
  correctList: any[] = [];
  correctAnswer: string;
  answerSelected: boolean = false;
  totalTime: number = 0;


  constructor(private quizService: QuizService, private router: Router) {
  }

  ngOnInit(): void {
    this.view();
    this.getQuiz();
    this.startCountdown();
  }

  private getQuiz() {
    this.quizService.getQuizQuestions(5).subscribe((quizData) => {
      this.quizList = quizData.results;

    }, error => {
      console.log(error);
    });
  }

  private startCountdown() {
    this.countdownInterval = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(this.countdownInterval);
        Swal.fire({
          icon: 'warning',
          title: 'Time over!',
          text: 'Time is up. Go to the next question.',
          showConfirmButton: false,
          timer: 1500, // Hiển thị SweetAlert trong 2 giây
        }).then(() => {
          if (this.count < this.quizList.length) {
            this.answerSelected = false;//Nếu người dùng chưa chọn
            this.nextQuestion(this.countdown);
          }
        });
      }
    }, 1000);
  }

  nextQuestion(countdown: number) {
    this.totalTime = this.totalTime + countdown;
    this.quizList[this.count].time = countdown;

    if (this.answerSelected == false) {
      this.quizComplete.push(undefined);
    }
    if (this.selectedAnswer === this.quizList[this.count].correct_answer && this.answerSelected == true) {
      Swal.fire({
        title: 'Correct answer',
        icon: 'success',
        timer: 1500, // Thời gian hiển thị thông báo (ms)
        showConfirmButton: false // Tắt nút xác nhận
      }).then((result) => {
        // Xử lý logic sau khi SweetAlert đóng
        this.quizComplete.push(this.selectedAnswer);
        this.correctList.push(this.selectedAnswer);
      });
    } else {
      Swal.fire({
        title: 'Incorrect answer',
        icon: 'error',
        timer: 2000,
        showConfirmButton: false
      }).then((result) => {
        // Xử lý logic sau khi SweetAlert đóng
        this.quizComplete.push(this.selectedAnswer);
      });

    }


    if (this.count <= this.quizList.length - 1) {
      this.count++;
    }
    clearInterval(this.countdownInterval);
    if (this.count < this.quizList.length) {
      // Chỉ chuyển đến câu hỏi tiếp theo nếu vẫn còn câu hỏi trong danh sách
      this.countdown = 20; // Đặt lại thời gian đếm ngược cho câu hỏi mới
      this.startCountdown();
    } else {
      // Khi đã hoàn thành tất cả câu hỏi
      setTimeout(() => this.quizCompleteMethod(), 2000);
    }

  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
    this.answerSelected = true;
  }

  view() {
    const element = document.getElementById('container');
    if (element) {
      element.scrollIntoView();
    }
  }

  quizCompleteMethod() {
    this.quizComplete.forEach((answer, index) => {
      this.correctAnswer = this.quizList[index]?.correct_answer;
      if (answer === this.correctAnswer) {
        this.quizList[index].statusAnswer = this.correctAnswer;
        this.quizService.quizCompleteList.push(answer);
      } else if (answer !== this.correctAnswer && answer !== undefined) {
        // Đáp án sai
        this.quizService.quizCompleteList.push(answer);
        this.quizList[index].statusAnswer = answer;
      } else {
        this.quizList[index].statusAnswer = null;
      }
    });
    this.quizService.setQuizListWithTime(this.quizList);
    const totalQuestions = this.quizList.length;
    Swal.fire({
      title: 'Quiz Complete',
      html: `You have completed all the questions.<br><br>
           Total questions: ${totalQuestions}<br>
           Total Time quiz: ${this.totalTime}<br>
           Correct answers: ${this.correctList.length}<br>`
      ,
      icon: 'success',
      showCancelButton: true,
      cancelButtonText: 'Preview',
      confirmButtonText: 'Play Again',
      allowOutsideClick: false // Ngăn chặn tắt modal khi ấn vào ngoài
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        // Xử lý sự kiện khi nhấn nút "Preview"
        this.router.navigateByUrl('/result');
      } else if (result.isConfirmed) {
        // Xử lý sự kiện khi nhấn nút "Play Again"
        this.router.navigateByUrl('/');
      }
    });
  }
}
