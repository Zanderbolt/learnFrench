import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'learn',
        children: [
          {
            path: '',
            loadChildren: './learn/learn.module#LearnPageModule'
          }
        ]
      },
      {
        path: 'topics',
        children: [
          {
            path: '',
            loadChildren: './topics/topics.module#TopicsPageModule'
          }
        ]
      },
      {
        path: 'results',
        children: [
          {
            path: '',
            loadChildren: './results/results.module#ResultsPageModule'
          }
        ]
      },
      {
        path: 'practice',
        children: [
          {
            path: '',
            loadChildren: './practice/practice.module#PracticePageModule'
          }
        ]
      },
      {
        path: 'how-to-use',
        children: [
          {
            path: '',
            loadChildren: '../how-to-use/how-to-use.module#HowToUsePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/how-to-use',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/how-to-use',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class TabsPageRoutingModule {}
