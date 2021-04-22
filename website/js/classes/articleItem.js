class article {

    constructor(cameras, articleSection) {
        let articleItem = this._article(articleSection)
        this._articleImg(cameras, articleItem)
        let articleBody = this._articleContent(articleSection)
        this._articleTitle(articleBody, cameras)
        this._articlePrice(cameras, articleBody)
        this._articleBtn(articleSection)
    }
    //Creating of a article parent
    _article(articleSection){
        const mainArticle = document.createElement('article')
        mainArticle.id = "productID"
        articleSection.appendChild(mainArticle)
        return mainArticle
    }
    //Generating an img (article child) depending of the url id
    _articleImg(cameras, articleItem){
        const articleImg = document.createElement('img')
        articleImg.className = "productID-item"
        articleImg.src = queryString
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
    _articleTitle(articleBody, cameras){
        const articleTitle = document.createElement('h1')
        articleBody.appendChild(articleTitle)
        articleTitle.innerText = cameras[0].name
    }
    //Article price
    _articlePrice(cameras, articleBody){
        const articlePrice = document.createElement('p')
        articleBody.appendChild(articlePrice)
        articlePrice.innerHTML = cameras[1].price / 200 - 0.5 + "€"
    }
    //Add article into chekout
    _articleBtn(articleSection){
        const articleBtn = document.createElement('button')
        articleBtn.className = "add"
        articleBtn.type = "submit"
        articleBtn.innerHTML = "Ajouter au panier"
        articleSection.appendChild(articleBtn)
        
    }
}

function check(){
    let check = document.getElementById('check')
    check.style.display = "flex"
}