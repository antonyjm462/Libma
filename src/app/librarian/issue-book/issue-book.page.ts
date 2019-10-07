import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from './../../firebase.service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { User } from 'src/app/model/user';
import { DataService } from './../../data.service';
import { LocalstorageService } from 'src/app/localstorage.service';

const STORAGE_KEY_user = 'userdata';
const STORAGE_KEY_users = 'usersdata';
const STORAGE_KEY_books = 'booksdata';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.page.html',
  styleUrls: ['./issue-book.page.scss'],
})
export class IssueBookPage implements OnInit {
  user: any;
  BookForm: any;
  scannedCode: any;
  currentuser: User;
  issuebooks = [];
  bookList: any;
  users: any;
  books: any;
  Bid: any;

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private localstorage: LocalstorageService,private barcodeScanner: BarcodeScanner, private firebaseService: FirebaseService, private formBuilder: FormBuilder, @Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.user = this.storage.get(STORAGE_KEY_user);
    this.users = this.storage.get(STORAGE_KEY_users);
    this.bookList = this.storage.get(STORAGE_KEY_books);
    console.log(this.user);
   }

  ngOnInit() {
    this.BookForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Uid: ['', Validators.required],
    });
  } 
  scanCode() {
    let i = 0;
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    });
    for ( i = 0; i < this.bookList.length; i++) {
      if (this.scannedCode === this.bookList[i].data.Bid || this.Bid === this.bookList[i].data.Bid) {
        this.issuebooks.push(this.bookList[i].data);
      }
    }
    console.log(this.issuebooks);
  }

  IssueBook(form) {
    let i  = 0;
    for ( i = 0; i < this.users.length; i++) {
      if (this.users[i].data.Uid === form.Uid) {
        this.currentuser = this.users[i].data;
        this.currentuser.Book = JSON.stringify(this.issuebooks);
        this.firebaseService.updateUser(this.users[i].id, this.currentuser);
        this.users[i].data = this.currentuser;
        console.log(this.users);
      }
      this.localstorage.storeUsers(this.users);
    }

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
