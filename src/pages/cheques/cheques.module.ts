import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChequesPage } from './cheques';

@NgModule({
  declarations: [
    ChequesPage,
  ],
  imports: [
    IonicPageModule.forChild(ChequesPage),
  ],
})
export class ChequesPageModule {}
