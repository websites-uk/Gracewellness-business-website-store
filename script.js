/* =========================================
   Grace Wellness
   script.js
========================================= */

let selectedProduct = "";
let selectedPrice = 0;

document.querySelectorAll(".buy-now").forEach(button=>{

button.addEventListener("click",()=>{

selectedProduct=button.dataset.product;

selectedPrice=button.dataset.price;

document.getElementById("productName").value=selectedProduct;

document.getElementById("checkoutAmount").value=selectedPrice;

new bootstrap.Modal(
document.getElementById("checkoutModal")
).show();

});

});

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

       document.getElementById("checkoutBtn").addEventListener("click", () => {

    FlutterwaveCheckout({

        public_key: "YOUR_PUBLIC_KEY",

        tx_ref: "GW-" + Date.now(),

        amount: 89.99,

        currency: "GBP",

        payment_options: "card,banktransfer",

        redirect_url: "https://websites-uk.github.io/Gracewellness-business-website-store/success.html",

        customer: {

            email: "customer@example.com",

            phone_number: "0000000000",

            name: "Customer"

        },

        customizations: {

            title: "Grace Wellness",

            description: "Massage & Wellness Products",

            logo: "https://websites-uk.github.io/Gracewellness-business-website-store/images/logo.png"

        }

       redirect_url:"https://websites-uk.github.io/Gracewellness-business-website-store/success.html"
    });

       const checkoutForm=document.getElementById("checkoutForm");

if(checkoutForm){

checkoutForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("customerName").value;

const email=document.getElementById("customerEmail").value;

const phone=document.getElementById("customerPhone").value;

const amount=document.getElementById("checkoutAmount").value;

FlutterwaveCheckout({

public_key:"FLWPUBK-2b01ca9653cbf025d8843ce27e456c4b-X",

tx_ref:"GW-"+Date.now(),

amount:selectedPrice,

currency:"GBP",

payment_options:"card,banktransfer",

customer:{

email:email,

phone_number:phone,

name:name

},

customizations:{

title:"Grace Wellness",

description:"Massage & Wellness Store",

logo:"images/logo.png"

},
   customizations:{

title:"Grace Wellness",

description:selectedProduct,

logo:"images/logo.png"

}

callback:function(response){

if(response.status==="successful"){

alert("Payment Successful!");

cart=[];

updateCart();

document.getElementById("checkoutForm").reset();

bootstrap.Modal.getInstance(

document.getElementById("checkoutModal")

).hide();

}

},

onclose:function(){

console.log("Checkout closed.");

}

});

});

}
});
    });

});


// ----------------------------
// Footer Year
// ----------------------------

console.log("Grace Wellness Website Ready");
