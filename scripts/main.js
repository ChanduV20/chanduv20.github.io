/*  Introduction 

Store a reference to the <h1> in a variable 
const myHeading = document.querySelector("h1")

 Update the text content of the <h1> 
myHeading.textContent = "Hello World!" ;       // it changes h1 heading text
*/

const myImage = document.querySelector("img"); // storing img in myImage variable

myImage.addEventListener("click",() => {       // assigned it a click event handler function . Every time the <imag> is clicked , fuction does the following : 
                                               // - Retrieves the value of the image's src attribute
                                               // Uses a conditional(if..else structure) to check if src values is equal to the path of orginal image: 
                                                  // If it is , code changes the scr vaoue to the paht of the second image , forcing the other image to be loaded inside the <img> element. 
                                                  // If not (means image already change) , the src values swaps backs to the original image path
    const mySrc  = myImage.getAttribute("src"); 
    if(mySrc == "images/firefox-icon.png"){
        myImage.setAttribute("src", "images/firefox2.png");
    }
    else{
        myImage.setAttribute("src","images/firefox-icon.png");
    }
}); // changes the image if we click .


// ---------------------------------------------------------------- 

// Adding a personlaized welcome message 

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");  // storing the name , by taking input & clicking

    if(!myName) setUserName(); // if clicked cancel or given empty string , recursive calls to setUserName

    localStorage.setItem("name",myName);               // uses Web Storage API , which allows us to store data in browser and retrieve it later. 
                                                       //We use the localStorage.setItem() function to create and store a data item called "name" , setting its value to the myName variable , which contains the user's input .

    myHeading.textContent = `Mozilla is cool , ${myName}` ; // we set the textContent of the heading to a string that includes the user's stored name.
}

if (!localStorage.getItem("name")) {                             // checks where the name data items in not already stored in locatStorage. If not the setUserName() function runs to create it 
                                                                 //If it exists , we retrieve the soted name using localStorage.getItem() and set the textContent of the heaading to a string , plus the user'name - just like we did inside setUserName
    setUserName();
} else {
    const storedName = localStorage.getItem("name") ; 
    myHeading.textContent = `Mozilla is cool , ${storedName}`;
}

// add a click event handler function to the button 
myButton.addEventListener("click",()=>{
    setUserName();
});

//! All hail MDN doc
