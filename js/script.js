var products = [
  {
    productId: 1,
    name: "unlimited social",
    allotment: "24GB",
    price: "$2100.00",
  },
  {
    productId: 2,
    name: "unlimited youtube",
    allotment: "24GB",
    price: "$2200.00",
  },
  {
    productId: 3,
    name: "unlimited instagram",
    allotment: "24GB",
    price: "$2300.00",
  },
];

window.onload = showPlans;

function addToCart(productID) {
  var currentCart = localStorage.getItem("products");

  if (currentCart == null) {
    currentCart = "";
  }

  localStorage.setItem("products", currentCart + "," + productID);
}

function showPlan(productId) {
  var productContainer = document.getElementById("product-container");

  for (var product of products) {
    if (product.productId == productId) {
      var name = document.createElement("div");
      name.innerHTML = product.name;

      var price = document.createElement("span");
      price.innerHTML = product.price;

      productContainer.appendChild(name);
      productContainer.appendChild(price);
    }
  }
}

function showPlans() {
  var shoppingCart = localStorage.getItem("products"); //,1,2,3
  console.log(shoppingCart);

  var productIdList = shoppingCart.split(",");
  console.log(productIdList);

  productIdList.forEach(showPlan);
}
