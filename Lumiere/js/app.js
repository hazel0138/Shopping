/* =====================================================
   LUMIÈRE - APP JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       MOBILE MENU TOGGLE
    ================================ */

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.querySelector(".nav");

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });


    /* ===============================
       HEADER SCROLL EFFECT
    ================================ */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
            header.style.background = "rgba(255,255,255,0.85)";
        } else {
            header.style.boxShadow = "none";
            header.style.background = "rgba(250, 247, 245, 0.7)";
        }

    });


    /* ===============================
       WISHLIST TOGGLE
    ================================ */

    const wishlistBtns = document.querySelectorAll(".wishlist-icon");

    wishlistBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("active");

            if (btn.textContent === "♡") {
                btn.textContent = "♥";
            } else {
                btn.textContent = "♡";
            }
        });
    });


    /* ===============================
       SIMPLE CART COUNTER (DEMO)
    ================================ */

    let cartCount = 0;
    const cartBadge = document.querySelector(".cart-count");

    document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("dblclick", () => {
            cartCount++;
            cartBadge.textContent = cartCount;
        });
    });

});