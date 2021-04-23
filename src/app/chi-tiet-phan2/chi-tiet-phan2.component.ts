import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-phan2',
  templateUrl: './chi-tiet-phan2.component.html',
  styleUrls: ['./chi-tiet-phan2.component.scss']
})
export class ChiTietPhan2Component implements OnInit {

  @Input() chieudai:any;
  @Input() chieurong:any;
  @Input() thongtinchitiet:any;
  @Input() phongngu:any;
  @Input() phongtam:any;

  constructor() { }

  ngOnInit(): void {
  }

}
