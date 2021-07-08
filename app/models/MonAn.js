export class MonAn{
    maMon = '';
    tenMon = '';
    loaiMon = '';
    giaMon = 0;
    khuyenMai = 0;
    tinhTrang = false;
    hinhAnh = '';
    moTa = '';

    constructor(){

    }

    tinhGiaKhuyenMai = () => {
        let giaKhuyenMai = this.giaMon - (this.giaMon * this.khuyenMai/100);
        return giaKhuyenMai;
    }

    hienThiThongTin = () =>{
        return `
        <ul class="list-group mb-3">
                    <li class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-condensed
                      ">
                      <img id="imgMonAn" src="${this.hinhAnh}" alt="hình món ăn">
                    </li>
                    <li class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-condensed
                      ">
                      <div>
                        <h6 class="my-0">Mã Món</h6>
                      </div>
                      <span id="spMa" name="maMon" class="text-muted">${this.maMon}</span>
                    </li>
                    <li class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-condensed
                      ">
                      <div>
                        <h6 class="my-0">Tên Món</h6>
                      </div>
                      <span id="spTenMon" name="tenMon" class="text-muted">${this.tenMon}</span>
                    </li>
                    <li class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-condensed
                      ">
                      <div>
                        <h6 class="my-0">Loại Món</h6>
                      </div>
                      <span id="spLoaiMon" name="loaiMon" class="text-muted">${this.loaiMon== 'loai1'? 'Chay' : 'Mặn'}</span>
                    </li>
                    <li class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-condensed
                      ">
                      <div>
                        <h6 class="my-0">Giá Món</h6>
                      </div>
                      <span id="spGia" name="giaMon" class="text-muted">${this.giaMon}</span>
                    </li>
                    <li class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-condensed
                      ">
                      <div>
                        <h6 class="my-0">Khuyến Mãi</h6>
                      </div>
                      <span id="spKM" name="khuyenMai" class="text-muted">${this.khuyenMai}</span>
                    </li>
                    <li class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-condensed
                      ">
                      <div>
                        <h6 class="my-0">Giá KM</h6>
                      </div>
                      <span id="spGiaKM" name="giaSauKhuyenMai" class="text-muted">${this.tinhGiaKhuyenMai()}</span>
                    </li>
                    <li class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-condensed
                      ">
                      <div>
                        <h6 class="my-0">Tình Trạng</h6>
                      </div>
                      <span id="spTT" name="tinhTrang" class="text-muted">${this.tinhTrang == '1' ? 'Còn' : 'Hết'}</span>
                    </li>
                    <li class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-condensed
                      ">
                      <div>
                        <h6>Mô tả</h6>

                        <p id="pMoTa" name="moTa" class="text-muted">${this.moTa}</p>
                      </div>
                    </li>
                  </ul>
        `;
    }
}