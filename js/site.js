//Palindrome

//Event Listener
let runProgram=document.getElementById("btnSubmit");
runProgram.addEventListener("click", RunPalindrome);

//Main Function
function RunPalindrome(){

    //resets alert to invisible
    document.getElementById("alert").classList.add("invisible");

    //Caputure value
    let textInput=document.getElementById("inputText").value;

    //Check to see if there is at least 2 characters
    if(textInput.length<=1){
        let errorMessage="Please enter a word or phrase that has at least 2 characters.";
        let errorMessageDisplay=document.getElementById("validation-summary");
        errorMessageDisplay.innerHTML=errorMessage;
    }
    //Sanitize the text
    let sanitizedText=SanitizeText(textInput);

    //Palindrome Check
    let isPalindrome=CheckPalindromeText(sanitizedText);

    //Show Reuslts on Screen
    DisplayPalindromeResults(isPalindrome, textInput);
}

//Function to clean text
function SanitizeText(textInput){
    //Sanitize the input by removing the whitespaces and capitalizing all letters
    let regex=/[^a-z0-9]/gi;
    let sanitizedInputText=textInput.replace(/\s+/g, '').toUpperCase().replace(regex,"");
    return sanitizedInputText;
}

//function to check if a tet is a palindrome
function CheckPalindromeText(sanitizedInputText){
    //Count the letters in the word and divide it by half
    let stringLength=sanitizedInputText.length;
    let interatedLength=parseInt(stringLength/2);
    let isPalindrome=true;

    //Check each character to see if they match from both sides of the word
    for(i=0;i<interatedLength;i++){
        let startCharacter=sanitizedInputText[i];
        let lastIndex=stringLength-i-1;
        let endCharacter=sanitizedInputText[lastIndex];
        if(startCharacter!=endCharacter){
            isPalindrome=false;
        }
    }

    return isPalindrome;
}

//function to display the results on screen
function DisplayPalindromeResults(isPalindrome, textInput){
    //Show Results
    let resultMessage;
    let className;
    if(isPalindrome===false){
        resultMessage="Sorry! This word is not a palindrome";
        className="notPalindrome";
        console.log(resultMessage);
    }
    else{
        resultMessage="Congratulations! This word is a palindrome";
        className="isPalindrome";
        console.log(resultMessage);
    }

    let reversedString=textInput.split("").reverse().join("");

    document.getElementById("alert-header").innerHTML=resultMessage;
    document.getElementById("msg").innerHTML=`Your phrase reversed is: ${reversedString}`;
    document.getElementById("alert").classList.remove("invisible");
}