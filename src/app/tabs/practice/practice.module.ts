import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PracticePage } from './practice.page';

import {FoodTrainComponent} from './food/food.component'
import {TransportPracticeComponent} from './transport/transport.component'
import {AnimalsPracticeComponent} from './animals/animals.component'
import {VerbsPracticeComponent} from './verbs/verbs.component'

const routes: Routes = [
  {
    path: '',
    component: PracticePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PracticePage,FoodTrainComponent, TransportPracticeComponent, AnimalsPracticeComponent,VerbsPracticeComponent]
})
export class PracticePageModule {}
