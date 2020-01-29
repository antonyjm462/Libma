import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from './../../firebase.service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { User } from 'src/app/model/user';
import { LocalstorageService } from 'src/app/localstorage.service';

const STORAGE_KEY_user = 'userdata';
const STORAGE_KEY_users = 'usersdata';
const STORAGE_KEY_books = 'booksdata';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.page.html',
  styleUrls: ['./return-book.page.scss'],
})

export class ReturnBookPage implements OnInit {
  user: any;
  users: any;
  bookList: any;
  BookForm: any;
  currentuser: any;
  issuebooks: any;
  books: any;

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private localstorage: LocalstorageService, private firebaseService: FirebaseService, private formBuilder: FormBuilder, @Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.user = this.storage.get(STORAGE_KEY_user);
    this.users = this.storage.get(STORAGE_KEY_users);
    this.bookList = this.storage.get(STORAGE_KEY_books);
   }

  ngOnInit() {
    this.BookForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Uid: ['', Validators.required],
    });
  }

  getBooks(form) {
    let i  = 0;
    for ( i = 0; i < this.users.length; i++) {
      if (this.users[i].data.Uid === form.Uid) {
        this.currentuser = this.users[i].data;
        this.books = JSON.parse(this.currentuser.Book);
      }
      this.localstorage.storeUsers(this.users);
    }
  }

  ReturnBook(form) {
    let i  = 0;
    for ( i = 0; i < this.users.length; i++) {
      if (this.users[i].data.Uid === form.Uid) {
        this.currentuser = this.users[i].data;
        this.currentuser.Book = JSON.stringify(this.books);
        this.firebaseService.updateUser(this.users[i].id, this.currentuser);
        this.users[i].data = this.currentuser;
      }
      this.localstorage.storeUsers(this.users);
    }
  }

  addreturn(item) {
    const index = this.books.indexOf(item);
    this.books.splice(index, 1);
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
    this.router.navigateByUrl('book-list');
  }
  About(){
    this.router.navigateByUrl('about');
  }
  Logout() {
    this.storage.remove(STORAGE_KEY_user);
    this.router.navigateByUrl('login');
  }
}
