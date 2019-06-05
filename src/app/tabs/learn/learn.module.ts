import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LearnPage } from './learn.page';

import { FoodComponent } from '../topics/food/food.component'
import { AnimalsComponent } from '../topics/animals/animals.component'
import { VerbsComponent } from '../topics/verbs/verbs.component'
import { TransportComponent } from '../topics/transport/transport.component'

const routes: Routes = [
  {
    path: '',
    component: LearnPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LearnPage, FoodComponent, AnimalsComponent, VerbsComponent, TransportComponent]
})
export class LearnPageModule {}
