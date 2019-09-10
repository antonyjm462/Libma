import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import QRCode from 'qrcode'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
})
export class AddBookPage implements OnInit {
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value: any;
  user: any;
  img: any;

  constructor(private router: Router) {
    this.user = {Name: 'antony',
     Avatar: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj39Y6_mcXkAhWaXisKHbGDCKQQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.homedepot.com%2Fp%2FGlobalrose-100-Red-Roses-Fresh-Flower-Delivery-prime-100-red-roses%2F302885162&psig=AOvVaw2Ikp_wTlJ1tziODQz3AT2e&ust=1568168613753871'};
    this.value = 'Techiediaries';
  }

  ngOnInit() {
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
    this.router.navigateByUrl('all-books');
  }
}
