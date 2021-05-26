async function getCheckout() {
    try{
        let res = await fetch("http://localhost:3000/api/cameras")
        if (res.ok){
            let cameras = await res.json();
            let myCart = JSON.parse(localStorage.getItem("myCart"))
            console.table(myCart)
            CheckoutGenerator._generateCheckoutItems(cameras, myCart)
        }else {
            alert('Connexion impossible avec l\'API')
        }
        }catch (error) {
        console.log(error);
    }
}

getCheckout()