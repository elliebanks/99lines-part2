// create an array with 5 friends

//for loop structure = for(starting point; condition; increment or decrement)
/*for(i = 0; i < friends.length; i++){
    console.log(friends[i])
}*/

document.addEventListener("DOMContentLoaded", function () {
    let sing = document.createElement("button");
    let buttonText = document.createTextNode("click me to sing that dumb song");
    sing.appendChild(buttonText);


    sing.addEventListener("click", function () {
        let friends = ["Liz", "Devon", "Bethany", "Taylor", "Jessica"];

       /* for (i = 0; i < friends.length; i++) { */
        let newFriendDiv = document.createElement("div");
        
        friends.forEach(function (name, index) {
                document.body.appendChild(newFriendDiv);
                let newFriendHeader = document.createElement("h3");
                
                
                newFriendDiv.setAttribute('class', 'friend');
                newFriendHeader.innerText = name;
                newFriendDiv.className = "friend";
                newFriendDiv.appendChild(newFriendHeader);
                
                
                for (j = 99; j > 0; j--) {
                    if (j > 2) {
                        let lyric = document.createElement("p");
                        
                        lyric.innerText = (j + ' lines of code in the file, ' + j + ' lines of code. ' + name +
                        ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file.')
                        newFriendDiv.appendChild(lyric)
                    }
                    else if (j == 2) {
                        let lyric = document.createElement("p");
                        
                        lyric.innerText = (j + ' lines of code in the file, ' + j +
                        ' lines of code. ' + name + ' strikes one out, clears it all out, ' + (j - 1) +
                        ' line of code in the file.')
                        newFriendDiv.appendChild(lyric)
                        
                    } else {
                        let lyric = document.createElement("p");
                        
                        lyric.innerText = (j + ' line of code in the file,' + j + ' line of code. ' + name
                        + ' strikes it out, clears it all out, 0 lines of code in the file. ')
                        newFriendDiv.appendChild(lyric)
                    }
                }
            });
        
    });
  document.body.appendChild(sing)
});




/*newFriendParagraph.innerHTML += f + " lines of code in the file, " + f +
" lines of code. " + name + " strikes one out, clears it all out, " + (f - 1) +
" lines of code in the file. " + "</br>" ; */
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


