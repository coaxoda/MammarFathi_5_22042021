class CheckoutGenerator {

    static _generateCheckoutItems(cameras) {
        let checkoutContainer = document.createElement('div');
        let mainSection = document.querySelector('section')
        mainSection.appendChild(checkoutContainer)
        checkoutContainer.id = 'checkoutlist'
        new Checkout(articleBtn, cameras, checkoutContainer)
    }
}