"use strict";

function Score(elem) {
  this.elem = elem;
  this.point = 0;
}

Score.prototype.update = function(){
  this.elem.innerHTML = `point: ${this.point}`;
}

Score.prototype.addPoint = function(pt){
  this.point += pt;
}
