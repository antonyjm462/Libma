import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BookListPage } from './book-list.page';
import { PipeModule } from '../../pipe/pipe.module';

const routes: Routes = [
  {
    path: '',
    component: BookListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BookListPage]
})
export class BookListPageModule {}
