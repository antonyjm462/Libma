import { Injectable, Inject, OnInit } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FirebaseService } from './firebase.service';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userList: any;
  bookList: any;

  // tslint:disable-next-line: max-line-length
  constructor(private firebaseService: FirebaseService,  @Inject(LOCAL_STORAGE) private storage: StorageService, private localstorage: LocalstorageService) { 
  }

  // Service to store data of the user and books
  getuserList = () =>
    this.firebaseService
      .getItem('users')
      .subscribe((res: any) => (this.userList = res));

  getBookList = () =>
    this.firebaseService
      .getItem('book')
      .subscribe((res: any) => (this.bookList = res));


  Data() {
    this.firebaseService.getItem('users').subscribe((res: any) => (this.userList = res));
    this.firebaseService.getItem('book').subscribe((res: any) => (this.bookList = res));
    this.localstorage.storeUsers(this.userList);
    this.localstorage.storeBooks(this.bookList);
  }
}
