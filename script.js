let cart = [];


// Add item to cart

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " added to cart! 🛒");
}


// Update cart

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");


    cartCount.innerText = cart.length;


    if (cart.length === 0) {

        cartItems.innerHTML =
            "Your cart is empty.";

        cartTotal.innerText = "0";

        return;
    }


    let total = 0;

    let html = "";


    cart.forEach(function(item, index) {

        total += item.price;


        html += `
            <div>
                ${item.name} - ₹${item.price}

                <button
                    onclick="removeItem(${index})">
                    ❌
                </button>
            </div>
        `;

    });


    cartItems.innerHTML = html;

    cartTotal.innerText = total;
}


// Remove item

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}


// Show cart

function showCart() {

    document.getElementById("cartSection")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// Checkout

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    let total = 0;

    cart.forEach(function(item) {

        total += item.price;

    });


    alert(
        "🎉 Order placed successfully!\n\n" +
        "Total Amount: ₹" + total
    );


    cart = [];

    updateCart();
}


// Search food

function searchFood() {

    const searchValue =
        document.getElementById("search")
        .value
        .toLowerCase();


    const foods =
        document.querySelectorAll(".food-card");


    foods.forEach(function(food) {

        const foodName =
            food.dataset.name.toLowerCase();


        if (foodName.includes(searchValue)) {

            food.style.display = "block";

        } else {

            food.style.display = "none";

        }

    });
}


// Table reservation

function reserveTable(event) {

    event.preventDefault();


    const name =
        document.getElementById("customerName").value;

    const date =
        document.getElementById("reservationDate").value;

    const time =
        document.getElementById("reservationTime").value;

    const guests =
        document.getElementById("guests").value;


    document.getElementById("reservationMessage").innerText =
        "✅ Thank you " + name +
        "! Your table for " + guests +
        " guest(s) is reserved on " +
        date + " at " + time + ".";


    document.querySelector(".reservation form").reset();
}