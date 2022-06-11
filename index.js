const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
 

passEl1 = document.getElementById("pass1-el");
passEl2 = document.getElementById("pass2-el");
let password = "";
let password2 = "";

function randomPass(){
//Random Math that generates all the chars
let random1 = Math.floor(Math.random()* 91)
 let random2 = Math.floor(Math.random()* 91)
 let random3 = Math.floor(Math.random()* 91)
 let random4 = Math.floor(Math.random()* 91)
 let random5 = Math.floor(Math.random()* 91)
 let random6 = Math.floor(Math.random()* 91)
 let random7  = Math.floor(Math.random()* 91)
 let random8 = Math.floor(Math.random()* 91)
 let random9 = Math.floor(Math.random()* 91)
 let random10 = Math.floor(Math.random()* 91)
 let random11 = Math.floor(Math.random()* 91)
 let random12 = Math.floor(Math.random()* 91)
 let random13 = Math.floor(Math.random()* 91)
 let random14 = Math.floor(Math.random()* 91)
 let random15 = Math.floor(Math.random()* 91)
 let random16 = Math.floor(Math.random()* 91)
 let random17 = Math.floor(Math.random()* 91)
 let random18 = Math.floor(Math.random()* 91)
 let random19 = Math.floor(Math.random()* 91)
 let random20 = Math.floor(Math.random()* 91)
 let random21  = Math.floor(Math.random()* 91)
 let random22 = Math.floor(Math.random()* 91)
 let random23 = Math.floor(Math.random()* 91)
 let random24 = Math.floor(Math.random()* 91)
 let random25 = Math.floor(Math.random()* 91)
 let random26 = Math.floor(Math.random()* 91)
 let random27 = Math.floor(Math.random()* 91)
 let random28 = Math.floor(Math.random()* 91)
 let random29 = Math.floor(Math.random()* 91)
 let random30 = Math.floor(Math.random()* 91)
password = characters[random1] + characters[random2] + characters[random3] + characters[random4] + characters[random5] + characters[random6] + characters[random7] + characters[random8] + characters[random9] + characters[random10] + characters[random11] + characters[random12] + characters[random13] + characters[random14] + characters[random15];
passEl1.textContent = password;
 
password2 = characters[random16] + characters[random17] + characters[random18] + characters[random19] + characters[random20] + characters[random21] + characters[random22] + characters[random23] + characters[random24] + characters[random25] + characters[random26] + characters[random27] + characters[random28] + characters[random29] + characters[random30];
 passEl2.textContent = password2;

}






