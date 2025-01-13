//functions category
// 1.take nothing return nothing
// 2.take nothing return  somthing
// 3.take samething return nothing
// 4.take something return something

// 1.take nothing return nothing
/*function addition(){
    let num1=70
    let num2=50
    let result =num1+num2;
    console.log(`Result : ${result}`)

}
addition()*/

// 2.take nothing return something
/*function addition(){
    let num1=75
    let num2=50
    let result =num1+num2;
   return`Result : ${result}`

}
 let data=addition()
console.log( data)*/
// 3.take something return nothing
/*function addition(a,b){
    let num1=a
    let num2=b
    let result =num1+num2;
    console.log(`Result : ${result}`)

}
addition( 40,34)*/
// 4.take something return nothing
/*function addition(a,b){
    let num1=a
    let num2=b
    let result =num1+num2;
    return`Result : ${result}`

}
let data =addition( 40,34)
console.log(data)*/

 
function UpdateProfile(){
    let name="ankit"
    let boi="i am fresher java developer"
    console.log(`previous profile: ${name},${boi}`)
    let name1="yadav"
    let boi1="i am  fresherjavascript"
     return name1+","+boi1;
}
 let data=UpdateProfile()
console.log(`Update profile:${data}`)
