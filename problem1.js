function cubeNumber(number){
    if(typeof(number) !== "number"){
        return "Please provide a number"
    }
    else{
        cubeResult = Math.pow(number, 3)
        return cubeResult
    }
}

inputNumber = 4
output = cubeNumber(inputNumber)
console.log(output)