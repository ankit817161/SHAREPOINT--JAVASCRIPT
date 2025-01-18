// wtite a function to update  profile
//take image url/path frome user and user name ,mob ,adress,bio 
//and display the profile in  center of user screen  in card from.

function createProfile(image,name,phone,address,gender,bio){
    document.write(`
        
        <div border="2" style=" margin:auto; width:400px; hight:300px;border:1px solid black">
        <center>
        <img src="${image}">
        <h1>Name: ${name}</h1>
        <h1>gender: ${gender}</h1>
        <h1>Mob: ${phone}</h1>
        <h1>Address: ${address}</h1>
        <h1>Boi:${bio}</h1>
        <button style="background-color:green; padding:10px">Follow</button>
        <button style="background-color:red">Edit</button>
        </center>

        </div>`)
  

}
let image=prompt("enter your img path")
let name=prompt("enter your user name")
let gender=prompt("Enter your gender")
let phone=prompt("enter your phone number")
let address=prompt("enter your  address")
let bio=prompt("Enter your bio")
createProfile(image,name,phone,address,gender,bio)
