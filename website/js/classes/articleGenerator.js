class articleGenerator {

    static _generateArticle(cameras, cameraId) {
        // Creating of the main section/ base of implementation for "articleItem.js"
        let articleSection = document.createElement('section');
        let mainContent = document.querySelector('main');
        mainContent.appendChild(articleSection);
        //Get product ID by location to the next page + finding all ID corresponding to the product selected previously

        console.log(cameraId);
        // const cameraId = cameras.find(cameras => cameras['_id'] == cameraId);

        //New instance of the class article "articleItem.js" with params -- (cameras, articleSection, cameraId) -- previously created in "/article.js" and here
        new article(cameras, articleSection, cameraId)
    }
}
class article {

    constructor(cameras, articleSection) {
        let articleItem = this._article(articleSection)
        this._articleImg(cameras, articleItem)
        let articleBody = this._articleContent(articleSection)
        this._articleDescription(articleBody, cameras)
        this._articleTitle(articleBody, cameras)
        this._articlePrice(cameras, articleBody)
        this._articleBtn(articleSection, cameras)
        this.cameraId = cameraId
        this.cameras = cameras
        this._articleLens(articleBody, cameras)
    }

    //Creating of an article parent
    _article(articleSection) {
        const mainArticle = document.createElement('article')
        mainArticle.id = "productID"
        articleSection.appendChild(mainArticle)
        return mainArticle
    }
    //Generating an img (article child) depending of the url id
    _articleImg(cameras, articleItem) {
        const articleImg = document.createElement('img')
        articleImg.className = "productID-item"
        articleImg.src = cameras.imageUrl
        articleItem.appendChild(articleImg)
    }
    //Creating parent Div for title, price...
    _articleContent(articleSection) {
        const articleContent = document.createElement('div')
        articleContent.className = "product-content"
        articleSection.appendChild(articleContent)
        return articleContent
    }

    //Article description for
    _articleDescription(articleBody, cameras) {
        const articleDes = document.createElement('p')
        articleDes.innerHTML = cameras.description
        articleBody.appendChild(articleDes)
    }
    //Article title
    _articleTitle(articleBody, cameras) {
        const articleTitle = document.createElement('h1')
        articleTitle.innerHTML = cameras.name
        articleBody.appendChild(articleTitle)
    }
    //Article price
    _articlePrice(cameraId, articleBody) {
        const articlePrice = document.createElement('p')
        articlePrice.innerHTML = cameraId.price / 100 + "€"
        articleBody.appendChild(articlePrice)
    }
    //Article Lenses options
    _articleLens(articleBody, cameras) {
        let articleLensSect = document.createElement("p");
        articleLensSect.classList.add('lense');
        articleLensSect.innerText = "Objectif :";
        articleBody.appendChild(articleLensSect);
        //Creating of a select element with different lens Value
        let selectLens = document.createElement("select");
        let lense = cameras.lenses;
        articleBody.appendChild(selectLens);
        // console.log(lense)
        //Display all lense available for each cameraId item
        for (let i = 0; i < lense.length; i++) {
            let lensesOption = document.createElement("option");
            lensesOption.textContent = cameras.lenses[i];
            selectLens.appendChild(lensesOption);
        }
    }
    //Add article into chekout
    _articleBtn(articleSection, cameras) {
        const articleBtn = document.createElement('button')
        articleBtn.className = "add"
        articleBtn.type = "submit"
        articleBtn.innerHTML = "Ajouter au panier"
        articleSection.appendChild(articleBtn)
        articleBtn.addEventListener('click', function () {
            //Creation of an empty array, ready for receive item to checkout
            let myCart = JSON.parse(localStorage.getItem("myCart"))
            if (myCart === null) {
                myCart = []
            }
            let myArticle = {
                name: cameras.name,
                price: cameras.price,
                img: cameras.imageUrl,
                id: cameras._id
            }
            // item pushed into "myCart" array
            myCart.push(myArticle)
            localStorage.setItem("myCart", JSON.stringify(myCart))
            console.log(myCart);

            let notification = document.getElementById('succes')
            notification.style.display = "flex"
        })
    }
}
