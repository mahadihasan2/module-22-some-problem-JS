const phones = [
    {Name:'Redmi R45', price:18000,camera : 6, Ram : 32},
    {Name :'Relmi M32', price : 35000, camera:8, Ram: 43 },
    {Name : 'Vivo S33', price : 56000, camera : 12, Ram: 42},
    {Name : 'i-phone', price : 120000, camera : 54, Ram: 48},
    {Name : 'Nokia s3', price: 6500, camera: 5, Ram: 2},
    {Name: 'samphone s3', price: 5000, camera: 3, Ram:5},

];
// let chepest = phones[0];
// for (const Phone of phones){
//     // console.log(Phone);

//     // compare Price Only
//     if(Phone.price<chepest.price){
//         chepest = Phone
//     }

    
// }

// console.log(chepest);

function chepestarr(compare){
   let chepest = compare[0];
   for(const compare of phones){
       if(compare.price < chepest.price){
           chepest = compare

       }

   }
   return chepest;
}

let chepestPhone = chepestarr(phones);
console.log(chepestPhone);