import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { UsersComponent } from './users.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'users', component: UsersComponent, data: { title: marker('Users') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class UsersRoutingModule {}
