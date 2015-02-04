/*
  GSC:Gold Silver Copper currency converter
  written by Carlos Serrano >> thefuzzywarble[at]gmail.com <<
  G/S = integer : C = decimal remainder :: e.g. gsc(9458.64) returns 94g58s64c
*/

function gsc(total) {
  var g,s,c,gT,sT,cT,gD,sD,cD,newTotal = total;
  g = function() {
    if ( (Math.floor(total)/100) >= 1 ) {
      gT = Math.abs(Math.floor(total / 100));
      return (gT);
    }
  }

  s = function() {
    var thisG, thisS;
    if ( g() > 0 ) { thisG = (g() * 100) } else { thisG = 0; }
    if ( (total - thisG) > 1 ) { thisS = Math.floor(total - thisG); }
    return ( thisS );
  }

  c = function() {
    if ( Math.floor(newTotal) == total ) {
      return; //no remainder == no copper
    } else {
      cT = ((total - Math.floor(total)).toFixed(2) * 100);
      return ( cT );
    }
  }
  gD = ( g() ) ? (g() + "g"):"";
  sD = ( s() ) ? (s() + "s"):"";
  cD = ( c() ) ? (c() + "c"):"";
  return ( gD + sD + cD );
}
