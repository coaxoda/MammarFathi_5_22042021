class Checkout{
    constructor(cameras, checkoutContainer){
        this._checkoutMain(checkoutContainer)
        this._checkoutProduct(checkoutContainer, cameras)
    }

    _checkoutMain(checkoutContainer){
        let checkout = document.createElement('div')
        checkout.className = 'checkout'
        checkoutContainer.appendChild(checkout)
    }

    _checkoutProduct(checkoutContainer, cameras){
        let checkoutImg = document.createElement('img')
        checkoutImg.src = localStorage.getItem("product").imageUrl
        checkoutContainer.appendChild(checkoutImg)
    }
}