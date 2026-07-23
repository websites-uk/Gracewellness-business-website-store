// =======================================
// Grace Wellness
// script.js
// =======================================

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    let selectedProduct = "";
    let selectedPrice = "";

    // Bootstrap Checkout Modal
    const checkoutModal = new bootstrap.Modal(
        document.getElementById("checkoutModal")
    );

    // Buy Now buttons
    const buyButtons = document.querySelectorAll(".buy-now");

    buyButtons.forEach(button => {

        button.addEventListener("click", () => {

            selectedProduct = button.dataset.product;
            selectedPrice = button.dataset.price;

            // Fill checkout form
            document.getElementById("productName").value = selectedProduct;
            document.getElementById("checkoutAmount").value = "£" + selectedPrice;

            checkoutModal.show();

        });

    });

    // Checkout Form
    const checkoutForm = document.getElementById("checkoutForm");

    checkoutForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const customerName =
            document.getElementById("customerName").value;

        const customerEmail =
            document.getElementById("customerEmail").value;

        const customerPhone =
            document.getElementById("customerPhone").value;

        startFlutterwavePayment(
            customerName,
            customerEmail,
            customerPhone,
            selectedProduct,
            selectedPrice
        );

    });
    // =======================================
    // Flutterwave Checkout
    // =======================================

    function startFlutterwavePayment(
        customerName,
        customerEmail,
        customerPhone,
        product,
        amount
    ) {

        FlutterwaveCheckout({

            public_key: "FLWPUBK-2b01ca9653cbf025d8843ce27e456c4b-X",

            tx_ref: "GW-" + Date.now(),

            amount: parseFloat(amount),

            currency: "GBP",

            payment_options: "card,banktransfer,applepay,googlepay,USDT",

            customer: {

                email: customerEmail,

                phone_number: customerPhone,

                name: customerName

            },

            customizations: {

                title: "Grace Wellness",

                description: product,

                logo: "images/logo.png"

            },

            redirect_url:
            "https://websites-uk.github.io/Gracewellness-business-website-store/success.html"

        });

    }

    // =======================================
    // Live Product Search
    // =======================================

    const searchBox = document.getElementById("search");

    if (searchBox) {

        searchBox.addEventListener("keyup", function () {

            const keyword = this.value.toLowerCase();

            const cards =
                document.querySelectorAll(".product-card");

            cards.forEach(card => {

                const title =
                    card.querySelector("h5")
                        .innerText
                        .toLowerCase();

                if (title.includes(keyword)) {

                    card.parentElement.style.display = "";

                } else {

                    card.parentElement.style.display = "none";

                }

            });

        });

    }

});
