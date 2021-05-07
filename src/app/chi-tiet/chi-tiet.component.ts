import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import data from "../_files/data.json";

@Component({
  selector: 'app-chi-tiet',
  templateUrl: './chi-tiet.component.html',
  styleUrls: ['./chi-tiet.component.scss']
})
export class ChiTietComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  id = 0;
  ten = "";
  diachi = "";
  tien = 0;
  chieudai = "";
  chieurong = "";
  phongngu = "";
  phongtam = "";
  thongtinchitiet = "";
  logioi = "";
  tienich = "";
  hinhAnh = "";

  arrayRoot:{
    id:number,
    ten:string,
    dienTich:string,
    gia:number,
    tinh:string,
    quan:string,
    phuong:string,
    diachi:string,
    hinh:string,
    ngayThem:string,
    loai:number,
    chieuDai:string,
    chieuRong:string,
    phongNgu:string,
    phongTam:string,
    loGioi:string,
    thongTinChiTiet:string,
    tienIch:string,
  }[] = []; 

  ngOnInit(): void {
    let objectArray = localStorage.getItem("data");
    this.arrayRoot = JSON.parse(objectArray || '{}');
    this.id = this.router.snapshot.params.id;
    for (let i = 0; i < this.arrayRoot.length; i++) {
      if (this.arrayRoot[i].id == this.id) {
        this.ten = this.arrayRoot[i].ten;
        this.diachi = this.arrayRoot[i].quan + ' ' + this.arrayRoot[i].phuong + " " + this.arrayRoot[i].tinh;
        this.tien = this.arrayRoot[i].gia;
        this.chieurong = this.arrayRoot[i].chieuRong;
        this.chieudai = this.arrayRoot[i].chieuDai;
        this.thongtinchitiet = this.arrayRoot[i].thongTinChiTiet;
        this.phongngu = this.arrayRoot[i].phongNgu;
        this.phongtam = this.arrayRoot[i].phongTam;
        this.logioi = this.arrayRoot[i].loGioi;
        this.tienich = this.arrayRoot[i].tienIch;
        this.hinhAnh = this.arrayRoot[i].hinh;
        break;
      }
    }
  }

}
