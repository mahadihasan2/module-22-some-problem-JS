const nam = ['Abul','Babul','Kabul','Korim','Rohim','Abul','Kalam','Rohim','Babul','Kabul'];
function uniqueValue (items){
    const unique = [];
    // for(let i = 0; i<items.length;i++){
    //     const element = items[i];
    //     console.log(element);
    // }

    for(const element of items){
        console.log(element);
        if(unique.indexOf(element)== -1){
            unique.push(element);
        }
     }

     return unique;

}

let uniquesName = uniqueValue(nam);
console.log(uniquesName);
