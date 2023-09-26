function canPay(changeArray, totalDue) {


if(Array.isArray(changeArray)== true && typeof(totalDue) == "number"){
    let sumOfMoney = 0;
    for(let i =0 ; i<changeArray.length ; i++){
        sumOfMoney = sumOfMoney + changeArray[i]

    }
    if(changeArray.length == 0){
        return "Empty Array"
    }
    if (sumOfMoney >= totalDue){
        return true
    }
    else{
        return false
    }

}

else{
    return "Provide a valid array and and valid number"
}
}

const khucraMoney = [1,4,5 ]
const chipsPrice = 10
const kinteParboKina = canPay(khucraMoney , chipsPrice)
console.log(kinteParboKina)