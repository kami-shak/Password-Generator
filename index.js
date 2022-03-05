let password = ""
let allCharacters = [
    'Q','q','W','w','E','e','R','r','T','t','Y','y','U','u','I','i','O','o','P','p',
    'A','a','S','s','D','d','F','f','G','g','H','h','J','j','K','k','L','l',
    'Z','z','X','x','C','c','V','v','B','b','N','n','M','m',
    '1','2','3','4','5','6','7','8','9','0',
    '!','@','#','$','%','^','&','*', '+' ,'_','-','|'
]
let resultEl1 = document.getElementById("result1")
let resultEl2 = document.getElementById("result2")
let resultEl3 = document.getElementById("result3")
let resultEl4 = document.getElementById("result4")
let lengthOfArray = allCharacters.length;

function generatePassword() {
    for (let index = 0; index < 12; index++) {
         password += allCharacters[Math.floor(Math.random()* lengthOfArray)];
    }
    resultEl1.textContent = password;
    password = ""
    
    for (let index = 0; index < 12; index++) {
        password += allCharacters[Math.floor(Math.random()* lengthOfArray)];
   }
   resultEl2.textContent = password;
   password = ""
   
   for (let index = 0; index < 12; index++) {
    password += allCharacters[Math.floor(Math.random()* lengthOfArray)];
   }
     resultEl3.textContent = password;
    password = ""

   for (let index = 0; index < 12; index++) {
    password += allCharacters[Math.floor(Math.random()* lengthOfArray)];
   }
    resultEl4.textContent = password;
    password = ""
}
//console.log(generatePassword());

