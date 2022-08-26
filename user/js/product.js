import { FireBaseService } from './firebaseService.js';
const Product = new FireBaseService();
let insertItem = 1;
async function showProduct() {
  let response = await Product.getAll('products');
  let data = await response.json();
  console.log(data);
  let content = ``;
  if (data) {
    for (const [key, value] of Object.entries(data)) {
      if (value) {
        content += `
          <div class="col-4" >
                    <a href="products_detal.html?id=${key}">
                    <img src="${value.images}">
                    <h4>${value.name}</h4>
                    </a>
                    <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>       
           </div>
            <p>${value.price.toLocaleString('vi-VN')} VND</p>
         </div>
          `;
        insertItem += 1;
      }
    }
  }
  document.getElementById('listsanpham').innerHTML = content;
}
showProduct();
//get by id
async function showProductById() {
  let params = new URLSearchParams(location.search);
  let id = params.get("id");
  console.log(id)
  let response = await Product.getById(`products/${id}`);

  let data = await response.json();
  console.log(data);
  let pro = ``;
  if (data) {
    pro += `
    <div class="row">
            <div class="col-2">
                <img src="${data.images}" width="100%" id="productImg">
            </div>
            <div class="col-2">
                <h1>${data.name}</h1>
                <h4>${data.price} VNĐ</h4>
                    <input type="number" value="1">
                    <a href="" class="btn"  onclick="themVaoGio(${data.id},'${data.name}','${data.price}','${data.images}')" >Add To Card</a>
                    <h3>Product Detail
                        <i class="fa fa-indent"></i>
                    </h3>
                    <br>
                    <p>${data.detail}</p>
            </div>
        </div>
    `;
  }
  document.querySelector('#chitietsp').innerHTML = pro;
}
showProductById();
// //them
// document.getElementById('btnAdd').addEventListener('click', addProduct);
// async function addProduct() {
//   let productName = document.getElementById('tenSP').value;
//   let price = document.getElementById('gia').value;
//   let description = document.getElementById('mota').value;
//   let data = {
//     "id": insertItem,
//     "productName": productName,
//     "price": price,
//     "description": description
//   }
//   let response = await Product.addItem('products', data);
//   alert('Bạn đã thêm thành công');
//   showProduct();
// }