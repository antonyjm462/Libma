import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.page.html',
  styleUrls: ['./all-books.page.scss'],
})
export class AllBooksPage implements OnInit {

  constructor(private router: Router) { }

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
