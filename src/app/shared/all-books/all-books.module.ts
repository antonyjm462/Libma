import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AllBooksPage } from './all-books.page';
import { ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from '../../pipe/pipe.module';

const routes: Routes = [
  {
    path: '',
    component: AllBooksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PipeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AllBooksPage],
})
export class AllBooksPageModule {}
