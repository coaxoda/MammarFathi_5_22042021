class article {

    constructor(cameras, articleSection, camProduct) {
        let articleItem = this._article(articleSection)
        this._articleImg(camProduct, articleItem)
        let articleBody = this._articleContent(articleSection)
        this._articleTitle(articleBody, camProduct)
        this._articlePrice(camProduct, articleBody)
        this._articleBtn(camProduct, articleSection)
        this.camProduct = camProduct
        this.cameras = cameras
        this._articleLens(articleBody, camProduct)
    }

    //Creating of a article parent
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
    //Article title
    _articleTitle(articleBody, camProduct){
        const articleTitle = document.createElement('h1')
        articleBody.appendChild(articleTitle)
        articleTitle.innerHTML = camProduct.name
    }
    //Article price
    _articlePrice(camProduct, articleBody){
        const articlePrice = document.createElement('p')
        articleBody.appendChild(articlePrice)
        articlePrice.innerHTML = camProduct.price / 200 - 0.5 + "€"
    } 
    //Article Lenses options
    _articleLens(articleBody, camProduct){
        let articleLensSect = document.createElement("p");
        articleBody.appendChild(articleLensSect);
        articleLensSect.classList.add('lense');
        articleLensSect.innerText = "Objectif :";
        console.log(articleLensSect)

        let selectLens = document.createElement("select");
        articleBody.appendChild(selectLens);
        let lense = camProduct.lenses;
        console.log(lense)
        
        for (let i = 0; i < lense.length; i++) {
            let lensesOption = document.createElement("option");
            lensesOption.textContent = camProduct.lenses[i];
            selectLens.appendChild(lensesOption);
        }
    }
    //Add article into chekout
    _articleBtn(camProduct, articleSection){
        const articleBtn = document.createElement('button')
        const checker = document.getElementById('check')
        articleBtn.className = "add"
        articleBtn.type = "submit"
        articleBtn.innerHTML = "Ajouter au panier"
        articleBtn.addEventListener('click', function(){
            checker.style.display = "flex"
            localStorage.setItem("product", camProduct._id)
        })
        articleSection.appendChild(articleBtn)
    }
}


