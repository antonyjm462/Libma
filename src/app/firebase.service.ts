import { Injectable,OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from './model/user';
import { Book } from './model/book';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore, public db: AngularFireDatabase) {
    AngularFireModule.initializeApp(environment.firebase);
   }

  documentToDomainObject = _ => {
    const object = _.payload.doc.data();
    object.id = _.payload.doc.id;
    return object;
}

  getItem(item: string) {
    return this.firestore.collection(item).snapshotChanges().pipe(map( docArray => {
      return docArray.map( doc => {
        return(
          {
            id: doc.payload.doc.id,
            data: doc.payload.doc.data()
          }
        );
      });
    }));
  }


  createUser(user: User) {
    return this.firestore.collection('users').add((JSON.parse(JSON.stringify(user))));
  }

  createBook(book: Book) {
    return this.firestore.collection('book').add((JSON.parse(JSON.stringify(book))));
  }

  // issueBook(book: Book) {
  //   return this.firestore.collection('').add((JSON.parse(JSON.stringify(task))));
  // }
  // createAssign(Assign: UserAssigned){
  //   return this.firestore.collection('taskassigned').add((JSON.parse(JSON.stringify(Assign))));
  // }

  updateUser(uid, value){
    return this.firestore.collection('users').doc(uid).update(value);
  }

  updateBook(bid, value){
    return this.firestore.collection('book').doc(bid).update(value);
  }

  // updatetask(tid, value){
  //   return this.firestore.collection('task').doc(tid).update(value);
  // }
// Deletes a single User
  deleteUser(username: string) {
    return this.firestore.collection('users').doc(username).delete();
  }

  deleteBook(bid: string) {
      return this.firestore.collection('book').doc(bid).delete();
    }
  // deleteList(lid: string){
  //   return this.firestore.collection('list').doc(lid).delete();
  // }
  // deleteTask(tid: string){
  //   return this.firestore.collection('task').doc(tid).delete();
  // }
}
