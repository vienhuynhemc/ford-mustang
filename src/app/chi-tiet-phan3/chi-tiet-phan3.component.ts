import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-phan3',
  templateUrl: './chi-tiet-phan3.component.html',
  styleUrls: ['./chi-tiet-phan3.component.scss']
})
export class ChiTietPhan3Component implements OnInit {

  constructor() { }

  @Input() tienIch: any;
  array: any;

  ngOnInit(): void {
    this.array = [];
    let arrayString = this.tienIch.split(",");
    for (let i = 0; i < arrayString.length; i++) {
      this.array[i] = arrayString[i];
    }
  }

}
