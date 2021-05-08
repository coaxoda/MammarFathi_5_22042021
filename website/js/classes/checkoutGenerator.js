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
            document.querySelector('#remove').style.display = 'none'
            document.querySelector('button').style.display = 'none'
            document.querySelector('#placeorder').innerHTML = " "
        }
        for (let i = 0; i < myCart.length || myCart.price; i++) {
            new myCheckout(cameras, checkoutContainer, myCart[i])
        } 
    }
}
class myCheckout{

    constructor(cameras, checkoutContainer, myCart){
        let checkout = this._checkoutContent(checkoutContainer)
        this._checkoutImg(myCart, checkout)
        this._checkoutName(checkout, myCart)
        this._checkoutPrice(checkout, myCart)
        this._checkoutRemove(checkoutContainer)
        this._checkoutTotalPrice(checkoutContainer)
    }

    _checkoutContent(checkoutContainer){
        //Making div body of each article in cart
        let checkout = document.createElement('div')
        checkout.className = 'checkout'
        checkoutContainer.appendChild(checkout)
        return checkout
    }
    _checkoutImg(myCart, checkout){
        //Img for each article img 
        let checkoutImg = document.createElement('img')
        checkoutImg.src = myCart.img
        checkout.appendChild(checkoutImg)
    }    
    _checkoutName(checkout, myCart){
        //Display each product name
        let checkoutName = document.createElement('p')
        checkoutName.innerHTML = myCart.name
        checkout.appendChild(checkoutName)
    }    
    _checkoutPrice(checkout, myCart) {
        //Display each product price
        let checkoutPrice = document.createElement('p')
        checkoutPrice.innerHTML = myCart.price  / 100 + "€"
        checkout.appendChild(checkoutPrice)
    }   
    _checkoutRemove(checkoutContainer){
        //Deleting button for each product
        let removeCart = document.querySelector('#remove')
        checkoutContainer.appendChild(removeCart)
        removeCart.addEventListener('click', function(){
            localStorage.removeItem('myCart')
            checkoutContainer.style.display = 'none'
            window.location.reload()
        })
    }
    _checkoutTotalPrice(checkoutContainer){
        //Total price Display
        let cartParsing = JSON.parse(localStorage.getItem('myCart')) //Parsing LS myCart to object
        let price = cartParsing.map((item) => item.price).reduce((a, b) => a + b) // Picking all index with value 'price' to addition all price value
        let totalPrice = (price / 100); // Show the final price
        // console.log(totalPrice);
        let total = document.querySelector('#total')
        total.innerHTML = "Prix total : " + `${totalPrice}`
        checkoutContainer.appendChild(total)
    }
}
