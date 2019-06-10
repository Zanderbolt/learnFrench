import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HowToUsePage } from './how-to-use.page';
import { Presentation01Component } from './presentation01/presentation01.component'
import { Presentation02Component } from './presentation02/presentation02.component'
import { Presentation03Component } from './presentation03/presentation03.component'
import { Presentation04Component } from './presentation04/presentation04.component'




const routes: Routes = [
  {
    path: '',
    component: HowToUsePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HowToUsePage, Presentation01Component, Presentation02Component, Presentation03Component, Presentation04Component]
})
export class HowToUsePageModule {}
