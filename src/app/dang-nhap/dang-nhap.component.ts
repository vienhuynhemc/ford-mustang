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
  data: any;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.isShowInvalid = false;
    this.isShowEmpty = false;

    let index = 0;
    let isSuccess = false;
    while (index < this.array.length) {
      let user = this.array[index].user;

      let pass = this.array[index].pass;

      if (this.username == user && pass == this.password) {
        // thanh cong 
        console.log("dang nhap thanh cong")
        this.isShowEmpty = false;
        this.isShowInvalid = false;
        isSuccess = true;
        break;
      } else {
        index++;
      }

    }

    if (!isSuccess) {
      if (this.username == "" || this.password == "") {
        this.isShowEmpty = true;
        this.isShowInvalid = false;
      } else {
        this.isShowEmpty = false;
        this.isShowInvalid = true;
      }
    } else {
      let object = { username: this.username, password: this.password };
      localStorage.setItem("user", JSON.stringify(object));
      this._router.navigate(['']);
    }
  }
  // isLogin1(){
  //   this.isLogin1.emit(this.checkLogin);
  // }

}
