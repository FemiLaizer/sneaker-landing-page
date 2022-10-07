let images = document.querySelectorAll("img");
let bigImage = document.querySelector(".big-image");
let spans = document.querySelectorAll(".spans");
let cartBtn = document.querySelector(".cart-btn");
let counter = document.querySelector('.counter');
let count = 0;

// Changing the image your selected sneaker
images.forEach(function (image) {
    image.addEventListener('click', function (e) {
        bigImage.style.backgroundImage = `url(${e.currentTarget.src})`;
    })
})

// Selecting the count of Items to be added to cart
spans.forEach(element => {
    element.addEventListener("click", function increaseOrDecrease() {
        if (this.classList.contains("minus")) {
            if (count <= 0) {
                return;
            } else {
                count--;
                counter.textContent = count;
            }
        } else if (this.classList.contains("plus")) {
            count++;
            counter.textContent = count;
        }
    });
})

// Adding Items to your shopping cart
let numberOfItem = 0; 
cartBtn.addEventListener("click", () => {
    if (count === 0) {
        alert("Please select an item to add to cart");
    } else {
        numberOfItem += count;
        alert(`${numberOfItem} items added to cart`);
    }
})
