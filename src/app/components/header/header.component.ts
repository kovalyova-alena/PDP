import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../auth/shared/services/auth/auth.service';

@Component({
	selector: 'app-header',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	@Input()
	user: User;

	@Output()
	logout = new EventEmitter<any>();

	constructor() {}

	logoutUser() {
		this.logout.emit();
	}

	ngOnInit() {}
}
