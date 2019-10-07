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
    console.log(this.user);
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
    console.log(form);
    this.firebaseService.createBook(form);
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
  
  private convertBase64ToBlob(Base64Image: any) {
    // SPLIT INTO TWO PARTS
    const parts = Base64Image.split(';base64,');
    // HOLD THE CONTENT TYPE
    const imageType = parts[0].split(':')[1];
    // DECODE BASE64 STRING
    const decodedData = window.atob(parts[1]);
    // CREATE UNIT8ARRAY OF SIZE SAME AS ROW DATA LENGTH
    const uInt8Array = new Uint8Array(decodedData.length);
    // INSERT ALL CHARACTER CODE INTO UINT8ARRAY
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }
    // RETURN BLOB IMAGE AFTER CONVERSION
    return new Blob([uInt8Array], { type: imageType });
  }
  
  saveAsImage(parent) {
    // fetches base 64 date from image
    const parentElement = parent.el.nativeElement.querySelector('img').src;

    // converts base 64 encoded image to blobData
    const blobData = this.convertBase64ToBlob(parentElement);

    // saves as image
    if (window.navigator && window.navigator.msSaveOrOpenBlob) { //IE
      window.navigator.msSaveOrOpenBlob(blobData, 'Qrcode');
    } else { // chrome
      const blob = new Blob([blobData], { type: 'image/png' });
      const url = window.URL.createObjectURL(blob);
      // window.open(url);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Qrcode';
      link.click();
    }
  }
 
}
