// INDEX JS SETTINGS //
////// API CALL ////
async function showCamera() {
    try{
        let res = await fetch("http://localhost:3000/api/cameras")
        if (res.ok){
            let camera = await res.json();
            ItemGenerator._generateAllItems(camera)
            console.table(camera)
        }else {
            console.error('Error !')
        }
        }catch (error) {
        console.log(error);
    }
}

showCamera()