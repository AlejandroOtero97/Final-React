export const getFetch = new Promise((resolve, reject)=>{
    let products = [];
    let condition = true
    if(condition){
        setTimeout(() => {
            resolve(products)
        }, 3000);
    }else{
        reject("404 - not found")
    }
})
