import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// shared
import { SharedModule } from '../shared/shared.module';

// components
import { LoginComponent } from './login.component';

// prettier-ignore
export const ROUTES: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
	// prettier-ignore
	imports: [
	  CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
	declarations: [LoginComponent],
})
export class LoginModule {}
