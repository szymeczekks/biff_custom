import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';
import { MenuComponent } from './menu/menu.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [ShellComponent, MenuComponent, FormComponent, DeleteComponent],
  imports: [
    CommonModule,
    RouterModule,
    ShellRoutingModule,
    PanelMenuModule,
    MenubarModule,
    FormsModule
  ]
})
export class ShellModule {}
