import { Component } from '@angular/core';
import { LogsService } from '@app/firebase/logs.service';

@Component({
  selector: 'log-component',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent {
  constructor(private logsService: LogsService) {}

  allLogs: any = [];

  ngOnInit(): void {
    this.logsService.getGlobalLogs().subscribe((logs) => (this.allLogs = logs));
  }
}
