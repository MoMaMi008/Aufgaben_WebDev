import TProduct from "../types/TProduct";

const output = document.querySelector("#output") as HTMLDivElement;

function printProducts(productsArr: TProduct[]) {
    productsArr.forEach((product: TProduct) => {
        const article = document.createElement("article");
        output.appendChild(article);

        const productImg = document.createElement("img");
        productImg.src = product.image;
        productImg.classList.add("productImg");
        article.appendChild(productImg);

        const productTitel = document.createElement("h2");
        productTitel.textContent = product.title;
        productTitel.classList.add("productTitle");
        article.appendChild(productTitel);

        const div = document.createElement("div");
        article.appendChild(div);

        const productPrice = document.createElement("p");
        productPrice.textContent = `$ ${product.price}`;
        productPrice.classList.add("productPrice");
        div.appendChild(productPrice);

        const cartBtn = document.createElement("button");
        cartBtn.textContent = `Add to cart`;
        cartBtn.classList.add("cartBtn");
        div.appendChild(cartBtn);
    });
}

export default printProducts;
