/* =========================================
   Grace Wellness
   script.js
========================================= */

// ----------------------------
// Shopping Cart
// ----------------------------

let cart = [];

const cartCount = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".add-cart");

function updateCart() {
    cartCount.textContent = cart.length;
}

// ----------------------------
// Toast Message
// ----------------------------

function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast-message";

    toast.innerHTML = `
        <i class="bi bi-check-circle-fill"></i>
        ${message}
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        },300);

    },2500);

}

// ----------------------------
// Add To Cart
// ----------------------------

addButtons.forEach(button=>{

button.addEventListener("click",()=>{

const card=button.closest(".card");

const name=card.querySelector("h5").innerText;

const price=card.querySelector(".text-success").innerText;

cart.push({

name,

price

});

updateCart();

showToast(`${name} added to cart`);

});

});

// ----------------------------
// Newsletter
// ----------------------------

const newsletter=document.getElementById("newsletterForm");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

showToast("Thank you for subscribing!");

newsletter.reset();

});

}

// ----------------------------
// Smooth Scroll
// ----------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
/* =========================================
   Grace Wellness
   script.js - Part 2
========================================= */

// ----------------------------
// Cart Button
// ----------------------------

const cartButton = document.getElementById("cartButton");

if(cartButton){

cartButton.addEventListener("click",()=>{

    if(cart.length===0){

        alert("Your cart is currently empty.");

        return;

    }

    let total=0;

    let summary="Your Cart\n\n";

    cart.forEach((item,index)=>{

        summary += `${index+1}. ${item.name} - ${item.price}\n`;

        total += parseFloat(item.price.replace("£",""));

    });

    summary += "\n-----------------------\n";

    summary += `Total: £${total.toFixed(2)}\n\n`;

    summary += "To complete your purchase,\nclick OK and then use the Booking or Contact form.\nFlutterwave checkout will be connected once customer details are collected.";

    alert(summary);

});

}


// ----------------------------
// Navbar Shadow on Scroll
// ----------------------------

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.classList.add("shadow");

    }else{

        navbar.classList.remove("shadow");

    }

});


// ----------------------------
// Active Navigation
// ----------------------------

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        if(window.scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


// ----------------------------
// Footer Year
// ----------------------------

console.log("Grace Wellness Website Ready");
