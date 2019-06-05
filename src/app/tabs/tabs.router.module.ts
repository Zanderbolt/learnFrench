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
        path: 'info',
        children: [
          {
            path: '',
            loadChildren: './info/info.module#InfoPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/learn',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/learn',
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
