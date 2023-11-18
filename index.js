let mainPage = document.querySelector(".mainPage");
let blogContent = document.querySelector(".blogContent");
let cardMen = document.querySelector(".cardMen");
let cardgirl = document.querySelector(".cardgirl");
let aboutPage = document.querySelector(".about");
let contactus = document.querySelector(".contact");




function home() {
    mainPage.style.display = "flex";
    cardMen.style.display = "block";
    cardgirl.style.display = "block";
    blogContent.style.display = "block"
    contactus.style.display = "none"

    document.getElementById("blog").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("home").style.color = "rgb(1, 190, 190)";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "black";





}


function shop() {
    cardMen.style.display = "block";
    cardgirl.style.display = "block";
    mainPage.style.display = "none"
    blogContent.style.display = "none";
    aboutPage.style.display = "none";
    contactus.style.display = "none"

    document.getElementById("blog").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("shop").style.color = "rgb(1, 190, 190)"
    document.getElementById("home").style.color = "black"
    document.getElementById("contact").style.color = "black";


}


function blog() {

    cardMen.style.display = "none";
    cardgirl.style.display = "none";
    mainPage.style.display = "none";
    blogContent.style.display = "block"
    aboutPage.style.display = "none";
    contactus.style.display = "none"

    document.getElementById("blog").style.color = "rgb(1, 190, 190)";
    document.getElementById("home").style.color = "black"
    document.getElementById("shop").style.color = "black"
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "black";





}


function about() {
    aboutPage.style.display = "block";
    cardMen.style.display = "none";
    cardgirl.style.display = "none";
    mainPage.style.display = "none";
    blogContent.style.display = "none";
    contactus.style.display = "none";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black"
    document.getElementById("shop").style.color = "black";
    document.getElementById("about").style.color = "rgb(1, 190, 190)"
    document.getElementById("contact").style.color = "black";


}


function contact() {
    contactus.style.display = "block";
    aboutPage.style.display = "none";
    cardMen.style.display = "none";
    cardgirl.style.display = "none";
    mainPage.style.display = "none";
    blogContent.style.display = "none"
    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "rgb(1, 190, 190)"

}

function showCard(img) {
    let newImg = document.getElementById("cartImg");
    newImg.src = img.src;
    document.querySelector(".fullPage").style.display = "flex";
    contactus.style.display = "none";
    aboutPage.style.display = "none";
    cardMen.style.display = "none";
    cardgirl.style.display = "none";
    mainPage.style.display = "none";
    blogContent.style.display = "none"



}

// Add to Cart

function addItem() {
    document.querySelector(".addCart").style.display = "block";
    contactus.style.display = "none";
    aboutPage.style.display = "none";
    cardMen.style.display = "none";
    cardgirl.style.display = "none";
    mainPage.style.display = "none";
    blogContent.style.display = "none"





}

function addToCart() {
    alert("Added To Cart");
    location.reload();
}
document.getElementById("home").addEventListener("click", home);
document.getElementById("shop").addEventListener("click", shop);
document.getElementById("blog").addEventListener("click", blog);
document.getElementById("about").addEventListener("click", about);
document.getElementById("contact").addEventListener("click", contact);

document.querySelector(".cartImg").addEventListener("click", function() {
    showCard(this);
});

document.querySelector(".addCart").addEventListener("click", function() {
    addItem();
});

document.querySelector(".addToCartBtn").addEventListener("click", function() {
    addToCart();
});

function addToCart(itemId) {
    // Find the item details based on the itemId (you can have multiple items with different IDs)
    let itemDetails = getItemDetails(itemId); // You'll have to implement this function

    // Create a new cart item element
    let cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    // Construct the HTML for the cart item
    cartItem.innerHTML = `
        <img src="${itemDetails.image}" alt="${itemDetails.name}">
        <div class="item-details">
            <h3>${itemDetails.name}</h3>
            <p>Price: $${itemDetails.price}</p>
        </div>
        <button onclick="removeFromCart(this)">Remove</button>
    `;

    // Get the cart content container
    let cartContent = document.querySelector('.cart-content');

    // Append the cart item to the cart content
    cartContent.appendChild(cartItem);

    // Update the total price in the cart
    updateCartTotal(itemDetails.price); // You'll have to implement this function to update the total price
}

// Function to remove an item from the cart
function removeFromCart(button) {
    let cartItem = button.parentElement;
    let price = parseFloat(cartItem.querySelector('.item-details p').textContent.replace('Price: $', ''));

    // Remove the item from the cart content
    cartItem.remove();

    // Update the total price in the cart
    updateCartTotal(-price); // Subtract the removed item's price from the total
}

// Function to update the total price in the cart
function updateCartTotal(price) {
    let cartTotal = document.getElementById('cart-total');
    let currentTotal = parseFloat(cartTotal.textContent);
    cartTotal.textContent = (currentTotal + price).toFixed(2); // Update the total price
}

// Mock function to get item details based on the itemId
function getItemDetails(itemId) {
    // This is a placeholder function. In a real scenario, you might fetch item details from a database or object.
    // Return item details based on the itemId
    if (itemId === 'item2') {
        return {
            image: 'images/e.jpg',
            name: 'Item2',
            price: 11.99
        };
    }

    if (itemId === 'item1') {
        return {
            image: 'images/b.jpg',
            name: 'Item 1',
            price: 19.99
        };
    } else if (itemId === 'item2') {
        return {
            image: 'images/a.jpg',
            name: 'Item 2',
            price: 24.99
        };
    } else if (itemId === 'item3') {
        return {
            image: 'images/c.jpg',
            name: 'Item 3',
            price: 14.99
        };
    }
    // Add more conditions for other items if necessary
}

function checkout() {
    // Here you might simulate a checkout process by displaying a message or alert
    alert('Simulating checkout. Redirecting to payment gateway...');
    window.location.href = 'https://www.paypal.com/checkout';

    // You would typically redirect the user to the payment gateway or perform API calls to process payment
    // This example shows a simulation; in a real scenario, you'd integrate with a payment service provider
    // For instance, redirecting to PayPal, Stripe, or another payment gateway's checkout URL
    // window.location.href = 'https://www.paypal.com/checkout'; // Example for PayPal

    // After payment processing, you might clear the cart or perform other necessary actions
    clearCart(); // You'll need to define this function
}

// Function to clear the cart after successful payment (this is a placeholder)
function clearCart() {
    // Clear the cart content or perform other necessary actions after successful payment
    let cartContent = document.querySelector('.cart-content');
    cartContent.innerHTML = ''; // Remove all cart items

    // Reset the total price in the cart
    let cartTotal = document.getElementById('cart-total');
    cartTotal.textContent = '0.00'; // Reset the total price to zero
}

function checkout() {
    // Get the selected payment method
    const selectedPaymentMethod = document.getElementById('paymentMethod').value;

    // Redirect to the selected payment gateway's checkout URL based on the chosen payment method
    switch (selectedPaymentMethod) {
        case 'paypal':
            window.location.href = 'https://www.paypal.com/checkout'; // Replace with PayPal's checkout URL
            break;
        case 'stripe':
            window.location.href = 'https://checkout.stripe.com/'; // Replace with Stripe's checkout URL
            break;
        case 'mpesa':
            window.location.href = 'https://www.safaricom.com/mpesa/checkout'; // Replace with M-Pesa's checkout URL
            break;
            // Add cases for other payment options as needed
        default:
            // Handle default case or validation if necessary
            break;
    }
}



// Rest of your existing functions remain unchanged...