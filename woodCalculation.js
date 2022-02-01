function woodCalculator(charPrice,bedPrice,tvPrice){
    const charArea = 10;
    const bedArea = 30;
    const tvArea = 43;
    const charAreaTotal = charPrice * charArea;
    const bedAreaTotal = bedPrice * bedArea;
    const tvAreaTotal = tvPrice * tvArea;
    // All Element Total Value is :
    const allelementTotalValue = charAreaTotal + bedAreaTotal + tvAreaTotal;
    return allelementTotalValue;
}

const threeChoiceValue = woodCalculator(2,1,4);
console.log(threeChoiceValue);