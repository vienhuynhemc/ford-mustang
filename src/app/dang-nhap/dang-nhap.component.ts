import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {

  username = "";
  password = "";

  isShowInvalid = false;
  isShowEmpty = false;

  // checkLogin = false;


  array = [{ user: "mochy", pass: "123" },
  { user: "ford", pass: "mustang" }]

  isTrue = false;

  constructor() { }

  ngOnInit(): void {

  }

  login() {
    this.isShowInvalid = false;
    this.isShowEmpty = false;
    


    let index = 0;
    while (index < this.array.length) {
      let user = this.array[index].user;

      let pass = this.array[index].pass;

      if (this.username == user && pass == this.password) {
      } else if (this.username != user || pass != this.password) {
        this.isShowInvalid = true;
      } else if (this.username == "" || pass == "") {
        this.isShowEmpty = true;

      }

    }


  }
  // isLogin1(){
  //   this.isLogin1.emit(this.checkLogin);
  // }

}
