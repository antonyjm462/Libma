import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from './../../firebase.service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { User } from 'src/app/model/user';
import { LocalstorageService } from 'src/app/localstorage.service';
import { Book } from './../../model/book';

const STORAGE_KEY_user = 'userdata';
const STORAGE_KEY_users = 'usersdata';
const STORAGE_KEY_books = 'booksdata';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.page.html',
  styleUrls: ['./student-dashboard.page.scss'],
})
export class StudentDashboardPage implements OnInit {
  user: any;
  users: any;
  bookList: any;
  userbook: any;
  books = [];
  booksPresent = [];
  totalbooks: any;
  bookspresent: any;

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private localstorage: LocalstorageService, private firebaseService: FirebaseService, private formBuilder: FormBuilder, @Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.user = this.storage.get(STORAGE_KEY_user);
    this.users = this.storage.get(STORAGE_KEY_users);
    this.bookList = this.storage.get(STORAGE_KEY_books);
    console.log(this.user);
    this.getbooks();
   }

  ngOnInit() {
  }

  getbooks() {
    let i  = 0;
    for ( i = 0; i < this.users.length; i++) {
      if(this.users[i].data.Book != undefined){
        this.userbook = JSON.parse(this.users[i].data.Book);
        this.books =  this.books.concat(this.userbook);
      }
    }
    console.log(this.books);
    let j  = 0;
    if(this.books.length == 0){
      this.books.push({Bid: "None"});
    }
    for ( i = 0; i < this.bookList.length; i++) {
      for ( j = 0; j < this.books.length; j++) {
        // tslint:disable-next-line: triple-equals
        if (this.bookList[i].data.Bid !== this.books[j].Bid) {
          this.booksPresent.push(this.bookList[i].data);
        }
      }
    }
    this.totalbooks = this.bookList.length;
    this.bookspresent = this.booksPresent.length;
  }

  dashboard() {
    this.router.navigateByUrl('student-dashboard');
  }

  MyBook() {
    this.router.navigateByUrl('my-books');
  }

  AllBooks(){
    this.router.navigateByUrl('all-books');
  }

  About() {
    this.router.navigateByUrl('about');
  }

  Logout() {
    this.storage.remove(STORAGE_KEY_user);
    this.router.navigateByUrl('login');
  }

}
