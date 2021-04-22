// class ItemGenerator {
//     static _generateAllItems(cameras) {
//         let productDiv = document.createElement('section');
//         let mainContent = document.querySelector('main')
//         mainContent.appendChild(productDiv)
//         productDiv.id = 'items'
//
//         // ITERATION OPERATION FOR EACH ARTICLE FROM JSON API (cameras) OBJECT
//         for (let i = 0; i < cameras.length; i++) {
//             let newItem = new Item(cameras[i], productDiv)
//             newItem._generateArticle()
//             newItem._generateImage()
//             newItem._generateBody()
//             newItem._generateTitle()
//             newItem._generatePrice()
//             newItem._generateButton()
//         }
//     }
// }

class ItemGenerator {

    static _generateAllItems(cameras) {
        let productSection = document.createElement('section');
        let mainContent = document.querySelector('main')
        mainContent.appendChild(productSection)
        productSection.id = 'items'

        // ITERATION OPERATION FOR EACH ARTICLE FROM JSON API (cameras) OBJECT
        for (let i = 0; i < cameras.length; i++) {
            new Item(cameras[i], productSection)
        }     
    }
}




