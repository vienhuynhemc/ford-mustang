import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yeu-thich',
  templateUrl: './yeu-thich.component.html',
  styleUrls: ['./yeu-thich.component.scss','./yeu-thich.component2.scss']
})
export class YeuThichComponent implements OnInit {


  mucgia = 0;
  type = 0;
  diachi = 0;
  chedosort = 0;

  isShow = false;

  arrayRoot: {
    id: number,
    ten: string,
    dienTich: string,
    gia: number,
    tinh: string,
    quan: string,
    phuong: string,
    diachi: string,
    hinh: string,
    ngayThem: string,
    loai: number,
    chieuDai: string,
    chieuRong: string,
    phongNgu: string,
    phongTam: string,
    loGioi: string,
    thongTinChiTiet: string,
    tienIch: string,
  }[] = [];

  array: {
    id: number,
    ten: string,
    dienTich: string,
    gia: number,
    tinh: string,
    quan: string,
    phuong: string,
    diachi: string,
    hinh: string,
    ngayThem: string,
    loai: number,
    chieuDai: string,
    chieuRong: string,
    phongNgu: string,
    phongTam: string,
    loGioi: string,
    thongTinChiTiet: string,
    tienIch: string,
  }[] = [];

  constructor() { }

  ngOnInit(): void {
    let objectArray = localStorage.getItem("yeuThich");
    this.array = JSON.parse(objectArray || '{}');
    this.arrayRoot = JSON.parse(objectArray || '{}');
  }

  remove(id: any) {
    let count = 0;
    while (count < this.array.length) {
      if (this.array[count].id == id) {
        this.array.splice(count, 1);
        break;
      } else {
        count++;
      }
    }
    count = 0;
    while (count < this.arrayRoot.length) {
      if (this.arrayRoot[count].id == id) {
        this.arrayRoot.splice(count, 1);
        break;
      } else {
        count++;
      }
    }
    localStorage.setItem("yeuThich", JSON.stringify(this.arrayRoot));
  }

  sort() {
    // lam rỗng
    this.array = [];
    // add all
    for (let i = 0; i < this.arrayRoot.length; i++) {
      this.array.unshift({
        id: this.arrayRoot[i].id,
        ten: this.arrayRoot[i].ten,
        dienTich: this.arrayRoot[i].dienTich,
        gia: this.arrayRoot[i].gia,
        tinh: this.arrayRoot[i].tinh,
        quan: this.arrayRoot[i].quan,
        phuong: this.arrayRoot[i].phuong,
        diachi: this.arrayRoot[i].diachi,
        hinh: this.arrayRoot[i].hinh,
        ngayThem: this.arrayRoot[i].ngayThem,
        loai: this.arrayRoot[i].loai,
        chieuDai: this.arrayRoot[i].chieuDai,
        chieuRong: this.arrayRoot[i].chieuRong,
        phongNgu: this.arrayRoot[i].phongNgu,
        phongTam: this.arrayRoot[i].phongTam,
        loGioi: this.arrayRoot[i].loGioi,
        thongTinChiTiet: this.arrayRoot[i].thongTinChiTiet,
        tienIch: this.arrayRoot[i].tienIch
      })
    }
    // lọc theo địa chỉ
    let count = 0;
    while (count < this.array.length) {
      let diaChi = this.array[count].quan;
      let diaChiRoot = this.getDiaChiRoot();
      if (diaChi == diaChiRoot) {
        count++;
      } else {
        this.array.splice(count, 1);
      }
    }
    // lọc theo loại
    count = 0;
    while (count < this.array.length) {
      let loai = this.array[count].loai;
      if (loai == this.type) {
        count++;
      } else {
        this.array.splice(count, 1);
      }
    }
    // Mức giá
    let min = 0;
    let max = 0;
    if (this.mucgia == 0) {

    } else if (this.mucgia == 1) {
      min = 800000;
      max = 999999;
      count = 0;
      while (count < this.array.length) {
        let gia = this.array[count].gia;
        if (gia >= min && gia <= max) {
          count++;
        } else {
          this.array.splice(count, 1);
        }
      }
    } else if (this.mucgia == 2) {
      min = 1000000;
      max = 1999999;
      count = 0;
      while (count < this.array.length) {
        let gia = this.array[count].gia;
        if (gia >= min && gia <= max) {
          count++;
        } else {
          this.array.splice(count, 1);
        }
      }
    } else if (this.mucgia == 3) {
      min = 2000000;
      max = 2999999;
      count = 0;
      while (count < this.array.length) {
        let gia = this.array[count].gia;
        if (gia >= min && gia <= max) {
          count++;
        } else {
          this.array.splice(count, 1);
        }
      }
    } else if (this.mucgia == 4) {
      min = 3000000;
      count = 0;
      while (count < this.array.length) {
        let gia = this.array[count].gia;
        if (gia >= min) {
          count++;
        } else {
          this.array.splice(count, 1);
        }
      }
    }
    // sort
    if (this.chedosort == 0) {
      for (let i = 0; i < this.array.length - 1; i++) {
        for (let j = 0; j < this.array.length - 1; j++) {
          if (this.array[j].gia > this.array[j + 1].gia) {
            let temp = this.array[j];
            this.array[j] = this.array[j + 1];
            this.array[j + 1] = temp;
          }
        }
      }
    } else if (this.chedosort == 1) {
      for (let i = 0; i < this.array.length - 1; i++) {
        for (let j = 0; j < this.array.length - 1; j++) {
          if (this.array[j].gia < this.array[j + 1].gia) {
            let temp = this.array[j];
            this.array[j] = this.array[j + 1];
            this.array[j + 1] = temp;
          }
        }
      }
    }
    if (this.array.length == 0) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  getDiaChiRoot() {
    if (this.diachi == 0) return "Thủ Đức"
    else if (this.diachi == 1) return "Quận 1"
    else if (this.diachi == 2) return "Quận 2"
    else return "Quận 4";
  }

  getPriceFormat(gia: any) {
    let numberString = gia + "";
    let a = "";
    let count = 0;
    for (let i = numberString.length - 1; i >= 0; i--) {
      a = numberString[i] + a;
      count++;
      if (count == 3) {
        count = 0;
        a = "," + a;
      }
    }
    if (numberString.length % 3 == 0) {
      return a.substring(1, a.length);
    }
    return a;
  }

}
