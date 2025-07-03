var closeOffer = document.getElementById("closeOffer")
var offer = document.querySelector(".offer")

closeOffer.addEventListener("click",function(){
    offer.style.display="none"
})


var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})

document.addEventListener("DOMContentLoaded", function () {
    // Offer close button
    const closeOffer = document.getElementById("closeOffer");
    const offer = document.querySelector(".offer");

    closeOffer.addEventListener("click", function () {
        offer.style.display = "none";
    });

    // Search & Filter functionality
    const searchInput = document.querySelector('.navbar-search input[type="search"]');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const productImages = document.querySelectorAll('.products__two img');

    const keywords = {
        "M1.jpg": "Shirts black",
        "M2.jpg": "Shirts red",
        "M3.jpg": "Shirts checked",
        "M4.jpg": "Jeans black",
        "M5.jpg": "Jeans blue",
        "M6.jpg": "T-shirts",
        "M7.jpg": "T-shirts",
        "M8.jpg": "Jackets black",
        "M9.jpg": "Hoodies Track",
        "M10.jpg": "Hoodies Track",
        "W1.jpg": "Tops white",
        "W2.jpg": "Kurtas",
        "W3.jpg": "Tops",
        "W4.jpg": "Tops",
        "W5.jpg": "Kurtas pink",
        "W6.jpg": "Skirts",
        "W7.jpg": "Skirts black",
        "W8.jpg": "Palazzos",
        "W9.jpg": "Palazzosk",
        "W10.jpg": "Kurtas pink"
    };

    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedFilters = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value.toLowerCase());

        productImages.forEach(img => {
            const name = img.getAttribute("src").split("/").pop();
            const keyword = keywords[name]?.toLowerCase() || "";

            const matchSearch = keyword.includes(searchTerm);
            const matchCheckbox = selectedFilters.length === 0 || selectedFilters.some(f => keyword.includes(f));

            img.style.display = (matchSearch && matchCheckbox) ? "" : "none";
        });
    }

    // Event listeners
    searchInput.addEventListener("input", filterProducts);
    checkboxes.forEach(cb => cb.addEventListener("change", filterProducts));
});
