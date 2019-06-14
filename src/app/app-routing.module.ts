import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  
  { path: 'learn', loadChildren: './tabs/learn/learn.module#LearnPageModule' },
  { path: 'topics', loadChildren: './tabs/topics/topics.module#TopicsPageModule' },  
  { path: 'results', loadChildren: './tabs/results/results.module#ResultsPageModule' },
  { path: 'how-to-use', loadChildren: './how-to-use/how-to-use.module#HowToUsePageModule' },
  { path: 'practice', loadChildren: './tabs/practice/practice.module#PracticePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
