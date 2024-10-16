
export class Product {
    /**
     *
     * @param {string} name The Product Name
     * @param {number} price The Product Price
     * @param {number} year The year creation of the Product
     */
    constructor(name, price, year) {
      this.name = name;
      this.price = price;
      this.year = year;
    }
  }
 class UI {
    /**

     * @param {Object} product A new product Object
     */
    addProduct(product) {
      const productList = document.getElementById("product-list");
      const element = document.createElement("div");
      element.innerHTML = `
              <div class="card text-center mb-4">
                  <div class="card-body">
                      <strong>Product</strong>: ${product.name} -
                      <strong>Price</strong>: ${product.price} - 
                      <strong>Year</strong>: ${product.year}
                      <a href="#" class="btn btn-danger" name="delete">Delete</a>
                  </div>
              </div>
          `;
      productList.appendChild(element);
    }
  

    resetForm() {
      document.getElementById("product-form").reset();
    }
  
    deleteProduct(element) {
      if (element.name === "delete") {
        element.parentElement.parentElement.remove();
        this.showMessage("Product Deleted Succsssfully", "success");
      }
    }
  
    showMessage(message, cssClass) {
      const div = document.createElement("div");
      div.className = `alert alert-${cssClass} mt-2`;
      div.appendChild(document.createTextNode(message));
  
      const container = document.querySelector(".container");
      const app = document.querySelector("#App");
  
      container.insertBefore(div, app);
  
      setTimeout(function () {
        document.querySelector(".alert").remove();
      }, 3000);
    }
  };

import { Product } from "./Product.js";
import { UI } from "./UI.js";


document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    
    e.preventDefault();

    
    const name = document.getElementById("name").value,
      price = document.getElementById("price").value,
      year = document.getElementById("year").value;

    
    const product = new Product(name, price, year);

    
    const ui = new UI();

    
    if (name === "" || price === "" || year === "") {
      ui.showMessage("Please Insert data in all fields", "danger");
    }

    
    ui.addProduct(product);
    ui.showMessage("Product Added Successfully", "success");
    ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});