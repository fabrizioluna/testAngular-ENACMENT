import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogRoutingModule } from './log-routing.module';
import { LogComponent } from './log.component';

@NgModule({
  imports: [CommonModule, LogRoutingModule],
  declarations: [LogComponent],
})
export class LogModule {}
