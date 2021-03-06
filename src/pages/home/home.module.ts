import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';
import {NgxQRCodeModule} from 'ngx-qrcode2';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    TranslateModule.forChild(),
    NgxQRCodeModule
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule { }
