async function showCamera() {
    try{
        let res = await fetch("http://localhost:3000/api/cameras")
        if (res.ok){
            let cameras = await res.json();
            let myCart = JSON.parse(localStorage.getItem("myCart"))
            CheckoutGenerator._generateCheckoutItems(cameras)
            console.table(myCart)
        }else {
            console.error('Error !')
        }
        }catch (error) {
        console.log(error);
    }
}

showCamera()