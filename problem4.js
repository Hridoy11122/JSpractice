function findAddress(obj){
    if(typeof(obj) == "object"){

        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';

        return `${street}, ${house} , ${society}`
    }
    else{
        return "Please provide a valid  object"
    }

}

const address = {
    street:10,
    house:"15A",
    society:"Earth Perfect"
}
result = findAddress(address)
console.log(result)