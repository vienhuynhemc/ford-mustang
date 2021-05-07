import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quan-ly',
  templateUrl: './quan-ly.component.html',
  styleUrls: ['./quan-ly.component.scss']
})
export class QuanLyComponent implements OnInit {
  // {
  //   "id": 1,
  //   "ten": "Phòng trọ sinh viên",
  //   "dienTich": "20m2",
  //   "gia": 2000000,
  //   "tinh": "TPHCM",
  //   "quan": "1",
  //   "phuong": "Tân Lập",
  //   "diachi": "",
  //   "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
  //   "ngayThem": "15/4/2020",
  //   "loai": 1,
  //   "chieuDai": "7",
  //   "chieuRong": "5",
  //   "phongNgu": "1",
  //   "phongTam": "1",
  //   "loGioi": "2",
  //   "thongTinChiTiet": "Chính chủ cho thuê nhà xưởng tại số 751 Nguyễn Khoái, phù hợp nhiều loại hình kinh doanh, giá ưu đãi nhất. Nhà chính chủ mặt tiền 16,5m hướng Tây. Cách hồ Hoàn Kiếm 6km, có 2 nguồn điện sinh hoạt và 3 pha, sử dụng nước sạch và nước giếng khoan. Diên tích mặt sàn khoảng 800m2, bao gồm sân trước 120m2, tiếp đến nhà 2 tầng 150m2, có 6 phòng. Kho chính rộng 400m2, sau cùng là sân có mái tôn khoảng 100m2. Phù hợp làm nhà xưởng, garo oto, kho bãi. Hợp đồng cho thuê lâu dài, giá thuê thỏa thuận",
  //   "tienIch": "1,2,3,4"
  // }
  count = 11;
  url: any;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.url = "./assets/img/hinh" + this.count + ".jpg";
  }

  onselectFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        console.log(event.target.result);
        console.log(this.url);
      }
    }
  }

  themPhongMoi(){
    let id = this.count;
    
    console.log("Them phong moi thanh cong");
    this._router.navigate(['']);
  }

}
