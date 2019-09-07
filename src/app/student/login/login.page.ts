import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  UserForm: FormGroup;

  constructor(private  router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.UserForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  Login(form) {
    this.router.navigateByUrl('student-dashboard');
  }
}
