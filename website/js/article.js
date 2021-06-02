async function getArticle() {
    const urlId = new URLSearchParams(window.location.search)
    const cameraId = urlId.get('id');
    try{
        let res = await fetch("http://localhost:3000/api/cameras/" + cameraId)
        if (res.ok){
            let cameras = await res.json()
            articleGenerator._generateArticle(cameras, cameraId)  // calling static function _generateArticle(cameras) of the class "articleGenerator" in "/articleGenerator.js"
        }else {
            console.error('Error !')
        }
    }catch (e) {
    console.log("Une erreur est survenu a : " + e.stack);
    }
}

getArticle() // Calling API + generating article content page with (cameras) ressources at "/articleGenerator.js"git status
