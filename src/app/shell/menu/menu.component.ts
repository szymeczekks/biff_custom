
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(
    private formsService: FormsService
  ) {}
  items: MenuItem[] | undefined;

  toggleComponent(event: MouseEvent) {
    const target = event.currentTarget as HTMLAnchorElement; // Rzutowanie typu na HTMLButtonElement
    const label = target.getAttribute('data-el');
    if (label === "New") {
      this.formsService.toggleForm();
    } else if (label === "Delete") {
      this.formsService.toggleDelete();
    }
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus'
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus'
          },
          // {
          //   label: 'Search',
          //   icon: 'pi pi-fw pi-users'
          // }
        ]
      }
    ];
  }
}
