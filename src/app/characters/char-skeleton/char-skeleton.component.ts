import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-skeleton',
  templateUrl: './char-skeleton.component.html',
  styleUrls: ['./char-skeleton.component.scss'],
})
export class CharSkeletonComponent implements OnInit {

  @Input() listSize: number = 24;

  constructor() { }

  ngOnInit() {}

  //function to return list of numbers from 0 to n-1
  numSequence(): Array<number> {
    return Array(this.listSize);
  }

  calcRandomWidth(min: number, max: number): string {
    const val = (Math.floor(Math.random() * (max - min + 1)) + min).toString() + "%";
    return val;
  }
}
