// Cart functionality
let cart = []; // Array to store cart items
let total = 0; 

// Function to add an item to the cart
function addToCart(itemName, price) {
  cart.push({ name: itemName, price: price }); 
  total += price; 
  updateCart(); 
}

// Function to update the cart display
function updateCart() {
  const cartItems = document.getElementById("cart-items"); 
  const totalElement = document.getElementById("total"); 

  // Clear the current cart items
  cartItems.innerHTML = "";

  // Add each item to the cart list
  cart.forEach(item => {
    const li = document.createElement("li"); 
    li.textContent = `${item.name} - Ksh${item.price}`; 
    cartItems.appendChild(li); 
  });

  // Update the total price
  totalElement.textContent = total;
}

// Function to simulate payment
function proceedToPay() {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add items to proceed."); 
  } else {
    alert(`Payment successful! Total: Ksh${total}`); 
    cart = []; 
    total = 0; 
    updateCart(); 
  }
}

// Search function
function filterItems() {
  const searchInput = document.getElementById("search-bar").value.toLowerCase(); 
  const items = document.querySelectorAll(".item"); 

  items.forEach(item => {
    const itemName = item.getAttribute("data-name").toLowerCase(); 
    if (itemName.includes(searchInput)) {
      item.style.display = "block"; 
    } else {
      item.style.display = "none"; 
    }
  });
}

// Clears search bar and reset items when the page loads
window.onload = () => {
  const searchBar = document.getElementById("search-bar");
  searchBar.value = ""; 
  filterItems(); 
};