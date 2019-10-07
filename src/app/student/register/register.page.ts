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
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  UserForm: any;
  NewUser: User;
  userList: any;
  bookList: any;
  flag: any;

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private localstorage: LocalstorageService, private firebaseService: FirebaseService, private formBuilder: FormBuilder, @Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.getuserList();
    this.getbookList();
   }

  ngOnInit() {
    this.UserForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', Validators.required],
      Uid: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  getuserList = () =>
    this.firebaseService
      .getItem('users')
      .subscribe((res: any) => (this.userList = res));

  getbookList = () =>
    this.firebaseService
      .getItem('book')
      .subscribe((res: any) => (this.bookList = res));

  register() {
      this.router.navigateByUrl('login');
  }

  login() {
    this.router.navigateByUrl('login');
  }
  CreateUser(form) {
    console.log(form);
    this.NewUser = form;
    this.NewUser.Book = '[]';
    this.localstorage.storeUsers(this.userList);
    this.localstorage.storeBooks(this.bookList);
    let i = 0;
    for (i = 0; i < this.userList.length; i++) {
      // tslint:disable-next-line: triple-equals
      if (this.userList[i].data.Uid == this.NewUser.Uid) {
        this.flag = 1;
       }
    }
    // tslint:disable-next-line: triple-equals
    if(this.flag!=1) {
      this.firebaseService.createUser(this.NewUser);
    }
  }
}
