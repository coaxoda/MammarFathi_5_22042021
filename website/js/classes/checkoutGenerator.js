class CheckoutGenerator {

    static _generateCheckoutItems(cameras, myCart) {
        let checkoutContainer = document.createElement('div');
        let mainSection = document.querySelector('section')
        mainSection.appendChild(checkoutContainer)
        checkoutContainer.id = 'checkoutlist'
        new myCheckout(myCart, checkoutContainer)
    }
}
class myCheckout{
    constructor(myCart, checkoutContainer){
        this._checkoutContent(checkoutContainer, myCart)
    }

    _checkoutContent(checkoutContainer, myCart){
        let checkout = document.createElement('div')
        checkout.className = 'checkout'
        checkoutContainer.appendChild(checkout)
        let checkoutImg = document.createElement('img')
        checkoutImg.src = myCart
        console.log(checkoutImg.src);
        checkout.appendChild(checkoutImg)
    }
}

