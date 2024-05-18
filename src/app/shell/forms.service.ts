import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  isFormVisible = false;
  isDeleteVisible = false;

  toggleDelete() {
    this.isDeleteVisible = !this.isDeleteVisible;
  }

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }
}
