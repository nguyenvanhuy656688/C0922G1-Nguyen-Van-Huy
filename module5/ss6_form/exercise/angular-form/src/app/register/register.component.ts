import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reactiveForm: FormGroup;
  user: User;

  constructor() {
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(' /^\\+84\\d{9,10}$/')]),
    }, {validators: this.confirmPass});
  }

  onSubmit() {

  }

  confirmPass(control:AbstractControl):{same: boolean}{
    return control.value.password === control.value.confirmPassword? {same: true} : {same: false}
  }
}
