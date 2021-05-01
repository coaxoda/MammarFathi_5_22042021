async function getArticle() {
    try{
        let res = await fetch("http://localhost:3000/api/cameras")
        if (res.ok){
            let cameras = await res.json()
            articleGenerator._generateArticle(cameras)  // calling static function _generateArticle(cameras) of the class "articleGenerator" in "/articleGenerator.js"
        }else {
            console.error('Error !')
        }
    }catch (e) {
    console.log("Une erreur est survenu a : " + e.stack);
    }
}

getArticle() // Calling API + generating article content page with (cameras) ressources at "/articleGenerator.js"