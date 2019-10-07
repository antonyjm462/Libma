import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { LocalstorageService } from 'src/app/localstorage.service';


const STORAGE_KEY_user = 'userdata';
const STORAGE_KEY_users = 'usersdata';
const STORAGE_KEY_books = 'booksdata';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  user: any;
  users: any;
  bookList: any;
  userbook: any;
  books = [];
  booksPresent = [];
  totalbooks: any;
  bookspresent: any;

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private localstorage: LocalstorageService, @Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.user = this.storage.get(STORAGE_KEY_user);
    this.users = this.storage.get(STORAGE_KEY_users);
    this.bookList = this.storage.get(STORAGE_KEY_books);
    console.log(this.user);
   }

  ngOnInit() {
  }

  dashboard() {
    if (this.user.Name === 'Librarian') {
      this.router.navigateByUrl('librarian-dashboard');
    } else {
      this.router.navigateByUrl('student-dashboard');
    }
  }
  MyBook() {
    this.router.navigateByUrl('my-book');
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
  About(){
    this.router.navigateByUrl('about');
  }
  Logout() {
    this.storage.remove(STORAGE_KEY_user);
    this.router.navigateByUrl('login');
  }
}
