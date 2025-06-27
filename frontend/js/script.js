// Fetch products from backend and display them on the page
fetch("http://localhost:3000/api/products")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return response.json();
  })
  .then((products) => {
    const container = document.getElementById("product-list");
    container.innerHTML = ""; // Clear loading text

    products.forEach((product) => {
      const productCard = `
        <div class="product">
          <img src="http://localhost:3000${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>
        </div>
      `;
      container.innerHTML += productCard;
    });
  })
  .catch((error) => {
    console.error("Error loading products:", error);
    document.getElementById("product-list").innerHTML =
      "<p style='color:red;'>⚠️ Failed to load products. Please make sure the backend is running.</p>";
  });
