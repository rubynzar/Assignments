  var inputVals;
  var x;
  var y;
  var z;
  var result=document.getElementById('result');

  function calculate() {
    var inputVals = document.getElementsByClassName('field');
    var x= inputVals[0].value;
    var y= inputVals[1].value;
    var z= inputVals[2].value;

    // if (x>y && x>z) {
    //   result.innerHTML=x;
    // } else if (y>x && y>z) {
    //   result.innerHTML=y;
    // }
    // else if (z>x && z>y) {
    //   result.innerHTML=z;
    // }

    if (x > y&&z) {
      result.innerHTML=x;
    } else if (y > x&&z) {
      result.innerHTML=y;
    }else if (z > x&&y) {
      result.innerHTML=z;
    }

  }
