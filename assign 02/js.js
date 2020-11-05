const roll = function (foo) {
    return Math.floor(Math.random() * foo) + 1;
}

// usage
let x = roll(6)

let dice= document.getElementsByClassName('dice');
console.log(dice[0]);
 dice[0].innerHTML = x;
