let heroes = [["ironman","spiderman","thor"],["superman", "wonderman","flash"]];

// for(let i = 0; i<heroes.length; i++){
//     for(let j = 0; j<heroes[0].length; j++){
//         console.log(heroes[i][j]);
//     }
// }

// let fruits = ["mango","apple","banana","litchi"];

// for(let fruit  of fruits){
//     console.log(fruit);
// }

// for(list of heroes){
//     for(hero of list){
//         console.log(hero);
//     }
// } 


let h1 = document.querySelector("h1");

function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color = color;
       if(nextColorChange) nextColorChange();
    },delay)
}

changeColor("red",1000,()=>{
    changeColor("green",1000,()=>{
        changeColor("blue",1000)
    })
})

// function saveToDb(data,sucess,failure){
//     let internetSpeed = Math.floor(Math.random()*10);
//     if(internetSpeed > 4){
//         sucess();
//     }else{
//         failure()
//     }
// }

// saveToDb("hello", ()=>{
//     console.log("data was save");
//     saveToDb("welcome",()=>{
//         console.log("data 2 was save");
//     },
//     ()=>{
//         console.log("data 2 was not save");
//     }
// )
// },
// ()=>{
//     console.log("data was not save");
// }
// )

function saveToDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10);
        if(internetSpeed >4){
            resolve();
        }else{
            reject();
        }
    })
}

saveToDb("hello")
.then(()=>{
    console.log("data 1 was save");
    return saveToDb("welcome");
})
.then(()=>{
    console.log("data 2 was save");
})
.catch(()=>{
    console.log("weak connection");
})