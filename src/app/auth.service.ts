import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

async login(email: string, password: string) {
  let result = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
  this.router.navigate(['']);
}

async register(email: string, password: string) {
  let result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  this.sendEmailVerification();
}

async sendEmailVerification() {
  await this.afAuth.auth.currentUser.sendEmailVerification()
  this.router.navigate(['login']);
}

async sendPasswordResetEmail(passwordResetEmail: string) {
  return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
}

async logout(){
  await this.afAuth.auth.signOut();
  localStorage.removeItem('user');
  this.router.navigate(['']);
}

get isLoggedIn(): boolean {
  const user = JSON.parse(localStorage.getItem('user'));
  return user !== null;
}



}