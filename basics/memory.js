//********************************************************** *//
//stack(primitive), heap(Non Primitive) 

let myYoutubename = "KiranJi"
let anothername = myYoutubename
anothername = "KiranG"
console.log(anothername)
console.log(myYoutubename)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl" 
}

let userTwo = userOne
userTwo.email = "kiran123@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);