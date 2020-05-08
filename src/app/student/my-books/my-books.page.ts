import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../../shared/services/firebase.service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { User } from 'src/app/model/user';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
import { Book } from '../../model/book';


const STORAGE_KEY_user = 'userdata';
const STORAGE_KEY_users = 'usersdata';
const STORAGE_KEY_books = 'booksdata';


@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.page.html',
  styleUrls: ['./my-books.page.scss'],
})
export class MyBooksPage implements OnInit {
  user: any;
  users: any;
  bookList: any;
  books: any;
  searchText: any;
  
  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private localstorage: LocalstorageService, private firebaseService: FirebaseService, private formBuilder: FormBuilder, @Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.user = this.storage.get(STORAGE_KEY_user);
    this.users = this.storage.get(STORAGE_KEY_users);
    this.bookList = this.storage.get(STORAGE_KEY_books);
    this.getbooks();
   }

  ngOnInit() {
  }
  getbooks(){
    if(this.user.data != undefined){
      this.books = JSON.parse(this.user.data.Book);
    }
  }
  dashboard() {
    this.router.navigateByUrl('student-dashboard');
  }
  Search(text) {
    this.searchText = text;
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
    this.storage.remove(STORAGE_KEY_user);
    this.router.navigateByUrl('login');
  }
}
