import { FormsService } from './../forms.service';
import { Component } from '@angular/core';
import { UsersService } from './../../pages/users/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  newData: any = {};

  constructor(
    private usersService: UsersService,
    private formsService: FormsService
  ) {}

  get isFormVisible() {
    return this.formsService.isFormVisible;
  }

  toggleComponent() {
    this.formsService.toggleForm();
  }

  onSubmit() {
    this.usersService.addData(this.newData);
    this.newData = {};
  }
}
