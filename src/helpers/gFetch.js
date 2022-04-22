export const getFetch = new Promise((resolve, reject)=>{
    let productos = [];
    let condition = true
    if(condition){
        setTimeout(() => {
            resolve(productos)
        }, 3000);
    }else{
        reject("404 - not found")
    }
})
