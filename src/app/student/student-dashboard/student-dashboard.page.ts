import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.page.html',
  styleUrls: ['./student-dashboard.page.scss'],
})
export class StudentDashboardPage implements OnInit {

  constructor(private  router: Router) { }

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

  About(){
    this.router.navigateByUrl('about');
  }

}
