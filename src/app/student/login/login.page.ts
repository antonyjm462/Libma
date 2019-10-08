import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './../../auth.service';
import { FirebaseService } from './../../firebase.service';
import { LocalstorageService } from './../../localstorage.service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';



const STORAGE_KEY_user = 'userdata';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  UserForm: FormGroup;
  email: any;
  password: any;
  userList: any;
  currentuser: {};
  bookList: any;
  user: any;


  // tslint:disable-next-line: max-line-length
  constructor(private  router: Router, @Inject(LOCAL_STORAGE) private storage: StorageService, private localstorage: LocalstorageService,private firebaseService: FirebaseService , private formBuilder: FormBuilder, private auth : AuthService) {
    this.getuserList();
    this.getbookList();
    this.user = this.storage.get(STORAGE_KEY_user);
    // tslint:disable-next-line: triple-equals
    if (this.user != undefined) {
      if (this.email === 'librarian') {
        this.router.navigateByUrl('librarian-dashboard');
      } else {
        this.router.navigateByUrl('student-dashboard');
      }
    }
  }

  ngOnInit() {
    this.UserForm = this.formBuilder.group({
      Email: ['', Validators.required],
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

  Login() {
    this.localstorage.storeUsers(this.userList);
    this.localstorage.storeBooks(this.bookList);
    let i = 0;
    this.email = this.UserForm.get('Email').value;
    this.password = this.UserForm.get('Password').value;
    console.log(this.UserForm.value);
    console.log(this.email);
    console.log(this.password);
    if (this.email === 'librarian') {
      if (this.password === 'libma1234') {
        this.currentuser = { Name: 'Librarian' };
        this.localstorage.storeUser(this.currentuser);
        // this.router.navigate(['librarian-dashboard']);
        this.router.navigateByUrl('librarian-dashboard');
      }
    }
    for (i = 0; i < this.userList.length; i++) {
      if (this.userList[i].data.Email === this.email) {
        if (this.userList[i].data.Password === this.password) {
          this.localstorage.storeUser(this.userList[i].data);
          // this.router.navigate(['student-dashboard']);
          this.router.navigateByUrl('student-dashboard');
        }
       }
    }
  }


  register() {
    this.router.navigate(['register']);
  }

  forgotpassword() {
    this.router.navigate(['forgotpassword']);
  }
}
