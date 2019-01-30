import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// shared
import { SharedModule } from '../shared/shared.module';

// components
import { RegisterComponent } from './register.component';

// prettier-ignore
export const ROUTES: Routes = [
  { path: '', component: RegisterComponent }
];

@NgModule({
	// prettier-ignore
	imports: [
	  CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
	declarations: [RegisterComponent],
})
export class RegisterModule {}
