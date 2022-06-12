import { Component, Input, OnInit } from '@angular/core';
import { LogsService } from '@app/firebase/logs.service';
import { FinalResponseMultiples, FindMultiples } from '@app/home/utils/find-multiples/find-multiples';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent implements OnInit {
  constructor(private logsService: LogsService) {}

  ListNumbers: FinalResponseMultiples[] = [];

  @Input()
  username: string | undefined;
  @Input()
  userId: string | undefined;

  async getMultiples(num: any) {
    const result = FindMultiples.findMultiples(num);
    const resultsToSave: number[] = [];
    const thisDate = new Date();

    result.map((num: any) => resultsToSave.push(num.number));

    await this.logsService.createLogRequest({
      requests: [
        {
          enteredNumber: parseInt(num),
          operationResult: resultsToSave,
        },
      ],
      user_name: this.username as string,
      user_id: this.userId as string,
      date: thisDate.toDateString(),
      time: `${thisDate.getHours()}:${thisDate.getMinutes()}:${thisDate.getSeconds()}`,
    });

    this.ListNumbers = result;
  }

  ngOnInit(): void {}
}
