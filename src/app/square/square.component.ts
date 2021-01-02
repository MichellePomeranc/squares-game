import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  letters = '0123456789ABCDEF';
  color: string;

  constructor() {
  }

  ngOnInit(): void {
    this.getRandomColor();
  }

  getRandomColor() {
    this.color = '#';
    for (var i = 0; i < 6; i++) {
      this.color += this.letters[Math.floor(Math.random() * 16)];
    }
    return this.color;
  }
}
