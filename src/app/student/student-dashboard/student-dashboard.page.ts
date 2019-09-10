import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.page.html',
  styleUrls: ['./student-dashboard.page.scss'],
})
export class StudentDashboardPage implements OnInit {
  user: any;
  constructor(private  router: Router) {
    this.user = {Name: 'antony', Avatar: 'www.google.com'};
  }

  ngOnInit() {
  }

  dashboard() {
    this.router.navigateByUrl('student-dashboard');
  }

  MyBook() {
    this.router.navigateByUrl('my-book');
  }

  AllBooks(){
    this.router.navigateByUrl('all-books');
  }

  About() {
    this.router.navigateByUrl('about');
  }

  Logout() {
    this.router.navigateByUrl('home');
  }

}
