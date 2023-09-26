function matchFinder(string1 , string2){

    if (typeof(string1)!== "string" || typeof(string2)!== "string"){
        
        return "Input two valid string "
    }
    else{
        string1Lowercase = string1.toLocaleLowerCase();
        string2Lowercase = string2.toLocaleLowerCase();
        if(string1Lowercase.includes(string2Lowercase) === true){
            return "true"

        }
        else{
            return "false"
        }
    }

}

const input1 = "John Doe"
const input2 = "ohn"

 const output = matchFinder(input1 ,input2 )
console.log(output)