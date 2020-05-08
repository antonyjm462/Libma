import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { User } from '../../model/user';
// key that is used to access the data in local storage

const STORAGE_KEY_user = 'userdata';
const STORAGE_KEY_users = 'usersdata';
const STORAGE_KEY_books = 'booksdata';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  currentUser: User;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeUser(user) {
   this.storage.set(STORAGE_KEY_user, user);
   //console.log(this.storage.get(STORAGE_KEY_user) || 'Local storage is empty');
 }

 public storeUsers(users) {
  this.storage.set(STORAGE_KEY_users, users);
  //console.log(this.storage.get(STORAGE_KEY_users) || 'Local storage is empty');
}

public storeBooks(books) {
  this.storage.set(STORAGE_KEY_books, books);
  //console.log(this.storage.get(STORAGE_KEY_books) || 'Local storage is empty');
}

}
