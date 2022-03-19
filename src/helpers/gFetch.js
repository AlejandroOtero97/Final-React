const productos = [
    {id: "1", name: 'GTA 5',   stock:5 ,price:1500 ,desc:"Destroy cars, rob people and have fun",    imgUrl:"https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/05/GTA-5-1-scaled.jpg?fit=2560%2C1439&ssl=1"},
    {id: "2", name: 'Skyrim',  stock:10 ,price:2000 ,desc:"Level up, get upgrades, and shot fire",    imgUrl:"https://sm.ign.com/ign_es/screenshot/default/skyrim-regreso_syh4.jpg"},
    {id: "3", name: 'Tetris',  stock:12 ,price:2500 ,desc:"Get a highscore betten than mine, try it", imgUrl:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Tetris99_image1600w.jpg"},
    {id: "4", name: 'HalfLife',stock:8 ,price:3000 ,desc:"Aliens everywhere, lets hope gordon helps",imgUrl:"https://i.blogs.es/854de1/1585597051_181597_1585597106_noticia_normal/1366_2000.jpeg"},
    {id: "5", name: 'Terraria',stock:6 ,price:3500 ,desc:"Keep mining until you hit the underworld", imgUrl:"https://kosgames.com/wp-content/uploads/2021/08/b7c65e77a5f126a1024a8459ec0fd08f879860f1.jpeg"}
]

export const getFetch = new Promise((resolve, reject)=>{
    let condition = true
    if(condition){
        setTimeout(() => {
            resolve(productos)
        }, 0);
    }else{
        reject("404 - not found")
    }
})

