document.getElementById("comparison-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const productName = document.getElementById("product-name").value;
    if (productName === "") return;
  
    // Simulate product data from different e-commerce websites
    const products = [
      { name: "puma black shoe", price: 150, store: "Amazon", url: "https://www.amazon.com/s?k=puma+black+shoe&crid=2V6A0J3R4COYM&sprefix=puma+black+shoe%2Caps%2C303&ref=nb_sb_noss_1" },
      { name: "puma black shoe", price: 140, store: "eBay", url: "https://www.ebay.com/sch/i.html?_nkw=puma+black+shoes&_sacat=0&_from=R40&_trksid=p4432023.m570.l1311" },
      { name: "puma black shoe", price: 130, store: "Walmart", url: "https://www.walmart.com/search?q=puma%20black%20shoes&typeahead=puma%20black" },
      { name: "puma black shoe", price: 145, store: "Target", url: "https://www.target.com/s?searchTerm=puma+black+shoe" }
    ];
  
    // Filter products by name
    const filteredProducts = products.filter(product => product.name.toLowerCase() === productName.toLowerCase());
  
    // Get the comparison results container
    const comparisonResults = document.getElementById("comparison-results");
  
    // Clear previous results
    comparisonResults.innerHTML = '';
  
    if (filteredProducts.length === 0) {
      comparisonResults.innerHTML = "<p>No results found for this product.</p>";
    } else {
      filteredProducts.forEach(product => {
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result");
  
        resultDiv.innerHTML = `
          <span>${product.store}</span>
          <span>$${product.price.toFixed(2)}</span>
          <a href="${product.url}" target="_blank">View</a>
        `;
  
        comparisonResults.appendChild(resultDiv);
      });
    }
  });
  