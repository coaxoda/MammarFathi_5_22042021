class CheckoutGenerator {

    static _generateCheckoutItems(cameras, myCart) {
        let checkoutContainer = document.createElement('div');
        let mainSection = document.querySelector('section')
        checkoutContainer.id = 'checkoutlist'
        mainSection.appendChild(checkoutContainer)

        //If cart is empty
        if (myCart === null){
            let empty = document.createElement('p')
            empty.innerHTML = "Votre panier est vide"
            empty.style.fontSize = "22px"
            checkoutContainer.appendChild(empty)
            //Order option undisplay if cart is empty
            document.querySelector('#remove').style.display = 'none'
            let submitOrder = document.querySelector('#submit').style.display = 'none'
            document.querySelector('#placeorder').innerHTML = " "
        }
        //Iterate all product inside myCart by the propertie length
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
        this._checkoutPlaceOrder(myCart)
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
            localStorage.removeItem('OrderID')
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
        total.innerHTML = "Prix total : " + `${totalPrice + "€"}`
        checkoutContainer.appendChild(total)
    }

    _checkoutPlaceOrder(myCart){
        const btn = document.getElementById('submit')
        let firstName = document.getElementById('firstName')
        let lastName = document.getElementById('lastName')
        let address = document.getElementById('address')
        let city = document.getElementById('city')
        let email = document.getElementById('email')

        btn.addEventListener('click', function(){
            let contact = JSON.parse(localStorage.getItem("contact "))
            let products  = JSON.parse(localStorage.getItem("products"))

            if(contact === null){
                contact = {}
                products = []
            }

            let userInfo = {
                firstName : firstName.value,
                lastName : lastName.value,
                address : address.value,
                city : city.value,
                email : email.value
            }
            
            if(firstName.value && lastName.value && address.value && city.value && email.value != ""){ 
                products.push(myCart.id)
                contact = userInfo
                let order = JSON.stringify({contact, products})
                localStorage.setItem("OrderID", order)
                window.location.href = "confirm.html"
            }else {
                console.log("Incorrect value into input !");            
            }
        })
    }
}

// console.log(userInfo);
// console.log(products);
// products.push(myCart.id)
// contact = userInfo
// let order = JSON.stringify({contact, products})
// window.location.href = "confirm.html"
// localStorage.setItem("OrderID", order)