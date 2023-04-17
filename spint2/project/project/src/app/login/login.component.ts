import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('container') container: ElementRef

  constructor(private el: ElementRef) {


  }

  ngOnInit(): void {
  }

  onSignInClick() {
    this.container.nativeElement.classList.remove("right-panel-active");
  }

  onSignUpClick() {
    this.container.nativeElement.classList.add("right-panel-active");
  }
}
