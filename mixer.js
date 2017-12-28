"use strict";

function Mixer(doc){
  this.x = 0;
  var that = this;
  doc.addEventListener('mousemove', function(e){
    that.x = e.clientX;
  });
}

Mixer.prototype.y = 500;
Mixer.prototype.width = 100;
Mixer.prototype.height = 20;

Mixer.prototype.hit = function(maru){
  // 430 判定Y座標 TODO:後で変える
  return maru.y > 430 && maru.y < this.y && maru.x > this.x && maru.x < this.x + this.width;
}

Mixer.prototype.draw = function(ctx){
  ctx.fillStyle = `rgb(43, 39, 242)`;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}
