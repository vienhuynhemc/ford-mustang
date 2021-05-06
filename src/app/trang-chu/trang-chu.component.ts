import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SharedService } from '../shared-service-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.scss', './trang-chu2.component.scss']
})
export class TrangChuComponent implements OnInit {

  mucgia = 0;
  type = 0;
  diachi = 0;
  chedosort = 0;

  isShow = false;

  // login
  iSSuccessLogin = false;

  arrayRoot = [
    {
      "id": 1,
      "ten": "Phòng trọ sinh viên",
      "dienTich": "20m2",
      "gia": 2000000,
      "tinh": "TPHCM",
      "quan": "1",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "15/4/2020",
      "loai": 1,
      "chieuDai": "7",
      "chieuRong": "5",
      "phongNgu": "1",
      "phongTam": "1",
      "loGioi": "2",
      "thongTinChiTiet": "Chính chủ cho thuê nhà xưởng tại số 751 Nguyễn Khoái, phù hợp nhiều loại hình kinh doanh, giá ưu đãi nhất. Nhà chính chủ mặt tiền 16,5m hướng Tây. Cách hồ Hoàn Kiếm 6km, có 2 nguồn điện sinh hoạt và 3 pha, sử dụng nước sạch và nước giếng khoan. Diên tích mặt sàn khoảng 800m2, bao gồm sân trước 120m2, tiếp đến nhà 2 tầng 150m2, có 6 phòng. Kho chính rộng 400m2, sau cùng là sân có mái tôn khoảng 100m2. Phù hợp làm nhà xưởng, garo oto, kho bãi. Hợp đồng cho thuê lâu dài, giá thuê thỏa thuận",
      "tienIch": "1,2,3,4"
    },
    {
      "id": 2,
      "ten": "Phòng trọ mới xây, khang trang",
      "dienTich": "20m2",
      "gia": 2100000,
      "tinh": "TPHCM",
      "quan": "2",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "10/4/2020",
      "loai": 1,
      "chieuDai": "15",
      "chieuRong": "5",
      "phongNgu": "4",
      "phongTam": "5",
      "loGioi": "4",
      "thongTinChiTiet": "Cho thuê nhà mặt tiền đường Đặng Văn Ngữ, Phường 11, Phú Nhuận. Thông tin nhà cho thuê: Diện tích: 5x17m Kết cấu: Hầm, trệt, lầu, sân thượng. Có sân rộng Nhà nằm ngay vị trí đắc địa, trục chính trung tâm quận Phú Nhuận, giao thông thuận tiện di chuyển các quận 1,3, Tân Bình... Các sân bay 15 phút đi xe. Thuận tiện làm công ty, nha khoa, phòng công chứng, lớp học, thẩm mỹ viện... Giá cho thuê: 35 triệu/tháng.",
      "tienIch": "1,2,4"
    },
    {
      "id": 3,
      "ten": "Cho thuê nhà nguyên căn ",
      "dienTich": "15m2",
      "gia": 1500000,
      "tinh": "TPHCM",
      "quan": "3",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "15/3/2020",
      "loai": 1,
      "chieuDai": "10",
      "chieuRong": "6",
      "phongNgu": "7",
      "phongTam": "8",
      "loGioi": "3",
      "thongTinChiTiet": "* Diện tích 8x20m 1 trệt, 3 lầu. Giá thuê: 50 triệu/tháng. Đường trước nhà lớn khu kinh doanh sâm đông đúc nhộn nhịp vị trí đẹp để kinh doanh địa chỉ dễ tìm, thích hợp thuê làm văn phòng công ty, trường học, trung tâm Anh ngữ, spa... Ưu tiên khách hàng thiện chí thuê nhanh & lâu dài.",
      "tienIch": "1,3,4"
    },
    {
      "id": 4,
      "ten": "Phòng trọ giá tốt",
      "dienTich": "20m2",
      "gia": 1500000,
      "tinh": "TPHCM",
      "quan": "4",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "05/4/2020",
      "loai": 1,
      "chieuDai": "10",
      "chieuRong": "6",
      "phongNgu": "7",
      "phongTam": "8",
      "loGioi": "3",
      "thongTinChiTiet": "Khu vực sầm uất, tập trung nhiều văn phòng, gần siêu thị, bệnh viện, trường học, ngân hàng, vị trí thích hợp để ở, làm văn phòng công ty, trung tâm đào tạo, mầm non, spa, thẩm mỹ, tiện kinh doanh mọi ngành nghề..",
      "tienIch": "1,2,3,4"
    },
    {
      "id": 5,
      "ten": "Phòng trọ giá rẻ",
      "dienTich": "30m2",
      "gia": 3000000,
      "tinh": "TPHCM",
      "quan": "9",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "05/4/2020",
      "loai": 1,
      "chieuDai": "13",
      "chieuRong": "4",
      "phongNgu": "9",
      "phongTam": "5",
      "loGioi": "2",
      "thongTinChiTiet": "Nằm ngay trung tâm quận Tân Bình (xem hình thật). Nhà 2 mặt tiền hẻm to nhà ra đường LÝ THƯỜNG KIỆT 100m. Nằm cách Trường Đại Học BÁCH KHOA 700m, cách chợ Ông Địa 100m, nằm sau lưng trường Nguyễn Thái Bình, trung tâm thể dục thể thao Tân Bình sát bên nhà.",
      "tienIch": "1,2,3"
    },
    {
      "id": 6,
      "ten": "Cho thuê phòng trọ giá rẻ",
      "dienTich": "18m2",
      "gia": 2000000,
      "tinh": "TPHCM",
      "quan": "Thủ Đức",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "15/4/2020",
      "loai": 1,
      "chieuDai": "13",
      "chieuRong": "4",
      "phongNgu": "9",
      "phongTam": "5",
      "loGioi": "2",
      "thongTinChiTiet": "Phòng cho thuê ngay ngã tư Bảy Hiền mới xây giá chỉ từ 4triệu. Tòa nhà mới xây bao gồm camera an ninh, cửa vân tay, thang máy, k chung chủ, giờ giấc tự do. Phòng rộng 25 - 30m2 có giường, nệm, tủ, ban công, kệ bếp.",
      "tienIch": "1,2,3"
    },
    {
      "id": 7,
      "ten": "Phòng trọ sinh viên quận Thủ Đức",
      "dienTich": "12m2",
      "gia": 900000,
      "tinh": "TPHCM",
      "quan": "Thủ Đức",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "12/4/2020",
      "loai": 1,
      "chieuDai": "13",
      "chieuRong": "4",
      "phongNgu": "9",
      "phongTam": "5",
      "loGioi": "2",
      "thongTinChiTiet": "Cho thuê phòng trọ có tổng diện tích 20 m2, vị trí đặt tọa lạc tại Quận Tân Bình, Hồ Chí Minh. Thuê ngay với giá thị trường chỉ 4 triệu/tháng, thuận mua vừa bán.",
      "tienIch": "1,2,3"
    },
    {
      "id": 8,
      "ten": "Phòng trọ sinh viên, an ninh, gần trường Nông Lâm",
      "dienTich": "30m2",
      "gia": 3500000,
      "tinh": "TPHCM",
      "quan": "Thủ Đức",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "10/4/2020",
      "loai": 1,
      "chieuDai": "13",
      "chieuRong": "4",
      "phongNgu": "9",
      "phongTam": "5",
      "loGioi": "2",
      "thongTinChiTiet": "Phòng mới, thoáng mát, sạch sẽ, không chung chủ. Mỗi phòng đều có ban công, cửa sổ, nhà tắm + nhà vệ sinh riêng. Chỗ để xe rộng rãi, có bảo vệ 24/24",
      "tienIch": "1,2,3"
    },
    {
      "id": 9,
      "ten": "Phòng trọ sinh viên trong làng đại học",
      "dienTich": "21m2",
      "gia": 2200000,
      "tinh": "TPHCM",
      "quan": "Thủ Đức",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "05/4/2020",
      "loai": 1,
      "chieuDai": "13",
      "chieuRong": "4",
      "phongNgu": "9",
      "phongTam": "5",
      "loGioi": "2",
      "thongTinChiTiet": "Gần chợ, tiện ích siêu thị, gym, trường học, công viên, ... Phòng có gác có thể ở tối đa 4 người. Thích hợp sinh viên ở ghép, gia đình nhỏ, nhân viên văn phòng... Nội thất cơ bản: máy lạnh, tắm nóng lạnh, bếp từ, kệ dép, quạt, bàn ghế ăn...Và set up full nội thất",
      "tienIch": "1,2,3"
    },
    {
      "id": 10,
      "ten": "Cho thuê phòng trọ gần nhà văn hóa sinh viên ",
      "dienTich": "25m2",
      "gia": 2700000,
      "tinh": "TPHCM",
      "quan": "Thủ Đức",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "07/4/2020",
      "loai": 1,
      "chieuDai": "13",
      "chieuRong": "4",
      "phongNgu": "9",
      "phongTam": "5",
      "loGioi": "2",
      "thongTinChiTiet": "Phòng mới, khang trang, sạch đẹp, có gác. Tiện nghi đầy đủ, tiêu chuẩn (free wifi, nước nóng). Hệ thống an ninh tốt ( camera 24/24, cửa khoá từ ). Giờ giấc tự do, chủ nhà thân thiện cởi mở.",
      "tienIch": "1,2,3"
    }
  ];
  array = [
    {
      "id": 1,
      "ten": "Phòng trọ sinh viên",
      "dienTich": "20m2",
      "gia": 2000000,
      "tinh": "TPHCM",
      "quan": "1",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "15/4/2020",
      "loai": 1,
      "chieuDai": "7",
      "chieuRong": "5",
      "phongNgu": "1",
      "phongTam": "1",
      "loGioi": "2",
      "thongTinChiTiet": "Chính chủ cho thuê nhà xưởng tại số 751 Nguyễn Khoái, phù hợp nhiều loại hình kinh doanh, giá ưu đãi nhất. Nhà chính chủ mặt tiền 16,5m hướng Tây. Cách hồ Hoàn Kiếm 6km, có 2 nguồn điện sinh hoạt và 3 pha, sử dụng nước sạch và nước giếng khoan. Diên tích mặt sàn khoảng 800m2, bao gồm sân trước 120m2, tiếp đến nhà 2 tầng 150m2, có 6 phòng. Kho chính rộng 400m2, sau cùng là sân có mái tôn khoảng 100m2. Phù hợp làm nhà xưởng, garo oto, kho bãi. Hợp đồng cho thuê lâu dài, giá thuê thỏa thuận",
      "tienIch": "1,2,3,4"
    },
    {
      "id": 2,
      "ten": "Phòng trọ mới xây, khang trang",
      "dienTich": "20m2",
      "gia": 2100000,
      "tinh": "TPHCM",
      "quan": "2",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "10/4/2020",
      "loai": 1,
      "chieuDai": "15",
      "chieuRong": "5",
      "phongNgu": "4",
      "phongTam": "5",
      "loGioi": "4",
      "thongTinChiTiet": "Cho thuê nhà mặt tiền đường Đặng Văn Ngữ, Phường 11, Phú Nhuận. Thông tin nhà cho thuê: Diện tích: 5x17m Kết cấu: Hầm, trệt, lầu, sân thượng. Có sân rộng Nhà nằm ngay vị trí đắc địa, trục chính trung tâm quận Phú Nhuận, giao thông thuận tiện di chuyển các quận 1,3, Tân Bình... Các sân bay 15 phút đi xe. Thuận tiện làm công ty, nha khoa, phòng công chứng, lớp học, thẩm mỹ viện... Giá cho thuê: 35 triệu/tháng.",
      "tienIch": "1,2,4"
    },
    {
      "id": 3,
      "ten": "Cho thuê nhà nguyên căn ",
      "dienTich": "15m2",
      "gia": 1500000,
      "tinh": "TPHCM",
      "quan": "3",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "15/3/2020",
      "loai": 1,
      "chieuDai": "10",
      "chieuRong": "6",
      "phongNgu": "7",
      "phongTam": "8",
      "loGioi": "3",
      "thongTinChiTiet": "* Diện tích 8x20m 1 trệt, 3 lầu. Giá thuê: 50 triệu/tháng. Đường trước nhà lớn khu kinh doanh sâm đông đúc nhộn nhịp vị trí đẹp để kinh doanh địa chỉ dễ tìm, thích hợp thuê làm văn phòng công ty, trường học, trung tâm Anh ngữ, spa... Ưu tiên khách hàng thiện chí thuê nhanh & lâu dài.",
      "tienIch": "1,3,4"
    },
    {
      "id": 4,
      "ten": "Phòng trọ giá tốt",
      "dienTich": "20m2",
      "gia": 1500000,
      "tinh": "TPHCM",
      "quan": "4",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "05/4/2020",
      "loai": 1,
      "chieuDai": "10",
      "chieuRong": "6",
      "phongNgu": "7",
      "phongTam": "8",
      "loGioi": "3",
      "thongTinChiTiet": "Khu vực sầm uất, tập trung nhiều văn phòng, gần siêu thị, bệnh viện, trường học, ngân hàng, vị trí thích hợp để ở, làm văn phòng công ty, trung tâm đào tạo, mầm non, spa, thẩm mỹ, tiện kinh doanh mọi ngành nghề..",
      "tienIch": "1,2,3,4"
    },
    {
      "id": 5,
      "ten": "Phòng trọ giá rẻ",
      "dienTich": "30m2",
      "gia": 3000000,
      "tinh": "TPHCM",
      "quan": "9",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "05/4/2020",
      "loai": 1,
      "chieuDai": "13",
      "chieuRong": "4",
      "phongNgu": "9",
      "phongTam": "5",
      "loGioi": "2",
      "thongTinChiTiet": "Nằm ngay trung tâm quận Tân Bình (xem hình thật). Nhà 2 mặt tiền hẻm to nhà ra đường LÝ THƯỜNG KIỆT 100m. Nằm cách Trường Đại Học BÁCH KHOA 700m, cách chợ Ông Địa 100m, nằm sau lưng trường Nguyễn Thái Bình, trung tâm thể dục thể thao Tân Bình sát bên nhà.",
      "tienIch": "1,2,3"
    },
    {
      "id": 6,
      "ten": "Cho thuê phòng trọ giá rẻ",
      "dienTich": "18m2",
      "gia": 2000000,
      "tinh": "TPHCM",
      "quan": "Thủ Đức",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "15/4/2020",
      "loai": 1,
      "chieuDai": "13",
      "chieuRong": "4",
      "phongNgu": "9",
      "phongTam": "5",
      "loGioi": "2",
      "thongTinChiTiet": "Phòng cho thuê ngay ngã tư Bảy Hiền mới xây giá chỉ từ 4triệu. Tòa nhà mới xây bao gồm camera an ninh, cửa vân tay, thang máy, k chung chủ, giờ giấc tự do. Phòng rộng 25 - 30m2 có giường, nệm, tủ, ban công, kệ bếp.",
      "tienIch": "1,2,3"
    },
    {
      "id": 7,
      "ten": "Phòng trọ sinh viên quận Thủ Đức",
      "dienTich": "12m2",
      "gia": 900000,
      "tinh": "TPHCM",
      "quan": "Thủ Đức",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "12/4/2020",
      "loai": 1,
      "chieuDai": "13",
      "chieuRong": "4",
      "phongNgu": "9",
      "phongTam": "5",
      "loGioi": "2",
      "thongTinChiTiet": "Cho thuê phòng trọ có tổng diện tích 20 m2, vị trí đặt tọa lạc tại Quận Tân Bình, Hồ Chí Minh. Thuê ngay với giá thị trường chỉ 4 triệu/tháng, thuận mua vừa bán.",
      "tienIch": "1,2,3"
    },
    {
      "id": 8,
      "ten": "Phòng trọ sinh viên, an ninh, gần trường Nông Lâm",
      "dienTich": "30m2",
      "gia": 3500000,
      "tinh": "TPHCM",
      "quan": "Thủ Đức",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "10/4/2020",
      "loai": 1,
      "chieuDai": "13",
      "chieuRong": "4",
      "phongNgu": "9",
      "phongTam": "5",
      "loGioi": "2",
      "thongTinChiTiet": "Phòng mới, thoáng mát, sạch sẽ, không chung chủ. Mỗi phòng đều có ban công, cửa sổ, nhà tắm + nhà vệ sinh riêng. Chỗ để xe rộng rãi, có bảo vệ 24/24",
      "tienIch": "1,2,3"
    },
    {
      "id": 9,
      "ten": "Phòng trọ sinh viên trong làng đại học",
      "dienTich": "21m2",
      "gia": 2200000,
      "tinh": "TPHCM",
      "quan": "Thủ Đức",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "05/4/2020",
      "loai": 1,
      "chieuDai": "13",
      "chieuRong": "4",
      "phongNgu": "9",
      "phongTam": "5",
      "loGioi": "2",
      "thongTinChiTiet": "Gần chợ, tiện ích siêu thị, gym, trường học, công viên, ... Phòng có gác có thể ở tối đa 4 người. Thích hợp sinh viên ở ghép, gia đình nhỏ, nhân viên văn phòng... Nội thất cơ bản: máy lạnh, tắm nóng lạnh, bếp từ, kệ dép, quạt, bàn ghế ăn...Và set up full nội thất",
      "tienIch": "1,2,3"
    },
    {
      "id": 10,
      "ten": "Cho thuê phòng trọ gần nhà văn hóa sinh viên ",
      "dienTich": "25m2",
      "gia": 2700000,
      "tinh": "TPHCM",
      "quan": "Thủ Đức",
      "phuong": "Tân Lập",
      "diachi": "",
      "hinh": "https://cdn.propzy.vn/listing/thumbnail/map/2020/11/11/listing_a368fd01162c45891101423b46c71c047759af9e5258dd3b80f0cee1df59ac31.jpg",
      "ngayThem": "07/4/2020",
      "loai": 1,
      "chieuDai": "13",
      "chieuRong": "4",
      "phongNgu": "9",
      "phongTam": "5",
      "loGioi": "2",
      "thongTinChiTiet": "Phòng mới, khang trang, sạch đẹp, có gác. Tiện nghi đầy đủ, tiêu chuẩn (free wifi, nước nóng). Hệ thống an ninh tốt ( camera 24/24, cửa khoá từ ). Giờ giấc tự do, chủ nhà thân thiện cởi mở.",
      "tienIch": "1,2,3"
    }
  ];

  constructor(private _router: Router, private _sharedService: SharedService) {
  }

  remove(id:any){
    let count = 0;
    while(count<this.array.length){
      if(this.array[count].id == id){
        this.array.splice(count,1);
        break;
      }else{
        count++;
      }
    }
    count = 0;
    while(count<this.arrayRoot.length){
      if(this.arrayRoot[count].id == id){
        this.arrayRoot.splice(count,1);
        break;
      }else{
        count++;
      }
    }
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

  dangXuat() {
    this._sharedService.update(false);
    this._router.navigate(['dang-nhap']);
  }

  ngOnInit(): void {
    this._sharedService.service.subscribe(data => this.iSSuccessLogin = data);
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
