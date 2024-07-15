const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      avgRating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      avgRating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      avgRating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      avgRating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      avgRating: 5.0
    }
  ];
  
  // Populate product options dynamically
  window.onload = function() {
    const selectElement = document.getElementById('productName');
    products.forEach(product => {
      let option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      selectElement.appendChild(option);
    });
  
    // Initialize review counter
    if (!localStorage.getItem('reviewCount')) {
      localStorage.setItem('reviewCount', '0');
    }
  };
  
  // Update review counter on review.html
  if (window.location.pathname.endsWith('review.html')) {
    let reviewCount = parseInt(localStorage.getItem('reviewCount'), 10);
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount.toString());
    document.body.innerHTML = `<h1>Thank you for your review!</h1>
                               <p>You have submitted ${reviewCount} reviews.</p>`;
  }
  