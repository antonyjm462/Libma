import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from './../../firebase.service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


const STORAGE_KEY_user = 'userdata';
const STORAGE_KEY_users = 'usersdata';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
})
export class AddBookPage implements OnInit {
  user: any;
  qrData = null;
  createdCode = null;
  BookForm: any;
  bookid: any;
  booklastid: any;

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private firebaseService: FirebaseService, private formBuilder: FormBuilder, @Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.user = this.storage.get(STORAGE_KEY_user);
  }

  ngOnInit() {
    this.BookForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Author: ['', Validators.required],
      Desc: ['', Validators.required],
      Sub: ['', Validators.required],
      Bid: ['', Validators.required]
    });
  }
  
  createCode() {
    this.createdCode = this.BookForm.get('Bid').value;
  }


  CreateBook(form) {
    this.firebaseService.createBook(form);
    this.BookForm.reset();
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

  Logout() {
    this.storage.remove(STORAGE_KEY_user);
    this.router.navigateByUrl('login');
  }

  About(){
    this.router.navigateByUrl('about');
  }
  
 
}
