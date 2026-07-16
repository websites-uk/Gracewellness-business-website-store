/*=====================================
  Grace Wellness
  script.js - Part 1
======================================*/

// ==========================
// PRODUCTS
// ==========================

const products = [
{
id:1,
name:"Massage Gun",
price:89.99,
image:"images/products/product1.jpg",
category:"Massage Tools"
},

{
id:2,
name:"Lavender Massage Oil",
price:18.99,
image:"images/products/product2.jpg",
category:"Massage Oil"
},

{
id:3,
name:"Vitamin C Serum",
price:24.99,
image:"images/products/product3.jpg",
category:"Skincare"
},

{
id:4,
name:"Neck Massager",
price:65,
image:"images/products/product4.jpg",
category:"Massage Tools"
},

{
id:5,
name:"Jade Roller",
price:15.99,
image:"images/products/product5.jpg",
category:"Skincare"
},

{
id:6,
name:"Facial Cleanser",
price:16.99,
image:"images/products/product6.jpg",
category:"Skincare"
},

{
id:7,
name:"Body Scrub",
price:19.99,
image:"images/products/product7.jpg",
category:"Skincare"
},

{
id:8,
name:"Hot Stone Set",
price:39.99,
image:"images/products/product8.jpg",
category:"Massage Tools"
},

{
id:9,
name:"Essential Oil Set",
price:22.99,
image:"images/products/product9.jpg",
category:"Massage Oil"
},

{
id:10,
name:"Foam Roller",
price:28.99,
image:"images/products/product10.jpg",
category:"Massage Tools"
},

{
id:11,
name:"Body Lotion",
price:17.50,
image:"images/products/product11.jpg",
category:"Body Care"
},

{
id:12,
name:"Aloe Vera Gel",
price:13.99,
image:"images/products/product12.jpg",
category:"Body Care"
}

];


// ==========================
// CART
// ==========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();


// ==========================
// PRODUCT RENDERING
// ==========================

const productContainer = document.getElementById("product-list");

function displayProducts(list){

if(!productContainer) return;

productContainer.innerHTML="";

list.forEach(product=>{

productContainer.innerHTML += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p class="price">£${product.price.toFixed(2)}</p>

<p>${product.category}</p>

<button onclick="addToCart(${product.id})">

Add to Cart

</button>

</div>

`;

});

}

displayProducts(products);


// ==========================
// SEARCH
// ==========================

const search=document.getElementById("search");

if(search){

search.addEventListener("keyup",()=>{

const keyword=search.value.toLowerCase();

const filtered=products.filter(product=>

product.name.toLowerCase().includes(keyword)

||

product.category.toLowerCase().includes(keyword)

);

displayProducts(filtered);

});

}


// ==========================
// ADD TO CART
// ==========================

function addToCart(id){

const product=products.find(item=>item.id===id);

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

showNotification(product.name+" added to cart.");

}


// ==========================
// CART COUNT
// ==========================

function updateCartCount(){

const count=document.getElementById("cart-count");

if(count){

count.innerText=cart.length;

}

}


// ==========================
// NOTIFICATION
// ==========================

function showNotification(message){

const note=document.createElement("div");

note.className="notification";

note.innerText=message;

document.body.appendChild(note);

setTimeout(()=>{

note.classList.add("show");

},100);

setTimeout(()=>{

note.classList.remove("show");

setTimeout(()=>{

note.remove();

},400);

},2500);

}
/*=====================================
  Grace Wellness
  script.js - Part 2
======================================*/


// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("show-menu");

});

}



// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};



// ==========================
// NEWSLETTER
// ==========================

const newsletter=document.querySelector("#newsletter form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you for subscribing!");

newsletter.reset();

});

}



// ==========================
// CART TOTAL
// ==========================

function cartTotal(){

let total=0;

cart.forEach(item=>{

total+=item.price;

});

return total.toFixed(2);

}



// ==========================
// CHECKOUT
// ==========================

function checkout(){

if(cart.length===0){

alert("Your cart is empty.");

return;

}

const total=cartTotal();

const reference="GW"+Date.now();

FlutterwaveCheckout({

public_key:"FLWPUBK-2b01ca9653cbf025d8843ce27e456c4b-X",

tx_ref:reference,

amount:total,

currency:"GBP",

payment_options:"card,banktransfer,ussd",

customer:{

email:"customer@example.com",

phone_number:"0000000000",

name:"Grace Wellness Customer"

},

customizations:{

title:"Grace Wellness",

description:"Wellness Products",

logo:"images/logo.png"

},

callback:function(data){

alert("Payment Successful!");

cart=[];

localStorage.removeItem("cart");

updateCartCount();

},

onclose:function(){

console.log("Payment Cancelled");

}

});

}



// ==========================
// CREATE CHECKOUT BUTTON
// ==========================

const footer=document.querySelector("footer .container");

if(footer){

const btn=document.createElement("button");

btn.innerHTML="Proceed to Checkout";

btn.className="checkout-btn";

btn.onclick=checkout;

footer.appendChild(btn);

}



// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});



// ==========================
// SIMPLE FADE IN
// ==========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".product-card,.service-card").forEach(card=>{

observer.observe(card);

});



console.log("Grace Wellness Loaded Successfully");
