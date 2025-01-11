// write a function  to caluculate the square of a number 
function caluculate_square(){
    let  n=2
    console.log(n**2)
}
caluculate_square()
// --- PARAMETER AND ARGUMENTS
function generic_function(n1,n2){
    console.log(n1**n2)

}
generic_function(5,5)

function generic_function(num,power){
    console.log(num**power)
    

}
let power=3
let num=4
generic_function(num,power)
// write a function  to check the charector pass by user vowel or not 

function check_vowel( char){
    
    if(char=='a' ||char=='e'||char=='i'||char=='o'||char=='u')
    {
        console.log(`it is vowel char ${char}` )
    }else{
        console.log(`it is not vowel ${char} `)
    }

}
let value='d'
check_vowel( value)

// ------ return type 
 function add(total_cash,used_cash){
    return total_cash-used_cash

 }
 let total_cash=99
 let used_cash=50
 let data= add(total_cash,used_cash)
 console.log(data)