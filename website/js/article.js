async function getArticle() {
    try{
        let res = await fetch("http://localhost:3000/api/cameras")
        if (res.ok){
            let cameras = await res.json()
            articleGenerator._generateArticle(cameras)  
        }else {
            console.error('Error !')
        }
    }catch (e) {
    console.log("Une erreur est survenu a : " + e.stack);
    }
}

getArticle()