const text = 'My name is Mahadi';
function getrevarse(text){
    // console.log(text)
    let reverse = "";
    for (const letter of text){
        console.log(letter);
        reverse = letter + reverse;
    }
    return reverse;
}

let reversed = getrevarse(text);
console.log(reversed);

