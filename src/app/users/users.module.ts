import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { RouterModule, Routes } from '@angular/router';

import { ViewComponent } from './view/view.component';
import { UserComponent } from './user/user.component';

import {ReactiveFormsModule} from '@angular/forms';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent
  },
]


@NgModule({
  declarations: [
    ViewComponent,
    UserComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
