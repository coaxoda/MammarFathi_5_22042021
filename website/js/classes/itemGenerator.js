class ItemGenerator {

    static _generateAllItems(cameras) {
        let productSection = document.createElement('section');
        let mainContent = document.querySelector('main')
        mainContent.appendChild(productSection)
        productSection.id = 'items'

        // ITERATION OPERATION FOR EACH ARTICLE FROM JSON API (cameras) OBJECT
        for (let i = 0; i < cameras.length; i++) {
            new Item(cameras[i], productSection)
        }     
    }
}

class Item {

    constructor(camera, productSection) {
        let productArticle = this._generateArticle(productSection)
        this._generateImage(camera, productArticle)
        let productDivBody = this._generateBody(productArticle)
        this._generateTitle(productDivBody, camera)
        this._generatePrice(camera, productDivBody)
        this._generateButton(productArticle, camera)
    }

    _generateArticle(productSection) {
        let productArticle = document.createElement('article');
        productSection.appendChild(productArticle);
        return productArticle
    }

    _generateImage(camera, productArticle) {
        let cameraImage = document.createElement('img');
        cameraImage.src = camera.imageUrl;
        productArticle.appendChild(cameraImage);
    }

    _generateBody(productArticle) {
        let productDivBody = document.createElement('div');
        productDivBody.className = "product";
        productArticle.appendChild(productDivBody);
        return productDivBody
    }

    _generateTitle(productDivBody, camera) {
        let productTitle = document.createElement('h3'); // target the title of each card
        productTitle.innerHTML = camera.name;
        productDivBody.appendChild(productTitle);
    }

    _generatePrice(camera, productDivBody) {
        let productPrice = document.createElement('p') // target the price of each card
        productPrice.innerHTML = camera.price / 200 - 0.5 + "€";
        productDivBody.appendChild(productPrice)
    }

    _generateButton(productArticle, camera) {
        console.log("camera:", camera)
        const productBtn = document.createElement('a');
        productBtn.id = "show";
        productBtn.href = "article.html?id=" + camera._id
        productBtn.innerHTML = "Voir la fiche produit";
        productArticle.appendChild(productBtn);
    }
}




