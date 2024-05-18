import { Component } from '@angular/core';
import { UsersService } from './../../pages/users/users.service';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  newData: any = {};

  constructor(
    private usersService: UsersService,
    private deleteService: FormsService
  ) {}

  get isDeleteVisible() {
    return this.deleteService.isDeleteVisible;
  }

  toggleComponent() {
    this.deleteService.toggleDelete();
  }

  onSubmit() {
    this.usersService.deleteByName(this.newData);
    this.newData = {};
  }
}
