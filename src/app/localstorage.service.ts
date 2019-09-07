import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { User } from './model/user';
// key that is used to access the data in local storage

const STORAGE_KEY = 'userdata';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  currentUser: User;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeUser(user) {
   this.storage.set(STORAGE_KEY, user);
   console.log('local storage');
   console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
 }

}
