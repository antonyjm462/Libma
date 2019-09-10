import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-librarian-dashboard',
  templateUrl: './librarian-dashboard.page.html',
  styleUrls: ['./librarian-dashboard.page.scss'],
})
export class LibrarianDashboardPage implements OnInit {
  user: { Name: string; Avatar: string; };

  constructor(private router: Router) {
    this.user = {Name: 'antony', Avatar: 'www.google.com'};
   }

  ngOnInit() {
  }

  dashboard() {
    this.router.navigateByUrl('librarian-dashboard');
  }

  AddBook() {
    this.router.navigateByUrl('add-book');
  }

  Issue() {
    this.router.navigateByUrl('issue-book');
  }

  Return() {
    this.router.navigateByUrl('return-book');
  }

  AllBooks() {
    this.router.navigateByUrl('all-books');
  }

}
