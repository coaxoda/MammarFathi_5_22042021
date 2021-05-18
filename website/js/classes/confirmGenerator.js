class orderConfirmation {
    
    static _getOrderId(responseOrder){
        let orderDiv = document.createElement('div')
        let main = document.querySelector('main')
        orderDiv.id = "confirm-order"
        main.appendChild(orderDiv)

        new confirmContent(responseOrder, orderDiv)
    }
}

class confirmContent{
    constructor(responseOrder, orderDiv){
        this._orderTitle(responseOrder, orderDiv)
        this._backtoIndex(orderDiv)
    }
        _orderTitle(responseOrder, orderDiv){
            let orderInfo = document.createElement('h1')
            let orderMessage = document.createElement('p')
            orderInfo.innerHTML = "Commande N° : " + responseOrder.orderId
            orderMessage.innerHTML = "Merci d'avoir commander sur Orinoco, cliquez ci-dessous pour revenir à l'accueil "
            orderDiv.appendChild(orderInfo)
            orderDiv.appendChild(orderMessage)
        }

        _backtoIndex(orderDiv){
            let indexbtn = document.createElement('button')
            indexbtn.id = "back-index"
            indexbtn.innerHTML = "Retourner à l'accueil"
            orderDiv.appendChild(indexbtn)
            indexbtn.addEventListener('click', function(){
                location.href = "index.html"
                localStorage.clear()
            })
        }
}
