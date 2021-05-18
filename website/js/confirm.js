async function getOrderId(){
    try{
       let res = await fetch("http://localhost:3000/api/cameras/order", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: localStorage.getItem("OrderID"),
        })
        if(res.ok){
            let responseOrder = await res.json()
            console.log(responseOrder);
            orderConfirmation._getOrderId(responseOrder);
        }
    }
    catch (e){
        console.log(e);
    }
}

getOrderId()

