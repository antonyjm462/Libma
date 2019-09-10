import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.page.html',
  styleUrls: ['./my-books.page.scss'],
})
export class MyBooksPage implements OnInit {

  constructor( private router: Router) { }

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
