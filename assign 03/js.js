let dice= document.getElementsByClassName('dice');

const roll = function (foo) {
    return Math.floor(Math.random() * foo) + 1;
}

for (var i = 0; i < dice.length;) {
  let x = roll(6);
  dice[i].innerHTML = x;
  i++;
}
