// INDEX JS SETTINGS //
////// API CALL ////
async function showCamera() {
    try{
        let res = await fetch("http://localhost:3000/api/cameras")
        if (res.ok){
            let cameras = await res.json();
            ItemGenerator._generateAllItems(cameras)
            console.table(cameras)
        }else {
            console.error('Error !')
        }
        }catch (error) {
        console.log(error);
    }
}

showCamera()