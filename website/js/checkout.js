async function getCheckout() {
    try{
        let res = await fetch("http://localhost:3000/api/cameras")
        if (res.ok){
            let cameras = await res.json();
            let myCart = JSON.parse(localStorage.getItem("myCart"))
            console.table(myCart)
            CheckoutGenerator._generateCheckoutItems(cameras, myCart) // calling static function _generateCheckoutItems(cameras, myCart) of the class "CheckoutGenerator" in "/checkoutGenerator.js"
        }else {
            alert('Connexion impossible avec l\'API')
        }
        }catch (error) {
        console.log(error);
    }
}

getCheckout() // Calling API + generating article content page with (cameras) ressources at "/checkoutGenerator.js"