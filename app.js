// create an array with 5 friends

//for loop structure = for(starting point; condition; increment or decrement)
/*for(i = 0; i < friends.length; i++){
    console.log(friends[i])
}*/

let friends = ["Liz", "Devon", "Bethany", "Taylor", "Jessica"];
let body = document.body;




window.addEventListener("DOMContentLoaded", function () {
    let sing = document.createElement("button");
    let buttonText = document.createTextNode("click me to sing that dumb song");
    sing.appendChild(buttonText);
    document.body.appendChild(sing);
    
    sing.addEventListener("click", function () {
        friends.forEach(function (name, index) {
            let newFriendDiv = document.createElement("div");
            let newFriendHeader = document.createElement("h3");
            let newFriendParagraph = document.createElement("p");
            
            newFriendDiv.setAttribute("class", "friend");
            newFriendHeader.innerText = name;
            newFriendDiv.appendChild(newFriendHeader);
            newFriendHeader.appendChild(newFriendParagraph);
            
            
            for (let f = 99; f > 0; f--) {
                if (f > 1) {
                    newFriendParagraph.innerHTML += f + " lines of code in the file, " + f +
                    " lines of code. " + name + " strikes one out, clears it all out " + (f - 1) +
                    " lines of code in the file. " + "</br>" ;
                } else {
                    newFriendParagraph.innerHTML += " 1 line of code in the file, 1 line of code. " + name
                    + " strikes it out, clears it all out, 0 lines of code in the file. " + "</br>";
                }
            }
            body.appendChild(newFriendDiv);
        });
    });
});
    
/*sing.addEventListener("click", function () {
         for (let f = 0; f < friends.length; f++) {
             for (let j = 99; j > 0; j--)
                 if (j > 2) {
                     console.log(j + " lines of code in the file, " + j + " lines of code, " + friends[f] +
                         " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file.")
                 } else if (j === 2) {
                 console.log(j + " lines of code in the file, " + j + " lines of code, " + friends[f] +
                     " strikes one out, clears it all out, " + (j - 1) + " line of code in the file.")
                 } else {
                 console.log(j + " line of code in the file, " + j + " line of code, " + friends[f] +
                     " strikes one down, clears it all out, no more lines of code in the file.")
             }
         }
     }*/


