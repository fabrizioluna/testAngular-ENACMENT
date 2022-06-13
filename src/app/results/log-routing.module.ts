import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { LogComponent } from './log.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'results', component: LogComponent, data: { title: marker('Results') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class LogRoutingModule {}
