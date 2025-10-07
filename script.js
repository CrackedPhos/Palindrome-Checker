const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

function isPalindrome(){
    const value =textInput.value.trim();
    const cleanedText = value.replace(/[^a-zA-Z0-9]/g,"");
    const reversed = cleanedText.split('').reverse().join('');

    result.innerHTML;

    if(value === ""){
        alert("Please input a value");
    } else {
        if(cleanedText.toLowerCase() === reversed.toLowerCase()){
            result.innerHTML  = `${value} is a palindrome`;
            result.style.color = "lightgreen";
        } else {
            result.innerHTML = `${value} is not a palindrome`;
            result.style.color = "red";
        }
    }

        console.log(value);
        console.log(reversed)
        console.log(cleanedText)
}

checkBtn.onclick = isPalindrome;





