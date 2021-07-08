import { Menu } from "../models/Menu.js";
import { MonAn} from "../models/MonAn.js"
// let arrMonAn = [];
let menu = new Menu;
menu.layStorage();
menu.renderMenu('tbodyFood');


window.xoaMonAn = function (maMon) {
    menu.xoaMonAn(maMon);
    menu.renderMenu('tbodyFood');
}

window.chinhSua = function (maMon){
    //Trong hàm này xử lý load thông tin món ăn có mã này lên giao diện
    let monAn = menu.layThongTinMonAn(maMon);
    if(monAn){
        //Load dữ liệu lên popup modal
        console.log('monAn', monAn);

        let arrInput = document.querySelectorAll('#foodForm input, #foodForm select, #foodForm textarea');
        
        for(let input of arrInput){
            //{id, className, value, name} = input;
            let name = input.getAttribute('name');
            input.value = monAn[name];
        }
        
        console.log('arrInput', arrInput);

    }

}

document.querySelector('#btnCapNhat').onclick = () => {

    let monAnCapNhat = new MonAn();
    let arrInput = document.querySelectorAll('#foodForm input, #foodForm select, #foodForm textarea');
    for(let input of arrInput){
        let name = input.getAttribute('name');
        let value = input.value;

        monAnCapNhat[name] =value;
    }

    menu.capNhatMonAn(monAnCapNhat.maMon, monAnCapNhat);
    menu.renderMenu('tbodyFood');
    //Tắt popup
    document.querySelector('.btn-secondary').click();
    menu.luuStorage();
}