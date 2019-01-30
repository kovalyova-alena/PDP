import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from './store';

import { AppComponent } from './app.component';

// feature modules
import { AuthModule } from './auth/auth.module';

// components
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

// routes
export const ROUTES: Routes = [];

@NgModule({
	declarations: [AppComponent, HeaderComponent, NavComponent],
	// prettier-ignore
	imports: [
	  BrowserModule,
    AuthModule,
    RouterModule.forRoot(ROUTES),

  ],
	providers: [Store],
	bootstrap: [AppComponent],
})
export class AppModule {}
