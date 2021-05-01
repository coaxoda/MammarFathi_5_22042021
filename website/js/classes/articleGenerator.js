class articleGenerator {
    
    static _generateArticle(cameras) {
            // Creating of the main section/ base of implementation for "articleItem.js"
        let articleSection = document.createElement('section');
        let mainContent = document.querySelector('main');
        mainContent.appendChild(articleSection);

            //Get product ID by location to the next page + finding all ID corresponding to the product selected previously
        const urlId = new URLSearchParams(window.location.search)
        const cameraId = urlId.get('id');
        console.log(cameraId);
        const camProduct = cameras.find(cameras => cameras['_id'] == cameraId);
        console.log(camProduct);

            //New instance of the class article "articleItem.js" with params -- (cameras, articleSection, camProduct) -- previously created in "/article.js" and here
        new article(cameras, articleSection, camProduct)
    }
} 
