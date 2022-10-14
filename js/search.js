function productRoute() {
  const resultItemDOM = document.querySelectorAll(
    ".search-results .result-item"
  );
  resultItemDOM.forEach((item) => {
    item.addEventListener("click", (e) => {
      const id = item.dataset.id;
      if (id) {
        localStorage.setItem("productId", JSON.stringify(id));
        window.location.href = "single-product.html";
      }
    });
  });
}

function searchFunc(data) {
  const searchWrapperDOM = document.querySelector(".search-results .results");
  let result = "";
  data.forEach((item) => {
    result += `
    <a href="#" class="result-item" data-id=${item.id}>
        <img src=${item.img.singleImage} class="search-thumb" alt="">
        <div class="search-info">
            <h4>${item.name}</h4>
            <span class="search-sku">SKU: PD0016</span>
            <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
        </div>
    </a>
    `;
  });
  searchWrapperDOM.innerHTML = result;
  productRoute();
}

export default searchFunc;
