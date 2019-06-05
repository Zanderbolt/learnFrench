import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  
  { path: 'learn', loadChildren: './tabs/learn/learn.module#LearnPageModule' },
  { path: 'info', loadChildren: './tabs/info/info.module#InfoPageModule' },
  { path: 'topics', loadChildren: './tabs/topics/topics.module#TopicsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
