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




