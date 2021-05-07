class CheckoutGenerator {

    static _generateCheckoutItems(cameras, myCart) {
        let checkoutContainer = document.createElement('div');
        let mainSection = document.querySelector('section')
        checkoutContainer.id = 'checkoutlist'
        mainSection.appendChild(checkoutContainer)
        if (myCart === null){
            let empty = document.createElement('p')
            empty.innerHTML = "Votre panier est vide"
            empty.style.fontSize = "22px"
            checkoutContainer.appendChild(empty)
        }
        for (let i = 0; i < myCart.length || myCart.price; i++) {
            new myCheckout(cameras, checkoutContainer, myCart[i])
        } 
    }
}
class myCheckout{

    constructor(cameras, checkoutContainer, myCart){
        this._checkoutContent(checkoutContainer, myCart)
    }

    _checkoutContent(checkoutContainer, myCart){
        //Making div body of each article in cart
        let checkout = document.createElement('div')
        checkout.className = 'checkout'
        checkoutContainer.appendChild(checkout)
        //Img for each article img 
        let checkoutImg = document.createElement('img')
        checkoutImg.src = myCart.img
        checkout.appendChild(checkoutImg)
        //Display each product name
        let checkoutName = document.createElement('p')
        checkoutName.innerHTML = myCart.name
        checkout.appendChild(checkoutName)
        //Display each product price
        let checkoutPrice = document.createElement('p')
        checkoutPrice.innerHTML = myCart.price  / 200 - 0.5 + "€"
        checkout.appendChild(checkoutPrice)
        //Deleting button for each product
        let checkoutDeleteItem = document.createElement('i')
        checkoutDeleteItem.className = 'fas fa-times'
        checkout.appendChild(checkoutDeleteItem)
        checkoutDeleteItem.addEventListener('click', function(){
            checkout.style.display = 'none'
            localStorage.removeItem("myCart")
        })
        //Total price Display
        let panier = JSON.parse(localStorage.getItem('myCart'))
        let price = panier.map((item) => item.price).reduce((a, b) => a + b)
        
        let checkoutSection = document.querySelector('section')
        let checkoutTotalPriceBody = document.createElement('div')
        console.log(`Le prix total est de ${price / 200 - 0.5} €`)
    }
}

