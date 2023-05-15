// Dom elements
const result = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generate = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');


// Generator function
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


// Generate event  listen
generate.addEventListener('click', () => {
    // + unary operator to convert into number
    const length = +lengthEl.value;
    const hasUpper = uppercase.checked;
    const hasLower = lowercase.checked;
    const hasNumber = numbers.checked;
    const hasSymbol = symbols.checked;

    // console.log(hasUpper, hasLower, hasNumber, hasSymbol,typeof( length));

    result.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});
// copy password to clipboard
clipboard.addEventListener('click' , ()=>{
    const textarea = document.createElement('textarea');
    const password = result.innerText;

    if (!password) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('password is copy to clipboard');
})

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    // 1. Init password var
    // 2. Filter out unchecked types
    // 3. Loop over length call generator function for each type 
    // 4. Add final password to the password var and return

    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    // console.log('TypesCount: ', typesCount);

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
        item => Object.values(item)[0] == true
    );
    // console.log('typesArr: ', typesArr);

    if (typesCount === 0) {
        return '';
    }
    for (let i = 0; i < length; i ++) {
        const rand = Math.floor(Math.random() * typesArr.length);
         generatedPassword += randomFunc[Object.keys(typesArr[rand])[0]]();
        //  console.log(typesArr[rand]);
        //  console.log(Object.keys(typesArr[rand])[0]);
        // console.log(generatedPassword);
    //    typesArr.forEach(type =>{
    //     //    const funcName = Object.keys(type)[0];
    //        console.log(type);
    //        console.log(Object.keys(1));
        //    console.log(funcName);
        // console.log(Math.floor(Math.random()*4));
        // console.log(typeof(randomFunc));
        //  console.log(randomFunc[funcName]());
        //    generatedPassword += randomFunc[funcName]();
          
        //    console.log(randomFunc);
    //    }); 
    }
    
    // console.log(generatedPassword);
    //  console.log(generatedPassword.slice(0, length));
    //  const finalPassword = generatedPassword.slice(0, length);

     return generatedPassword;

}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(para) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
   
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    // console.log(Math.floor(Math.random() * symbols.length));
    return symbols[Math.floor(Math.random() * symbols.length)];
}
// console.log(String.fromCharCode(97))
// console.log(Math.floor(Math.random() * 26) + 97);
// console.log(getRandomLower());
// console.log(getRandomUpper());
// console.log(getRandomNumber());
// console.log(getRandomSymbol());



