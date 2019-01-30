import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third-party
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// shared modules
import { SharedModule } from './shared/shared.module';

// prettier-ignore
const ROUTES: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterModule' }
];

export const firebaseConfig: FirebaseAppConfig = {
	apiKey: 'AIzaSyBtZV2i_09WMMc1ndYJjykI7Yh7C3JSmL0',
	authDomain: 'fitness-app-7f205.firebaseapp.com',
	databaseURL: 'https://fitness-app-7f205.firebaseio.com',
	projectId: 'fitness-app-7f205',
	storageBucket: 'fitness-app-7f205.appspot.com',
	messagingSenderId: '100032732823',
};

@NgModule({
	// prettier-ignore
	imports: [
	  CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {}
