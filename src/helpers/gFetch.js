const productos = [
    {id: 1, name: 'fede', img: "https://images.unsplash.com/photo-1646500209483-d66f3b910edc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
    {id: 2, name: 'ale'},
    {id: 3, name: 'feli'},
    {id: 4, name: 'otto'},
    {id: 5, name: 'salaame'}]

export const getFetch = new Promise((resolve, reject)=>{
    let condition = true
    if(condition){
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    }else{
        reject("400 - not found")
    }
})