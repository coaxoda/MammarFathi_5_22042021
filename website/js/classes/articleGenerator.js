class articleGenerator {
    
    static _generateArticle(cameras) {
        let articleSection = document.createElement('section');
        let mainContent = document.querySelector('main')
        mainContent.appendChild(articleSection)

        new article(cameras, articleSection)
    }
}
