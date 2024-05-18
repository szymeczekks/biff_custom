import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  host: {'class': 'users'}
})

export class UsersComponent {
  constructor(private api: UsersService) {}
  users: any = [];
  show = 'table';



  ngOnInit() {
    this.api.data$.subscribe(
      (data: any[]) => {
        this.users = data;
      }
    );
  }
}
