
function isCompleted(){
    /*
    * Summary: Checks if the user has given any inputs
    * @param   userInput     How many characters should the password contain
    * @param   hasNumbers    Checks if the user wants numbers in his password
    * @param   hasSpeacial   Checks if the user wants special characters in his password
    */

    var userInput = document.forms['container']['numberInput'].value;
    var hasNumbers = document.getElementById('check1').checked ? true : false;
    var hasSpecial = document.getElementById('check2').checked ? true : false;

    if (!userInput){
        alert("Form is not completed");
        return false;
    }
    else{
        document.getElementById('result').value = randomPass(userInput, hasNumbers, hasSpecial);
        return true;
    }
}

function randomPass(passLength, hasNumbers, hasSpecial){
    /*
    * Summary: Returns a random generated password based on user inputs
    * @param   charPool      Creates the pool of characters to be used in the generating of random passwords
    * @return  password      The random generated password that is delivered to the user
    */

    // REGIX
    var letters = "ABCDEFGHIKLMNOPQRSTVXYZabcdefghiklmnopqrstvxyz";
    var numbers = "1234567890";
    var special = "#!_-/\"|.$+-=?&~%*";
    var charPool = "";
    var password = "";

    if (hasNumbers && hasSpecial){
        charPool = charPool.concat(letters, numbers, special);
    }
    else if (hasNumbers && !hasSpecial){
        charPool = charPool.concat(letters, numbers);
    }
    else if (!hasNumbers && hasSpecial){
        charPool = charPool.concat(letters, special);
    }
    else
        charPool = charPool = letters;

    for (var i=0; i<passLength; i++){    
        password += charPool.charAt(Math.floor(Math.random() * charPool.length));
    }
    return password;
}

function copyToClipboard(){
    /*
    * Summary: Copies the password to the user's clipboard
    * @param:  textToCopy      The text to be copied from the result textarea    
    */
    var textToCopy = document.getElementById('result');
    //var copyButton = document.getElementById('cpyBtn');

    textToCopy.select();
    document.execCommand('copy');
    //copyButton.addEventListener('click', () => copyButton.style.backgroundColor = '#4BB543');
}