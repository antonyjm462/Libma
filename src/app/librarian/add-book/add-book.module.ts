import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { IonicModule } from '@ionic/angular';
import { AddBookPage } from './add-book.page';



const routes: Routes = [
  {
    path: '',
    component: AddBookPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    NgxQRCodeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddBookPage]
})
export class AddBookPageModule {}
