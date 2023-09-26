function sortMaker(arr) {

    if (!Array.isArray(arr) == true) {
        return "It is not an array please provide a valid array"
    }
    else if (Array.isArray(arr) == true ){
        for(let i =0 ; i< arr.length ; i++){
           let number = arr[i]
            if(number<0){
                return "invalid input, provide all positive number "
            }
            else if (number == arr[i+1]){
                return "equal"
            }
            else{
                arr.sort(function(a,b){
                    return a-b ;
                })
                return arr
            }
        }
    }
   


}


const numbers = [4, 6,3,5,8,9]
const corretOrder = sortMaker(numbers)
console.log(corretOrder)