class articleGenerator {
    
    static _generateArticle(cameras) {
            // Creating of the main section/ base of implementation for "articleItem.js"
        let articleSection = document.createElement('section');
        let mainContent = document.querySelector('main');
        mainContent.appendChild(articleSection);

            //Get product ID by location to the next page + finding all ID corresponding to the product selected previously
        const urlId = new URLSearchParams(window.location.search)
        const cameraId = urlId.get('id');
        console.log(cameraId);
        const camProduct = cameras.find(cameras => cameras['_id'] == cameraId);
        console.log(camProduct);

            //New instance of the class article "articleItem.js" with params -- (cameras, articleSection, camProduct) -- previously created in "/article.js" and here
        new article(cameras, articleSection, camProduct)
    }
} 
class article {
    
    constructor(cameras, articleSection, camProduct) {
        let articleItem = this._article(articleSection)
        this._articleImg(camProduct, articleItem)
        let articleBody = this._articleContent(articleSection)
        this._articleDescription(articleBody, camProduct)
        this._articleTitle(articleBody, camProduct)
        this._articlePrice(camProduct, articleBody)
        this._articleBtn(articleSection, camProduct)
        this.camProduct = camProduct
        this.cameras = cameras
        this._articleLens(articleBody, camProduct)
    }

    //Creating of an article parent
    _article(articleSection){
        const mainArticle = document.createElement('article')
        mainArticle.id = "productID"
        articleSection.appendChild(mainArticle)
        return mainArticle
    }
    //Generating an img (article child) depending of the url id
    _articleImg(camProduct, articleItem){
        const articleImg = document.createElement('img')
        articleImg.className = "productID-item"
        articleImg.src = camProduct.imageUrl
        articleItem.appendChild(articleImg)
    }
    //Creating parent Div for title, price...
    _articleContent(articleSection){
        const articleContent = document.createElement('div')
        articleContent.className = "product-content"
        articleSection.appendChild(articleContent)
        return articleContent
    }

    //Article description for
    _articleDescription(articleBody, camProduct){
        const articleDes = document.createElement('p')
        articleDes.innerHTML = camProduct.description
        articleBody.appendChild(articleDes)
    }
    //Article title
    _articleTitle(articleBody, camProduct){
        const articleTitle = document.createElement('h1')
        articleTitle.innerHTML = camProduct.name
        articleBody.appendChild(articleTitle)
    }
    //Article price
    _articlePrice(camProduct, articleBody){
        const articlePrice = document.createElement('p')
        articlePrice.innerHTML = camProduct.price / 200 - 0.5 + "€"
        articleBody.appendChild(articlePrice)
    } 
    //Article Lenses options
    _articleLens(articleBody, camProduct){
        let articleLensSect = document.createElement("p");
        articleLensSect.classList.add('lense');
        articleLensSect.innerText = "Objectif :";
        articleBody.appendChild(articleLensSect);
        //Creating of a select element with different lens Value
        let selectLens = document.createElement("select");
        let lense = camProduct.lenses;
        articleBody.appendChild(selectLens);
        // console.log(lense)
        //Display all lense available for each camProduct item
        for (let i = 0; i < lense.length; i++) {
            let lensesOption = document.createElement("option");
            lensesOption.textContent = camProduct.lenses[i];
            selectLens.appendChild(lensesOption);
        }
    }
    //Add article into chekout
    _articleBtn(articleSection, camProduct){
        const articleBtn = document.createElement('button')
        articleBtn.className = "add"
        articleBtn.type = "submit"
        articleBtn.innerHTML = "Ajouter au panier"
        articleSection.appendChild(articleBtn)
        articleBtn.addEventListener('click', function(){
            //Creation of an empty array, ready for receive item to checkout
            let myCart = JSON.parse(localStorage.getItem("myCart"))
                if(myCart === null){
                    myCart = []
                }
            let myArticle = {
                name : camProduct.name,
                price : camProduct.price,
                img : camProduct.imageUrl
            }
            // item pushed into "myCart" array
            myCart.push(myArticle) 
            localStorage.setItem("myCart", JSON.stringify(myCart))
            console.log(myCart);
            
            let notification = document.getElementById('succes')
            notification.style.display ="flex"
        })
    }
}
