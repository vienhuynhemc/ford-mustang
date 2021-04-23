import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.scss', './trang-chu2.component.scss']
})
export class TrangChuComponent implements OnInit {

  @Input() isLogin: any;

  mucgia = 0;
  type = 0;
  diachi = 0;
  chedosort = 0;

<<<<<<< HEAD
=======
  isShowFull = true;
>>>>>>> 9c0d1ae12f4601fa684864d1f825e778af5bef28

  isShow = false;

  arrayRoot = [
    { id: 1, ten: 'Phòng trọ sinh viên', dienTich: '20m2', gia: 2000000, tinh: 'TPHCM', quan: '12', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '15/4/2020', loai: 1 },
    { id: 2, ten: 'Phòng trọ mới xây, khang trang', dienTich: '20m2', gia: 2100000, tinh: 'TPHCM', quan: '11', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '10/4/2020', loai: 1 },
    { id: 3, ten: 'Cho thuê nhà nguyên căn ', dienTich: '15m2', gia: 1500000, tinh: 'TPHCM', quan: '9', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '15/3/2020', loai: 1 },
    { id: 4, ten: 'Phòng trọ giá tốt', dienTich: '20m2', gia: 1500000, tinh: 'TPHCM', quan: '9', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '05/4/2020', loai: 1 },
    { id: 5, ten: 'Phòng trọ giá rẻ', dienTich: '30m2', gia: 3000000, tinh: 'TPHCM', quan: '9', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '05/4/2020', loai: 1 },
    { id: 6, ten: 'Cho thuê phòng trọ giá rẻ', dienTich: '18m2', gia: 2000000, tinh: 'TPHCM', quan: 'Thủ Đức', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '15/4/2020', loai: 0 },
    { id: 7, ten: 'Phòng trọ sinh viên quận Thủ Đức', dienTich: '12m2', gia: 900000, tinh: 'TPHCM', quan: 'Thủ Đức', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '12/4/2020', loai: 1 },
    { id: 8, ten: 'Phòng trọ sinh viên, an ninh, gần trường Nông Lâm', dienTich: '30m2', gia: 3500000, tinh: 'TPHCM', quan: 'Thủ Đức', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '10/4/2020', loai: 1 },
    { id: 9, ten: 'Phòng trọ sinh viên trong làng đại học', dienTich: '21m2', gia: 2200000, tinh: 'TPHCM', quan: 'Thủ Đức', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '05/4/2020', loai: 0 },
    { id: 10, ten: 'Cho thuê phòng trọ gần nhà văn hóa sinh viên ', dienTich: '25m2', gia: 2700000, tinh: 'TPHCM', quan: 'Thủ Đức', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '07/4/2020', loai: 1 },

  ]

  array = [
    { id: 1, ten: 'Phòng trọ sinh viên', dienTich: '20m2', gia: 2000000, tinh: 'TPHCM', quan: '12', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '15/4/2020', loai: 1 },
    { id: 2, ten: 'Phòng trọ mới xây, khang trang', dienTich: '20m2', gia: 2100000, tinh: 'TPHCM', quan: '11', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '10/4/2020', loai: 1 },
    { id: 3, ten: 'Cho thuê nhà nguyên căn ', dienTich: '15m2', gia: 1500000, tinh: 'TPHCM', quan: '9', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '15/3/2020', loai: 1 },
    { id: 4, ten: 'Phòng trọ giá tốt', dienTich: '20m2', gia: 1500000, tinh: 'TPHCM', quan: '9', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '05/4/2020', loai: 1 },
    { id: 5, ten: 'Phòng trọ giá rẻ', dienTich: '30m2', gia: 3000000, tinh: 'TPHCM', quan: '9', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '05/4/2020', loai: 1 },
    { id: 6, ten: 'Cho thuê phòng trọ giá rẻ', dienTich: '18m2', gia: 2000000, tinh: 'TPHCM', quan: 'Thủ Đức', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '15/4/2020', loai: 1 },
    { id: 7, ten: 'Phòng trọ sinh viên quận Thủ Đức', dienTich: '12m2', gia: 900000, tinh: 'TPHCM', quan: 'Thủ Đức', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '12/4/2020', loai: 1 },
    { id: 8, ten: 'Phòng trọ sinh viên, an ninh, gần trường Nông Lâm', dienTich: '30m2', gia: 3500000, tinh: 'TPHCM', quan: 'Thủ Đức', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '10/4/2020', loai: 1 },
    { id: 9, ten: 'Phòng trọ sinh viên trong làng đại học', dienTich: '21m2', gia: 2200000, tinh: 'TPHCM', quan: 'Thủ Đức', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '05/4/2020', loai: 1 },
    { id: 10, ten: 'Cho thuê phòng trọ gần nhà văn hóa sinh viên ', dienTich: '25m2', gia: 2700000, tinh: 'TPHCM', quan: 'Thủ Đức', phuong: 'Tân Lập', diachi: '', hinh: 'https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg', ngayThem: '07/4/2020', loai: 1 },

  ]

  constructor() {

  }

  showChiTiet(id: any) {
    this.isShowFull = false;
  }

  sort() {
    // lam rỗng
    this.array = [];
    // add all
    for (let i = 0; i < this.arrayRoot.length; i++) {
      this.array.unshift({ id: this.arrayRoot[i].id, ten: this.arrayRoot[i].ten, dienTich: this.arrayRoot[i].dienTich, gia: this.arrayRoot[i].gia, tinh: this.arrayRoot[i].tinh, quan: this.arrayRoot[i].quan, phuong: this.arrayRoot[i].phuong, diachi: this.arrayRoot[i].diachi, hinh: this.arrayRoot[i].hinh, ngayThem: this.arrayRoot[i].ngayThem, loai: this.arrayRoot[i].loai })
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

  ngOnInit(): void {
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
