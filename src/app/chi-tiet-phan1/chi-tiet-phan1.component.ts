import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-phan1',
  templateUrl: './chi-tiet-phan1.component.html',
  styleUrls: ['./chi-tiet-phan1.component.scss']
})
export class ChiTietPhan1Component implements OnInit {

  @Input() ten: any;
  @Input() diachi: any;
  @Input() tien: any;
  @Input() hinh:any;
  constructor() { }

  ngOnInit(): void {
  }

}
