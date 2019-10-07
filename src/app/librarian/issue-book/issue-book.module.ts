import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IssueBookPage } from './issue-book.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: IssueBookPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IssueBookPage]
})
export class IssueBookPageModule {}
