import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  isComponentVisible = false;

  toggleVisibility() {
    // console.log(e);
    this.isComponentVisible = !this.isComponentVisible;
  }
}
