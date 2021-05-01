class article {
    
    constructor(cameras, articleSection, camProduct) {
        let articleItem = this._article(articleSection)
        this._articleImg(camProduct, articleItem)
        let articleBody = this._articleContent(articleSection)
        this._articleDescription(articleBody, camProduct)
        this._articleTitle(articleBody, camProduct)
        this._articlePrice(camProduct, articleBody)
        this._articleBtn(camProduct, articleSection)
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
        console.log(articleLensSect)

        let selectLens = document.createElement("select");
        let lense = camProduct.lenses;
        articleBody.appendChild(selectLens);
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
        // At click, store the value (_id) of cameras to be picked in checkout page
        articleBtn.addEventListener('click', function(){
            checker.style.display = "flex"
            localStorage.setItem("product", camProduct._id)
        })
        articleSection.appendChild(articleBtn)
    }
}


