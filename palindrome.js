function Palindrome(str){
    let a = str.split('')
    b = a.reverse().join("")
    if(str == b){
        console.log("Palindrome")
    }else{
        console.log("Not a Palindrome")
    }
}
Palindrome("Anna")