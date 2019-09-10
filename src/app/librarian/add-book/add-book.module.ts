import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import QRCode from 'qrcode';
import { IonicModule } from '@ionic/angular';
import { QrCodeAllModule } from 'ngx-qrcode-all';
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
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    QRCode,
    QrCodeAllModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddBookPage]
})
export class AddBookPageModule {}
