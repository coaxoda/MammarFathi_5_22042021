class articleGenerator {
    
    static _generateArticle(cameras) {
        let articleSection = document.createElement('section');
        let mainContent = document.querySelector('main');
        mainContent.appendChild(articleSection);

        const urlId = new URLSearchParams(window.location.search)
        const cameraId = urlId.get('id');
        console.log(cameraId);
        const camProduct = cameras.find(cameras => cameras['_id'] == cameraId);
        console.log(camProduct);
        
        new article(cameras, articleSection, camProduct)
    }
} 
