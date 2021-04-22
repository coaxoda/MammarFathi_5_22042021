// class Item {
//
//     constructor(camera, productDiv) {
//         this.camera = camera
//         this.productDiv = productDiv
//         this.productArticle = null
//         this.productDivBody = null
//     }
//
//     _generateArticle() {
//         this.productArticle = document.createElement('article');
//         this.productDiv.appendChild(this.productArticle);
//     }
//
//     _generateImage() {
//         let cameraImage = document.createElement('img');
//         cameraImage.src = this.camera.imageUrl;
//         this.productArticle.appendChild(cameraImage);
//     }
//
//     _generateBody() {
//         //CARD BODY SETTINGS//
//         this.productDivBody = document.createElement('div');
//         this.productDivBody.className = "product";
//         this.productArticle.appendChild(this.productDivBody);
//     }
//
//     _generateTitle() {
//         //CARD TITLE SETTINGS//
//         let productTitle = document.createElement('h3'); // target the title of each card
//         productTitle.innerHTML = this.camera.name;
//         this.productDivBody.appendChild(productTitle);
//     }
//
//     _generatePrice() {
//         //CARD PRICE SETTINGS//
//         let productPrice = document.createElement('p') // target the price of each card
//         productPrice.innerHTML = this.camera.price / 100 - 200 + "€";
//         this.productDivBody.appendChild(productPrice)
//     }
//
//     _generateButton() {
//         //CARD BUTTON SETTINGS//
//         const productBtn = document.createElement('a');
//         productBtn.id = "show";
//         productBtn.href = "article.html?id" // A traiter !
//         productBtn.innerHTML = "Voir la fiche produit";
//         this.productArticle.appendChild(productBtn);
//     }
// }

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

