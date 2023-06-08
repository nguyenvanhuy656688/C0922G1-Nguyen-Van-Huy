import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartScreenComponent} from './component/start-screen/start-screen.component';
import {QuestionScreenComponent} from './component/question-screen/question-screen.component';
import {ResultScreenComponent} from './component/result-screen/result-screen.component';


const routes: Routes = [
  {
    path: '', component: StartScreenComponent
  },
  {
    path: 'question', component: QuestionScreenComponent
  },
  {
    path: 'result',component:ResultScreenComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
