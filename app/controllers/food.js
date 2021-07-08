import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js"
let menu = new Menu;
//Lấy dữ liệu từ localstorage
menu.layStorage();
//Định nghĩa sự kiện cho nút btnThemMon
document.querySelector('#btnThemMon').onclick = () => {
    //Tạo đối tượng chứa thông tin người dùng nhập vào
    let monAn = new MonAn();

    //Truy xuất đến tất cả các input, select, textarea để lấy thông tin người dùng nhập từ giao diện.
    let arrTagInput = document.querySelectorAll('form input, form select, form textarea');
    
    // for (let i = 0; i <arrTagInput.length; i++){
    //     let input = arrTagInput[i];
    // }

    for(let input of arrTagInput){
        //Mỗi lần duyệt lấy ra 1 tag input
        let {name, value} = input;
        //Gán giá trị value dựa vào name cho object món ăn
        monAn[name] = value;
        // console.log(name, value);
    }

    console.log('arrTagInput', arrTagInput);
    console.log('monAn', monAn);

    //Hiển thị thông tin lên giao diện
    var arrTagOutput = document.querySelectorAll('list-group-item span, list-group-item p');
    
       //Cách 1 dùng queryselector all + name
    // for (let tag of arrTagOutPut) {
    //     //Đối với 1 số thẻ không có thuộc tính dom mà ta thêm vào để lấy giá trị trên thẻ ta dùng phương thức getAttribute
    //     let name = tag.getAttribute('name');
    //     if (name === "giaSauKhuyenMai") {
    //         tag.innerHTML = monAn.tinhGiaKhuyenMai();
    //     } else if(name === 'loaiMon'){
    //         tag.innerHTML = monAn[name] === 'loai1' ? 'Chay' : 'Mặn';
    //     } else if (name==='tinhTrang') {
    //         tag.innerHTML = monAn[name] == '0' ? 'Hết' : 'Còn';
    //     } else {
    //         tag.innerHTML = monAn[name];
    //     }
    // }
    // document.querySelector('#imgMonAn').src = monAn['hinhAnh'];

    //Cách 2 dùng Oop
    document.querySelector('.noiDungHienThi').innerHTML = monAn.hienThiThongTin();

    //Thêm món ăn
    menu.themMonAn(monAn);
    menu.luuStorage();
    // localStorage.setItem('danhSachMonAn', JSON.stringify(arrMonAn));
}