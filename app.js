// create an array with 5 friends
let friends = ["Liz", "Devon", "Bethany", "Taylor", "Jessica"];

//for loop structure = for(starting point; condition; increment or decrement)
/*for(i = 0; i < friends.length; i++){
    console.log(friends[i])
}*/


function singSong() {
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
}



