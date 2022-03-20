const productos = [
    {id: "1", name: 'Resident Evil',stock:5 ,  price:1500 ,desc:"You're Leon Kennedy and your job is to kill zombies",        descExtra:"Resident Evil, known in Japan as Biohazard, is a Japanese horror video game series and media franchise created by Capcom. It consists of survival horror, shooter.", imgSource:"https://areajugones.sport.es/wp-content/uploads/2020/04/resident-evil-4-remake.jpg"},
    {id: "2", name: 'Skyrim',       stock:10 , price:2000 ,desc:"Level up, get upgrades, and shot fire",                      descExtra:"The Elder Scrolls V: Skyrim is an action role-playing game, playable from either a first or third-person perspective.", imgSource:"https://sm.ign.com/ign_es/screenshot/default/skyrim-regreso_syh4.jpg"},
    {id: "3", name: 'Nioh',         stock:12 , price:2500 ,desc:"action role-playing game set in Japan during the year 1600", descExtra:"Nioh is an action role-playing game set in Japan during the year 1600, with players taking the role of an Irish samurai named William.", imgSource:"https://sm.ign.com/t/ign_es/news/n/nioh-passe/nioh-passes-1-million-sales-free-dlc-released_s37a.1280.jpg"},
    {id: "4", name: 'Half Life',     stock:8 ,  price:3000 ,desc:"Aliens everywhere, lets hope gordon helps",                 descExtra:"Half-Life is a first-person shooter that requires the player to perform combat tasks and puzzle solving to advance through the game", imgSource:"https://i.blogs.es/854de1/1585597051_181597_1585597106_noticia_normal/1366_2000.jpeg"},
    {id: "5", name: 'Terraria',     stock:6 ,  price:3500 ,desc:"Keep mining until you hit the underworld",                   descExtra:"2D sandbox game with gameplay that revolves around exploration, building, crafting, combat, survival, and mining, both single-player and multiplayer modes.", imgSource:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Terraria_image1280w.jpg"},
    {id: "6", name: 'Dark Souls',   stock:9 ,  price:6000 ,desc:"Fight through a horde of skeletons",                         descExtra:"Dark Souls is a third-person action role-playing game. A core mechanic of the game is exploration. Proceed with caution, learn from past mistakes", imgSource:"https://static.bandainamcoent.eu/high/dark-souls/dark-souls-3/00-page-setup/ds3_game-thumbnail.jpg"},
    {id: "7", name: 'Elden Ring',   stock:2 ,  price:9500 ,desc:"Explore the lands between with your horse",                  descExtra:"Elden Ring, a powerful artefact that got shattered and sent into different areas in the world. Our objective is to find the shards and restore the ring", imgSource:"https://sm.ign.com/ign_es/news/e/elden-ring/elden-ring-fans-discover-secret-wall-that-only-opens-after-5_vaug.jpg"},
    {id: "8", name: 'F.E.A.R',      stock:20 , price:1200 ,desc:"Play as a supersoldier in a paranormal city",                descExtra:"The player assumes the role of F.E.A.R.'s Point Man, who possesses superhuman reflexes, and must uncover the secrets of a paranormal menace in the form of Alma, a young girl.", imgSource:"https://i.ytimg.com/vi/_K7YhuZa4QQ/maxresdefault.jpg"},
]

export const getFetch = new Promise((resolve, reject)=>{
    let condition = true
    if(condition){
        setTimeout(() => {
            resolve(productos)
        }, 3000);
    }else{
        reject("404 - not found")
    }
})

