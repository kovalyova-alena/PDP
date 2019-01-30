import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// services
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	error: string;

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit() {}

	async loginUser(event: FormGroup) {
		const { email, password } = event.value;
		try {
			await this.authService.loginUser(email, password);
			this.router.navigate(['/']).then(
				nav => {
					console.log(nav);
				},
				err => {
					console.log(err);
				}
			);
		} catch (err) {
			this.error = err.message;
		}
	}
}
