import { Component, Input, OnInit } from '@angular/core';
import { FinalResponseMultiples, FindMultiples } from '@app/home/utils/find-multiples/find-multiples';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent implements OnInit {
  constructor() {}

  ListNumbers: FinalResponseMultiples[] = [];
  @Input()
  username: string | undefined;

  getMultiples(num: any) {
    const result = FindMultiples.findMultiples(num);
    this.ListNumbers = result;
  }

  ngOnInit(): void {}
}
