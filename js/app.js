window.onload = function () {
  // localStorage.clear()
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []


  cartItems.forEach(text => {

  const txt = `<div class="cart-i flex">
  <div class="cart-i-img">
     <img src="img/English/${text[0]}" alt="book">
  </div>
  <div class="cart-i-name">
     <div class="book-n">${text[1]}</div>
     <p class="p3-text book-w">${text[2]}</p>
  </div>
  <div class="cart-i-price">$${text[3]}</div>
  <div class="cart-i-quantity">
     <input type="number" name=""  min="1" max="20" value="${text[4]}" onchange="localQuan('${text[1]}',this);totalcount(this) ;totalBill();">
  </div>
  <div class="cart-i-total">$${text[3] * text[4]}</div>
  <div class="item-remove"><img src="img/icons8-multiply-90.png" onclick = "removeitem('${text[1]}',this) ; totalBill()"></div>
  </div>`

      document.getElementById('cart-item').innerHTML += txt
  });

  totalBill()
}

function totalcount(id) {
  let i = id.parentElement.parentElement;
  i.querySelector(".cart-i-total").innerText = "$" + (parseInt(i.querySelector(".cart-i-quantity").querySelector("input").value) * parseInt(i.querySelector(".cart-i-price").innerText.replace("$", "").replace(",", "")))
}

function removeitem(x,id) {
  id.parentElement.parentElement.remove();

  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

  for( i = 0 ; i < cartItems.length ; i++)
  {
      if (JSON.stringify(cartItems[i][1]) === JSON.stringify(x)){
          console.log(i)
          cartItems.splice(i,1);
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          break;

      }
  }
  
}


function totalBill() {
  let total = 0;
  let cart_item = document.getElementsByClassName("cart-i");
  for (let i = 0; i < cart_item.length; i++) {
      total += parseInt(cart_item[i].querySelector(".cart-i-total").innerText.replace("$", "").replace(",", ""));

  }
  let id = document.querySelector(".cart-bill-grand");
  let val = "$" + total;
  id.querySelector("p").innerText = val;
}
function localQuan(ont,id){
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
  // let cart_item = document.getElementsByClassName("cart-i");
   quan = id.value
   console.log(quan)
  console.log(ont)
  cartItems.forEach(text => {
        if (text[1] == ont){
            text[4] = parseInt(quan) 
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
        }
 })
 totalcount(id)
}





const togglebutton = document.getElementById('navbar-toggle')
const navbarlink = document.getElementById('navbar-link')
const lform = document.getElementsByClassName('l-form')
const sform = document.getElementsByClassName('s-form')
const loginform = document.getElementsByClassName('login-form')
const cicon = document.getElementsByClassName('close-icon')
const usericon = document.getElementsByClassName('user-acc')

//Menu
togglebutton.addEventListener('click', () => {
  navbarlink.classList.toggle('nav-active')
})

function signup() {
  lform[0].style.left = '-100%';
  sform[0].style.left = '0'
}
function login() {
  lform[0].style.left = '0';
  sform[0].style.left = '100%';
}
cicon[0].addEventListener('click', () => {
  loginform[0].classList.toggle('f-inactive')
}
)
usericon[0].addEventListener('click', () => {
  loginform[0].classList.toggle('f-inactive')
})


//Product
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})



//shop.js


 function addtocart(cImg, cName, cGrade, cPrice) {

      list_i = [cImg, cName, cGrade, cPrice, 1]

      if (isalreadyincart(list_i) == true) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        cartItems.push(list_i)
        localStorage.setItem('cartItems', JSON.stringify(cartItems))

        alert("Added");

      }
      else {
        alert("Already in cart");
      }

    }

    function isalreadyincart(list_i) {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
      for (let i = 0; i < cartItems.length; i++) {


        if (cartItems[i][1] == list_i[1] && cartItems[i][2] == list_i[2]) {
          return false;
        }
      }
      return true;
    }
    function addtofav(cImg, cName, cGrade, cPrice) {

      list_j = [cImg, cName, cGrade, cPrice, 1]

      if (isalreadyinfav(list_j) == true) {
        const favItems = JSON.parse(localStorage.getItem('favItems')) || [];

        favItems.push(list_j)
        localStorage.setItem('favItems', JSON.stringify(favItems))

        alert("Added");

      }
      else {
        alert("Already in favorite");
      }

    }

    function isalreadyinfav(list_j) {
      const favItems = JSON.parse(localStorage.getItem('favItems')) || []
      for (let i = 0; i < favItems.length; i++) {


        if (favItems[i][1] == list_j[1] && favItems[i][2] == list_j[2]) {
          return false;
        }
      }
      return true;
    }



    //const mainelement = document.getElementsByClassName('s-book-card')

    for (i = 0; i < mainelement.length; i++) {
      const mainimg = mainelement[i].querySelector('.s-book-card-img').getElementsByTagName('img')[0]

      const mainname = mainelement[i].querySelector('.book-n').innerHTML
      const maincat = mainelement[i].querySelector('.book-c').innerHTML
      
      const mainwri = mainelement[i].querySelector('.book-w').innerHTML
      const mainprice = mainelement[i].querySelector('.book-p').innerHTML

      mainimg.onclick = function (){
        const mainItems = JSON.parse(localStorage.getItem('mainItems')) || [];

        mainItems[0] = [mainimg.getAttribute('src') , mainname , maincat , mainwri , mainprice]
        localStorage.setItem('mainItems', JSON.stringify(mainItems))

        window.location.href='bshop.html';

      }
    }


//bshop js



