var products = [
  {
    productId: 1,
    name: "unlimited social",
    allotment: "24GB",
    price: "$2400.00",
  },
  {
    productId: 2,
    name: "unlimited youtube",
    allotment: "24GB",
    price: "$2400.00",
  },
  {
    productId: 3,
    name: "unlimited instagram",
    allotment: "24GB",
    price: "$2400.00",
  },
];

window.onload = showPlans;

function showPlan(product) {
  var productContainer = document.getElementById("product-container");

  var name = document.createElement("div");
  name.innerHTML = product.name;

  var price = document.createElement("span");
  price.innerHTML = product.price;

  productContainer.appendChild(name);
  productContainer.appendChild(price);
}

function showPlans() {
  var shoppingCart = localStorage.getItem("products");
  console.log(shoppingCart);

  var productIdList = shoppingCart.split(",");
  console.log(productIdList);

  products.forEach(showPlan);
}
