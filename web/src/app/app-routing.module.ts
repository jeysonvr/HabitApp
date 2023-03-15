import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitListComponent } from './components/habit-list/habit-list.component';
import { HabitNewComponent } from './components/habit-new/habit-new.component';
import { LoginComponent } from './components/login/login.component';
import { ObjectiveListComponent } from './components/objective-list/objective-list.component';
import { ObjectiveNewComponent } from './components/objective-new/objective-new.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path: '', component:  LoginComponent},
  { path: 'signin', component:  SigninComponent},
  { path: 'objectiveList/:isEmpty', component: ObjectiveListComponent},
  { path: 'newObjective', component: ObjectiveNewComponent},
  { path: 'habitList/:isEmpty', component: HabitListComponent},
  { path: 'newHabit', component: HabitNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
