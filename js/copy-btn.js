const copyText = document.getElementById("bonus-input");
const copyText2 = document.getElementById("bonus-input2");

//copy button
let copy_button = ()=> {
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}
//copy button media form mobile
let copy_button2 = ()=> {
    /* Select the text field */
    copyText2.select();
    copyText2.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}