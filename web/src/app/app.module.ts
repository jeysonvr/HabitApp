import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { ObjectiveNewComponent } from './components/objective-new/objective-new.component';
import { ObjectiveListComponent } from './components/objective-list/objective-list.component';
import { HabitNewComponent } from './components/habit-new/habit-new.component';
import { HabitListComponent } from './components/habit-list/habit-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    ObjectiveNewComponent,
    ObjectiveListComponent,
    HabitNewComponent,
    HabitListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
