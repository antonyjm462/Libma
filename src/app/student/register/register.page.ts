import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  UserForm: any;

  constructor(private  router: Router,  private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.UserForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.required],
      Designation: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }


  register(form) {
      this.router.navigateByUrl('login');
  }

  login(){
    this.router.navigateByUrl('login');
  }
  CreateUser(UserForm) {

  }
}
