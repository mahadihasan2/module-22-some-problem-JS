const shopping = [
    {Name: 'T-shirt',price: 4500},
    {Name:'showe', price : 2300},
    {Name: 'pant', price: 2500},
    {Name : 'Book', price: 1200},
];

let totalPrice =0;
for(let shope of shopping){
    // console.log(shope);
    totalPrice = totalPrice + shope.price;
    // totalPrice = shope;

}
// console.log(totalPrice);

const shoppingCard = [
    {Name: 'T-shirt',price: 4500,quantity:2,},
    {Name:'showe', price : 2300, quantity:3,},
    {Name: 'pant', price: 2500,quantity:4,},
    {Name : 'Book', price: 1200,quantity:5,},
];

let cardTotal = 0;
for(const card of shoppingCard){
    // console.log(card);
    const toTalQuantity = card.quantity * card.price;
    cardTotal = cardTotal + toTalQuantity;

}
console.log(cardTotal);